import {Route} from "nextbone-routing";
import Model from '../model';
import View from './book-create-view';
import storage from '../storage';

export default class extends Route {
  activate() {
    this.model = new Model();
    return storage.findAll({ajaxSync: true}).then(collection => {
      this.collection = collection;
    });
  }

  static component = View;

  viewOptions() {
    return {
      collection: this.collection,
      model: this.model
    }
  }
};
