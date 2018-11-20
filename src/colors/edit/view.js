import nprogress from 'nprogress';
import FormBehavior from '../../forms/behavior';
import {View} from 'backbone.marionette';
import template from './template.hbs';
import storage from '../storage';
import Radio from 'backbone.radio';
import _ from 'underscore';
import Syphon from 'backbone.syphon';

export default View.extend({
  template: template,

  behaviors: {
    form: { behaviorClass: FormBehavior }
  },

  templateContext() {
    return {
      errors: this.model.validationError
    };
  },

  events: {
    'submit form': 'handleSubmit'
  },

  handleSubmit() {
    let errors = this.model.validate(this.form);

    if (errors) {
      this.model.validationError = errors;
      this.render();
    } else {
      nprogress.start();
      this.model.set(this.form);
      storage.save(this.model).then(() => {
        Radio.channel('router').request('transitionTo', 'colors.show', {colorid: this.model.id});
      });
    }
  },

  hasUnsavedChanges() {
    return !_.isEqual(Syphon.serialize(this), _.omit(this.model.attributes, 'id', 'active'))
  }
});
