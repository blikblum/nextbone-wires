import { Route, elProperty } from 'nextbone-routing'
import ColorView from './color-view'
import storage from '../storage'

export default class extends Route {
  static component = ColorView

  static providedContexts = {
    colorModel: { property: 'model' },
  }

  @elProperty
  model

  activate(transition) {
    return storage.find(transition.params.colorid).then(model => {
      this.model = model
    })
  }
}
