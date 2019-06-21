import { Collection, Events } from 'nextbone'
import { VirtualCollection } from 'nextbone/virtualcollection'
import { isFunction } from 'underscore'

const isClassDecorated = Symbol('VirtualStateClass')

const bindVirtualCollection = (el, virtualCollection) => {
  el.listenTo(virtualCollection, 'sort update reset change', () => el.requestUpdate())
}

const ensureViewClass = ElementClass => {
  if (ElementClass[isClassDecorated]) return ElementClass
  ElementClass[isClassDecorated] = true
  const ViewClass = class extends ElementClass {
    connectedCallback() {
      super.connectedCallback && super.connectedCallback()
      const virtualStates = this.constructor.__virtualStates
      if (virtualStates) {
        virtualStates.forEach(name => {
          const virtualCollection = this[name]
          if (virtualCollection) {
            // todo: in case of previously disconnected must rebind parent collection also
            bindVirtualCollection(this, virtualCollection)
          }
        })
      }
    }

    disconnectedCallback() {
      const virtualStates = this.constructor.__virtualStates
      if (virtualStates) {
        virtualStates.forEach(name => {
          const virtualCollection = this[name]
          if (virtualCollection) {
            virtualCollection.stopListening()
            this.stopListening(virtualCollection)
          }
        })
      }
      super.disconnectedCallback && super.disconnectedCallback()
    }
  }
  Events.extend(ViewClass.prototype)
  return ViewClass
}

const registerVirtualState = (ctor, name, key, options = {}) => {
  const virtualStates = ctor.__virtualStates || (ctor.__virtualStates = new Set())
  virtualStates.add(name)
  const desc = {
    get() {
      return this[key]
    },
    set(value) {
      let virtualCollection = this[key]
      if (value) {
        if (!value instanceof Collection) {
          throw new Error(`Error setting ${name} property: value must be a Collection`)
        }
      }

      if (!virtualCollection) {
        virtualCollection = new VirtualCollection(null, {
          filter: isFunction(options.filter) ? options.filter.bind(this) : options.filter,
        })
        if (this.isConnected) {
          bindVirtualCollection(this, virtualCollection)
        }
      }

      virtualCollection.parent = value

      this[key] = virtualCollection
      this.requestUpdate(name, virtualCollection)
    },
    configurable: true,
    enumerable: true,
  }
  Object.defineProperty(ctor.prototype, name, desc)
  if (ctor.createProperty) {
    ctor.createProperty(name, { type: Object, noAccessor: true })
  }
}

export const virtualState = (optionsOrProtoOrDescriptor, fieldName, options) => {
  const isLegacy = typeof fieldName === 'string'
  if (!isLegacy && typeof optionsOrProtoOrDescriptor.kind !== 'string') {
    // passed options
    return function(protoOrDescriptor) {
      return virtualState(protoOrDescriptor, fieldName, optionsOrProtoOrDescriptor)
    }
  }

  const name = isLegacy ? fieldName : optionsOrProtoOrDescriptor.key
  const key = typeof name === 'symbol' ? Symbol() : `__${name}`
  if (!isLegacy) {
    const { kind, placement, descriptor, initializer } = optionsOrProtoOrDescriptor
    return {
      kind,
      placement,
      descriptor,
      initializer,
      key,
      finisher(ctor) {
        registerVirtualState(ctor, name, key, options)
        return ensureViewClass(ctor)
      },
    }
  }
  registerVirtualState(optionsOrProtoOrDescriptor.constructor, name, key, options)
}
