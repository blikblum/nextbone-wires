import {Route} from 'marionette.routing';
import View from './view';
import FlashesService from '../../flashes/service';

export default Route.extend({

  viewClass: View,

  viewOptions() {
    return {
      model: this.getContext().request('colorModel')
    }
  },

  deactivate(transition) {
    if (this.view.hasUnsavedChanges()) {
      FlashesService.request('add', {
        timeout : 5000,
        type    : 'info',
        title   : `View change not allowed`,
        body    : `You have unsaved changes.`
      });
      transition.cancel()
    }
  }
});
