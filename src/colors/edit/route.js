import { Route, elProperty, elEvent } from 'nextbone-routing'
import View from './color-edit-view'
import ModalService from '../../modal/service'
import storage from '../storage'
import nprogress from 'nprogress'

export default class extends Route {
  static component = View

  @elProperty
  model

  activate() {
    this.model = this.context.colorModel
  }

  deactivate() {
    if (this.el.hasUnsavedChanges(this.model)) {
      return ModalService.confirm({
        title: 'You have unsaved changes',
        text: `Are you sure you want to exit without saving?`,
        yes: 'Yes, discard changes',
        no: 'No, abort exit',
      })
    }
  }

  @elEvent('save:color', { dom: false })
  saveColor(model) {
    nprogress.start()
    storage.save(model).then(() => {
      this.$router.transitionTo('colors.show', { colorid: model.id })
    })
  }
}
