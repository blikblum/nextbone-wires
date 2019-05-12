import { Route, Region } from 'nextbone-routing'
import HeaderService from '../header/service'
import $ from 'jquery'

// based on https://tympanus.net/Development/PageTransitions/

class PageTransitionRegion extends Region {
  attachEl(el) {
    const $el = $(el)
    const $targetEl = $(this.targetEl)
    const animationClass = this.inClass

    super.attachEl(el)
    $el.addClass('pt-page pt-page-current')
    if (animationClass && this.isSwappingEl) {
      $targetEl.css('overflow', 'hidden')
      $el.addClass(animationClass).one('animationend', () => {
        $targetEl.css('overflow', '')
        $el.removeClass(animationClass)
        el.dispatchEvent(new CustomEvent('page-transition-end'))
      })
    } else {
      el.dispatchEvent(new CustomEvent('page-transition-end'))
    }
  }

  detachEl(el) {
    const $el = $(el)
    const $targetEl = $(this.targetEl)
    const animationClass = this.outClass

    if (animationClass && this.isSwappingEl) {
      $targetEl.css('overflow', 'hidden')
      $el.addClass(animationClass).one('animationend', () => {
        $targetEl.css('overflow', '')
        super.detachEl(el)
      })
    } else {
      super.detachEl(el)
    }
  }
}

function getTransitionTarget(routes) {
  let lastRoute
  let dotIndex
  if (routes.length) {
    lastRoute = routes[routes.length - 1]
    dotIndex = lastRoute.name.indexOf('.')
    return dotIndex === -1 ? lastRoute.name : lastRoute.name.slice(0, dotIndex)
  }
  return ''
}

export default class extends Route {
  activate() {
    return HeaderService.request('getItems').then(items => {
      this.headerItems = items
    })
  }

  getOutlet() {
    // dynamically determine transition direction
    // see more options at https://tympanus.net/Development/PageTransitions/ source
    let inClass
    let outClass
    const transition = this.$router.state.activeTransition
    const target = getTransitionTarget(transition.routes)
    const prevTarget = getTransitionTarget(transition.prev.routes)

    if (target === prevTarget) {
      // same root route. Do a vertical animation
      if (transition.routes.length > transition.prev.routes.length) {
        outClass = 'pt-page-scaleDown'
        inClass = 'pt-page-moveFromBottom pt-page-ontop'
      } else {
        outClass = 'pt-page-moveToBottom pt-page-ontop'
        inClass = 'pt-page-scaleUp'
      }
    } else {
      // do a horizontal animation
      const direction =
        this.headerItems.findIndex(model => model.get('path') === target) -
        this.headerItems.findIndex(model => model.get('path') === prevTarget)

      if (direction < 0) {
        outClass = 'pt-page-moveToRight'
        inClass = 'pt-page-moveFromLeft'
      } else {
        outClass = 'pt-page-moveToLeft'
        inClass = 'pt-page-moveFromRight'
      }
    }

    const outlet =
      this.outletRegion ||
      (this.outletRegion = new PageTransitionRegion(this.el.querySelector('.application__content')))
    outlet.inClass = inClass
    outlet.outClass = outClass

    return outlet
  }
}
