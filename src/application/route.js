import {Route, Region} from "nextbone-routing";
import ApplicationView from './application-view';
import HeaderService from '../header/service';

//based on https://tympanus.net/Development/PageTransitions/

class PageTransitionRegion extends Region {
  initialize(options) {
    this.animation = options.animation;
  }

  attachHtml(view) {
    var hasAnimation = !!this.animation && !!this.animation.inClass;

    this.$el.append(view.el);
    view.$el.addClass("pt-page pt-page-current");
    if (hasAnimation && this.isSwappingView()) {
      this.$el.css('overflow', 'hidden');
      view.$el.addClass(this.animation.inClass).one("animationend", () => {
        this.$el.css('overflow', '');
        view.$el.removeClass(this.animation.inClass);
        view.triggerMethod('page:transition:end');
      });
    } else {
      view.triggerMethod('page:transition:end');
    }
  }

  removeView(view) {
    var hasAnimation = !!this.animation && !!this.animation.outClass;

    if (hasAnimation && this.isSwappingView()) {
      this.$el.css('overflow', 'hidden');
      view.$el.addClass(this.animation.outClass).one("animationend", () => { 
        this.$el.css('overflow', '');
        view.destroy();
      });
    } else {
      view.destroy();
    }
  }
}

function getTransitionTarget(routes) {
  let lastRoute, dotIndex;
  if (routes.length) {
    lastRoute = routes[routes.length - 1];
    dotIndex = lastRoute.name.indexOf('.');
    return dotIndex === -1 ? lastRoute.name : lastRoute.name.slice(0, dotIndex);
  }
  return ''
}

export default class extends Route {
  static component = ApplicationView;

  activate() {
    return HeaderService.request('getItems').then(items => {
      this.headerItems = items;
    })
  }

  getOutletFake() {
    // dynamically determine transition direction
    // see more options at https://tympanus.net/Development/PageTransitions/ source
    let inClass, outClass;
    const transition = this.$router.state.activeTransition;
    const target = getTransitionTarget(transition.routes);
    const prevTarget = getTransitionTarget(transition.prev.routes);

    if (target === prevTarget) {
      // same root route. Do a vertical animation
      if (transition.routes.length > transition.prev.routes.length) {
        outClass = 'pt-page-scaleDown';
        inClass = 'pt-page-moveFromBottom pt-page-ontop';
      } else {
        outClass = 'pt-page-moveToBottom pt-page-ontop';
				inClass = 'pt-page-scaleUp';
      }
    } else {
      // do a horizontal animation
      const direction = this.headerItems.findIndex(model => model.get('path') === target) - this.headerItems.findIndex(model => model.get('path') === prevTarget);

      if (direction < 0) {
        outClass = 'pt-page-moveToRight';
        inClass = 'pt-page-moveFromLeft';        
      } else {
        outClass = 'pt-page-moveToLeft';
        inClass = 'pt-page-moveFromRight';        
      }      
    }

    const outlet = this.view.getRegion('content');
    outlet.animation.inClass = inClass;
    outlet.animation.outClass = outClass;

    return outlet;
  }
};