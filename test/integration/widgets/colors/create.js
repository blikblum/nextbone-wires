module.exports = function() {
  const {Widget} = this;

  Widget.ColorsCreate = Widget.extend({
    root: '.colors--create',
  });

  Widget.ColorsCreate.Form = Widget.Form.extend({
    root: '.colors__form',
  });
};
