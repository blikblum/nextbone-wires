import { Route } from 'nextbone-routing';
import View from './view';
import storage from '../storage';

export default class extends Route {
  activate(transition) {
    return storage.find(+transition.params.colorid).then(model => {
      this.model = model;
    });
  }

  static contextRequests = {
    colorModel() {
      return this.model;
    },
  };

  static component = View;

  viewOptions() {
    return {
      model: this.model,
    };
  }
}
