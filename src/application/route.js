import {Route} from 'marionette.routing';

export default Route.extend({
  childRoutes: {
    colors: function () {
      return import('../colors/route');
    }
  },

  renderView(region, view) {
    console.log('app - renderView')
    Route.prototype.renderView.call(region, view);
  }
});