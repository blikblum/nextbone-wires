import {Route} from 'marionette.routing';

export default Route.extend({
  childRoutes: {
    colors: function () {
      return import('../colors/route');
    }
  }
});