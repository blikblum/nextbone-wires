import {Route} from "nextbone-routing";
import LayoutView from './layout-view';
import storage from '../storage';

export default class extends Route {
  activate(transition) {
    let pageParam = transition.query.page;
    this.page = pageParam && parseFloat(pageParam) || 1;
    return storage.findAll().then(collection => {
      this.collection = collection;
    });
  }

  updateView(transition) {
    // updateView is called when the route is already rendered (route.view !== undefined)
    let pageParam = transition.query.page;
    let page = pageParam && parseFloat(pageParam) || 1;
    this.view.updateState({page: page});
    // the default behavior is the current view be replaced by a new view instance
    // by returning true, the current view is is not destroyed / removed
    return true
  }

  static component = LayoutView;

  viewOptions() {
    return {
      collection: this.collection,
      page: this.page
    }
  }
};
