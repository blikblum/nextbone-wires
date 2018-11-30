import {Route} from 'marionette.routing';
import LayoutView from './layout-view';
import HeaderService from '../header/service';

function getTransitionTarget(routes) {
  let lastRoute, dotIndex;
  if (routes.length) {
    lastRoute = routes[routes.length - 1];
    dotIndex = lastRoute.name.indexOf('.');
    return dotIndex === -1 ? lastRoute.name : lastRoute.name.slice(0, dotIndex);
  }
  return ''
}

export default Route.extend({
  viewClass: LayoutView,

  activate () {
    return HeaderService.request('getItems').then(items => {
      this.headerItems = items;
    })
  },

  getOutlet() {
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
});