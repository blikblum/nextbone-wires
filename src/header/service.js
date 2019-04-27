import { Service } from 'nextbone-radio';
import { Collection } from 'nextbone';
import { Region } from 'nextbone-routing';
import View from './header-view';

class HeaderService extends Service {
  static requests = {
    add: 'add',
    remove: 'remove',
    activate: 'activate',
    getItems: 'getItems',
  };

  setup(options = {}) {
    this.container = options.container;
  }

  start() {
    const { container } = this;
    if (container instanceof Region) {
      this.containerRegion = container;
    } else if (container instanceof HTMLElement) {
      this.containerRegion = new Region(container);
    } else {
      this.containerRegion = new Region(document.querySelector(container));
    }
    this.collection = new Collection();
    this.el = new View();
    this.el.collection = this.collection;
    this.containerRegion.show(this.el);
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
}

export default new HeaderService();
