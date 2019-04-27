module.exports = function() {
  const {Widget} = this;

  Widget.BooksLibraryItem = Widget.extend({
    isActive() {
      return this.getAttribute('class').then((className) => className.indexOf('active') !== -1);
    },
    getTitle() {
      return this.read('.list-group-item-heading');
    },
  });

  Widget.BooksLibrary = Widget.List.extend({
    root: '.books__library .list-group',
    itemSelector: '.list-group-item',
    itemClass: Widget.BooksLibraryItem,
    isActive(index) {
      return this.at(index).then((w) => w.isActive());
    },
  });
};
