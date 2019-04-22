import * as Backbone from "nextbone";

export default class extends Backbone.Model {
  urlRoot = '/api/colors';
  localStorage = new Backbone.LocalStorage('colors');

  static defaults = {
    active: false
  };

  validate(attrs = {}) {
    let errors = [];

    if (attrs.name === '') {
      errors.push('Missing "name" field');
    }

    if (attrs.hex === '') {
      errors.push('Missing "hex" field');
    }

    return errors.length > 0 ? errors : undefined;
  }
};
