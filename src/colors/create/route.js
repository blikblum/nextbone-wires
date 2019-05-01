import { Route, elProperty } from 'nextbone-routing'
import BookCreateView from './book-create-view'
import storage from '../storage'
import Color from '../model'

export default class extends Route {
  static component = BookCreateView

  @elProperty
  model

  @elProperty
  collection

  activate() {
    this.model = new Color()
    return storage.findAll({ ajaxSync: true }).then(collection => {
      this.collection = collection
    })
  }
}
