const Promise = require('bluebird');
const _ = require('lodash');

module.exports = function() {
  const {Widget} = this;

  Widget.ColorsShow = Widget.extend({
    root: '.colors--show',

    edit() {
      return this.click({
        text: 'Edit',
      });
    },

    isActive() {
      return this.find({
        text: 'Deactivate',
      }).then((el) => !!el);
    },

    destroy() {
      return this.click({
        text: 'Destroy',
      });
    },

    getDetails() {
      return new Widget.ColorsShow.Details().toHash();
    },
  });

  Widget.ColorsShow.DetailsItem = Widget.extend({
    toHash() {
      return Promise.all([
        this.read('.list-group-item-heading'),
        this.read('.list-group-item-text'),
      ]).spread((headline, contents) => _.object([headline.toLowerCase()], [contents]));
    },
  });

  Widget.ColorsShow.Details = Widget.List.extend({
    itemSelector: '.list-group-item',
    root: '.list-group',
    itemClass: Widget.ColorsShow.DetailsItem,

    toHash() {
      return this.invoke('toHash').then((colors) => _.reduce(
          colors,
          (a, b) => _.extend(a, b),
          {},
        ));
    },
  });
};
