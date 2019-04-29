import nprogress from 'nprogress'
import { Component, html } from 'component'
import { Radio } from 'nextbone-radio'
import _ from 'underscore'
import { state, event } from 'nextbone'
import storage from '../storage'
import Color from '../model'

export default class ColorEditView extends Component {
  @state({ copy: true })
  model = new Color()

  @event('submit', 'form')
  handleSubmit() {
    const errors = this.model.validate(this.form)

    if (errors) {
      this.model.validationError = errors
      this.render()
    } else {
      nprogress.start()
      this.model.set(this.form)
      storage.save(this.model).then(() => {
        Radio.channel('router').request('transitionTo', 'colors.show', { colorid: this.model.id })
      })
    }
  }

  hasUnsavedChanges() {
    return !_.isEqual(Syphon.serialize(this), _.omit(this.model.attributes, 'id', 'active'))
  }

  render() {
    const errors = this.model.validationError
    return html`
      <div class="colors colors--edit container">
        <div class="page-header"><h1>Colors: Edit</h1></div>
        <form class="colors__form form-horizontal well" role="form">
          ${errors &&
            html`
              <div class="alert alert-warning">
                <ul>
                  ${errors.map(
                    (item, i) =>
                      html`
                        <li>${item}</li>
                      `,
                  )}
                </ul>
              </div>
            `}
          <div class="form-group">
            <label class="col-sm-1 control-label" for="name">Name</label>
            <div class="col-sm-11">
              <input class="form-control" name="name" type="text" placeholder="blue" />
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-1 control-label" for="hex">Hex</label>
            <div class="col-sm-11">
              <input class="form-control" name="hex" type="text" placeholder="#00f" />
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-1 col-sm-11">
              <button type="submit" class="btn btn-default">Submit</button>
            </div>
          </div>
        </form>
      </div>
    `
  }
}

customElements.define('color-edit-view', ColorEditView)
