import { Service } from 'nextbone-radio';
import Collection from './collection';
import CollectionView from './collection-view';
import {Region} from "nextbone-routing";

class FlashesService extends Service {
  static requests = {
    add: 'add',
    remove: 'remove',
  }

  setup(options = {}) {
    this.container = options.container;
    if (!this.container) {
      this.container = new Region({el: options.el});
    }    
  }

  start() {
    this.collection = new Collection();
    this.view = new CollectionView({
      collection: this.collection
    });
    this.container.show(this.view);
  }  

  add(flash) {
    this.collection.add(flash);
  }

  remove(flash) {
    var model = this.collection.findWhere(flash);
    if (model) {
      model.destroy();
    }
  }
};

export default new FlashesService();
