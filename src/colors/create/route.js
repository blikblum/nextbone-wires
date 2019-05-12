import { Route, elProperty } from 'nextbone-routing'
import BookCreateView from './color-create-view'
import Color from '../model'

export default class extends Route {
  static component = BookCreateView

  @elProperty
  model

  @elProperty
  collection

  activate() {
    this.model = new Color()
  }
}
