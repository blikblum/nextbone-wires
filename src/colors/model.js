import { Model } from 'nextbone'
import { localStorage } from 'nextbone/localstorage'

@localStorage('colors')
class Color extends Model {
  urlRoot = '/api/colors'

  static defaults = {
    active: false,
  }

  validate(attrs = {}) {
    const errors = []

    if (!attrs.name) {
      errors.push('Missing "name" field')
    }

    if (!attrs.hex) {
      errors.push('Missing "hex" field')
    }

    return errors.length > 0 ? errors : undefined
  }
}

export default Color
