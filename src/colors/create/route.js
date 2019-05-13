import Color from '../model'
import ColorEditRoute from '../edit/route'


export default class extends ColorEditRoute {
  activate() {
    this.model = new Color()
  }
}
