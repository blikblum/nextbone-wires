import {Route} from 'marionette.routing';
import View from './view';
import ModalService from '../../modal/service';

export default Route.extend({

  viewClass: View,

  viewOptions() {
    return {
      model: this.getContext().request('colorModel')
    }
  },

  deactivate(transition) {
    if (this.view.hasUnsavedChanges()) {
      return ModalService.request('confirm', {
        title : 'You have unsaved changes',
        text  : `Are you sure you want to exit without saving?`,
        yes: 'Yes, discard changes',
        no: 'No, abort exit'
      }).then(confirmed => {
        if (!confirmed) {
          transition.cancel();
        }          
      });            
    }
  }
});
