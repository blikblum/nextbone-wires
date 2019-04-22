import {Route} from "nextbone-routing";
import storage from './storage';
import BooksView from './books-view';

export default class extends Route {
  static component = BooksView;

  activate(transition) {
    if (this.previousRoute) {
      transition.redirectTo(this.previousRoute.name, this.previousRoute.params, this.previousRoute.query)
      this.previousRoute = null
      return ;
    }
    return storage.findAll({ajaxSync: true}).then(collection => {
      this.collection = collection;
    });
  }

  deactivate(transition) {
    let prevRoutes = transition.prev.routes;
    this.previousRoute = prevRoutes[prevRoutes.length - 1]
  }

  prepareEl(el) {  
    el.collection = this.collection    
  }
};
