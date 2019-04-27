import { Route } from 'nextbone-routing';
import BookView from './book-view';
import storage from '../storage';

export default class extends Route {
  static component = BookView;

  activate(transition) {
    return storage.findAll({ ajaxSync: true }).then(collection => {
      this.collection = collection;
      this.model = this.collection.get(+transition.params.bookid);
      this.collection.active = this.model;
    });
  }

  prepareEl(el) {
    el.model = this.model;
  }
}
