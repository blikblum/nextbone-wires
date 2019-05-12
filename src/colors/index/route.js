import { Route, elProperty } from 'nextbone-routing'
import ColorsView from './colors-view'
import storage from '../storage'

export default class extends Route {
  static component = ColorsView

  @elProperty
  colors

  @elProperty
  page

  activate(transition) {
    const pageParam = transition.query.page
    this.page = (pageParam && parseFloat(pageParam)) || 1
    return storage.findAll().then(colors => {
      this.colors = colors
    })
  }

  updateEl(transition) {
    // updateView is called when the route is already rendered (route.view !== undefined)
    const pageParam = transition.query.page
    const page = (pageParam && parseFloat(pageParam)) || 1
    this.el.page = page
    // the default behavior is the current view be replaced by a new view instance
    // by returning true, the current view is is not destroyed / removed
    return true
  }
}
