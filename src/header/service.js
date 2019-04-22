import {Service} from 'nextbone-radio';
import {Collection} from "nextbone";
import {Region} from "nextbone-routing";
import View from './view';

class HeaderService extends Service {
  static requests = {
    add: 'add',
    remove: 'remove',
    activate: 'activate',
    getItems: 'getItems'
  }

  setup(options = {}) {
    this.container = options.container;
    if (!this.container) {
      this.container = new Region({el: options.el});
    }
  }

  start() {
    this.collection = new Collection();
    this.view = new View({ collection: this.collection });
    this.container.show(this.view);
  }


  add(model) {
    this.collection.add(model);
  }

  remove(model) {
    model = this.collection.findWhere(model);
    this.collection.remove(model);
  }

  activate(model) {
    this.collection.invoke('set', 'active', false);
    model = this.collection.findWhere(model);
    if (model) {
      model.set('active', true);
    }
  }

  getItems() {
    return this.collection;
  }
};

export default new HeaderService();
