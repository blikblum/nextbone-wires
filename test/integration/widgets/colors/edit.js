const Driver = require('selenium-webdriver');

module.exports = function() {
  const {Widget} = this;

  Widget.ColorsEdit = Widget.extend({
    root: '.colors--edit',
  });

  Widget.ColorsEdit.Form = Widget.Form.extend({
    root: '.colors__form',

    clearAndSubmitWith(vals) {
      const self = this;
      return this.findAll('input')
        .then((els) => Driver.promise.map(els, (el) => el.clear()))
        .then(() => self.submitWith(vals));
    },
  });
};
