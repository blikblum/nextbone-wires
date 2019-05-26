import { Region } from 'nextbone/dom-utils'
import { Route } from 'nextbone-routing'
import storage from './storage'
import BooksView from './books-view'
import $ from 'jquery'

// inspired by https://3dtransforms.desandro.com/card-flip
// todo: disable or replace animation on small screens
class FlipRegion extends Region {
  attachEl(el) {
    const $el = $(el)
    const $targetEl = $(this.targetEl)
    $el.addClass('flip-card__face').appendTo($targetEl)
    if (this.isSwappingEl) {
      const isFlipped = $targetEl.hasClass('is-flipped')
      $el.addClass(`flip-card__face--${isFlipped ? 'front' : 'back'}`)
      $targetEl.toggleClass('is-flipped')
    }
  }

  detachEl(el) {
    if (this.isSwappingEl) {
      $(this.targetEl).one('transitionend', () => {
        super.detachEl(el)
      })
    } else {
      super.detachEl(el)
    }
  }
}

const outletKey = Symbol('outletKey')

export default class extends Route {
  static component = BooksView

  activate(transition) {
    if (this.previousRoute) {
      transition.redirectTo(
        this.previousRoute.name,
        this.previousRoute.params,
        this.previousRoute.query,
      )
      this.previousRoute = null
      return
    }
    return storage.findAll({ ajaxSync: true }).then(collection => {
      this.collection = collection
    })
  }

  deactivate(transition) {
    const prevRoutes = transition.prev.routes
    this.previousRoute = prevRoutes[prevRoutes.length - 1]
  }

  prepareEl(el) {
    el.collection = this.collection
  }

  getOutlet() {
    let result =
      this.el[outletKey] ||
      (this.el[outletKey] = new FlipRegion(this.el.querySelector(BooksView.outlet)))

    return result
  }
}
