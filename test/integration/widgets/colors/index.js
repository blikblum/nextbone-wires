module.exports = function() {
  const {Widget} = this;

  Widget.ColorsIndex = Widget.extend({
    root: '.colors--index',

    create() {
      return this.click({
        text: 'Create',
      });
    },
  });

  Widget.ColorsIndex.List = Widget.List.extend({
    root: '.colors .list-group',
    itemSelector: '.colors__item',
  });
};
