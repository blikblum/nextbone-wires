import Service from 'radio.service';
import {Collection} from 'backbone';
import {Region} from 'backbone.marionette';
import View from './view';

const HeaderService = Service.extend({
  setup(options = {}) {
    this.container = options.container;
    if (!this.container) {
      this.container = new Region({el: options.el});
    }
  },

  start() {
    this.collection = new Collection();
    this.view = new View({ collection: this.collection });
    this.container.show(this.view);
  },

  requests: {
    add: 'add',
    remove: 'remove',
    activate: 'activate',
    getItems: 'getItems'
  },

  add(model) {
    this.collection.add(model);
  },

  remove(model) {
    model = this.collection.findWhere(model);
    this.collection.remove(model);
  },

  activate(model) {
    this.collection.invoke('set', 'active', false);
    model = this.collection.findWhere(model);
    if (model) {
      model.set('active', true);
    }
  },

  getItems() {
    return this.collection;
  }
});

export default new HeaderService();
