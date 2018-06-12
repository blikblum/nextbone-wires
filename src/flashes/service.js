import Service from 'radio.service';
import Collection from './collection';
import CollectionView from './collection-view';
import {Region} from 'backbone.marionette';

const FlashesService = Service.extend({
  setup(options = {}) {
    this.container = options.container;
    if (!this.container) {
      this.container = new Region({el: options.el});
    }    
  },

  start() {
    this.collection = new Collection();
    this.view = new CollectionView({
      collection: this.collection
    });
    this.container.show(this.view);
  },

  requests: {
    add: 'add',
    remove: 'remove',
  },

  add(flash) {
    this.collection.add(flash);
  },

  remove(flash) {
    var model = this.collection.findWhere(flash);
    if (model) {
      model.destroy();
    }
  }
});

export default new FlashesService();
