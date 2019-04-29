import nprogress from 'nprogress'
import { Component, html } from 'component'
import { event } from 'nextbone'
import { formBind } from 'nextbone/formbind'
import { Radio } from 'nextbone-radio'
import storage from '../storage'

@formBind
class BookCreateView extends Component {
  static properties = {
    errors: { type: Object },
  }

  @event('submit', 'form')
  handleSubmit() {
    const errors = this.model.validate(this.form)

    if (errors) {
      this.errors = errors
    } else {
      nprogress.start()
      storage.save(this.model).then(() => {
        Radio.channel('router').request('transitionTo', 'colors.index')
      })
    }
  }

  render() {
    const errors = this.errors
    return html`
      <div class="colors colors--create container">
        <div class="page-header"><h1>Colors: Create</h1></div>
        <form class="colors__form form-horizontal well" role="form">
          ${Boolean(errors) &&
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

export default BookCreateView

customElements.define('book-create-view', BookCreateView)
