import {Component} from "component";
import template from './item-template.hbs';

export default class extends Component {
  render = template;

  className() {
    return `flashes__alert alert alert-${this.model.get('type')}`;
  }

  attributes = {
    role: 'alert'
  };

  events = {
    'click button.close': 'dismiss'
  };

  dismiss() {
    this.model.destroy();
  }
};
