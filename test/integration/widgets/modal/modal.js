module.exports = function() {
  const {Widget} = this;

  Widget.Modal = Widget.extend({
    root: '.modal-dialog',
    confirm() {
      return this.click({ text: 'Affirmative' });
    },
  });
};
