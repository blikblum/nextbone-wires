import { Service } from 'nextbone-radio';
import { Region } from 'nextbone-routing';
import Collection from './collection';
import FlashesView from './flashes-view';

class FlashesService extends Service {
  static requests = {
    add: 'add',
    remove: 'remove',
  };

  setup(options = {}) {
    this.container = options.container;
  }

  start() {
    const {container} = this;
    if (container instanceof Region) {
      this.containerRegion = container;
    } else if (container instanceof HTMLElement) {
      this.containerRegion = new Region(container);
    } else {
      this.containerRegion = new Region(document.querySelector(container));
    }
    this.collection = new Collection();
    this.el = new FlashesView();
    this.el.collection = this.collection;
    this.containerRegion.show(this.el);
  }

  add(flash) {
    this.collection.add(flash);
  }

  remove(flash) {
    const model = this.collection.findWhere(flash);
    if (model) {
      model.destroy();
    }
  }
}

export default new FlashesService();
