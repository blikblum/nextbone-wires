import {Route} from 'marionette.routing';
import ColorsIndexRoute from './index/route';
import ColorsShowRoute from './show/route';
import ColorsEditRoute from './edit/route';
import ColorsCreateRoute from './create/route';
import storage from './storage';

export default Route.extend({
  activate() {
    //ensure data is loaded for all children routes
    return storage.findAll({ajaxSync: true});
  },

  childRoutes: {
    'colors.index': ColorsIndexRoute,
    'colors.show': ColorsShowRoute,
    'colors.edit': ColorsEditRoute,
    'colors.create': ColorsCreateRoute
  }
});

