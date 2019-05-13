import nprogress from 'nprogress'
import { Component, html, property } from 'component'
import { Radio } from 'nextbone-radio'
import _ from 'underscore'
import { state, event } from 'nextbone'
import storage from '../storage'
import Color from '../model'
import { formBind } from 'nextbone/formbind'

@formBind
class ColorEditView extends Component {
  @state({ copy: true })
  model = new Color()

  @property({ type: Object })
  errors

  @event('submit', 'form')
  handleSubmit(e) {
    e.preventDefault()
    if (!this.model.isValid()) {
      this.errors = this.model.validationError
      return
    }

    nprogress.start()
    storage.save(this.model).then(() => {
      Radio.channel('router').request('transitionTo', 'colors.show', { colorid: this.model.id })
    })
  }

  hasUnsavedChanges(pristine) {
    return (
      !(pristine.isNew() && !this.model.isNew()) &&
      !_.isEqual(
        _.omit(pristine.attributes, 'id', 'active'),
        _.omit(this.model.attributes, 'id', 'active'),
      )
    )
  }

  render() {
    const errors = this.errors
    const isNew = this.model.isNew()
    return html`
      <div class="colors colors--edit container">
        <div class="page-header"><h1>Colors: ${isNew ? 'Create' : 'Edit'}</h1></div>
        <form class="colors__form form-horizontal well" role="form">
          ${errors
            ? html`
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
              `
            : undefined}
          <div class="form-group">
            <label class="col-sm-1 control-label" for="name">Name</label>
            <div class="col-sm-11">
              <input
                class="form-control"
                name="name"
                type="text"
                placeholder="blue"
                .value=${this.model.get('name') || null}
              />
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-1 control-label" for="hex">Hex</label>
            <div class="col-sm-11">
              <input
                class="form-control"
                name="hex"
                type="text"
                placeholder="#00f"
                .value=${this.model.get('hex') || null}
              />
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

export default ColorEditView

customElements.define('color-edit-view', ColorEditView)
