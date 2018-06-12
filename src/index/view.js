import {View} from 'backbone.marionette';
import template from './template.hbs';

export default View.extend({
  template: template,
  className: 'index',
  onPageTransitionEnd() {
    this.$('.index__billboard').removeClass('d-none').children().addClass('shown');    
  }
});
