import {Route} from "nextbone-routing";
import View from './color-edit-view';
import ModalService from '../../modal/service';


export default class extends Route {
  static component = View;

  prepareEl(el) {
    el.model = this.context.colorModel
  }

  deactivate(transition) {
    if (this.el.hasUnsavedChanges()) {
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
};
