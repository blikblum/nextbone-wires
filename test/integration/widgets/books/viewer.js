module.exports = function() {
  const {Widget} = this;

  Widget.BooksViewer = Widget.extend({
    root: '.books__viewer',
    getTitle() {
      return this.read('.books__title h1');
    },
  });
};
