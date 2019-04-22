import nprogress from 'nprogress';
import {Component, html} from "component";
import storage from '../storage';
import { Radio } from "nextbone-radio";
import _ from 'underscore';
import {state} from 'nextbone'
import Color from '../model'


export default class ColorEditView extends Component {
  @state({copy: true})
  model = new Color()

  templateContext() {
    return {
      errors: this.model.validationError
    };
  }

  events = {
    'submit form': 'handleSubmit'
  };

  handleSubmit() {
    let errors = this.model.validate(this.form);

    if (errors) {
      this.model.validationError = errors;
      this.render();
    } else {
      nprogress.start();
      this.model.set(this.form);
      storage.save(this.model).then(() => {
        Radio.channel('router').request('transitionTo', 'colors.show', {colorid: this.model.id});
      });
    }
  }

  hasUnsavedChanges() {
    return !_.isEqual(Syphon.serialize(this), _.omit(this.model.attributes, 'id', 'active'))
  }

  render() {
    return html`<div className="colors colors--edit container"><div className="page-header"><h1>Colors: Edit</h1></div><form className="colors__form form-horizontal well" role="form">${this.errors && html`<div className="alert alert-warning"><ul>${this.errors.map((item, i) => html`        <li>${item}</li>`)}      </ul></div>`}<div className="form-group"><label className="col-sm-1 control-label" htmlFor="name">Name</label><div className="col-sm-11"><input className="form-control" name="name" type="text" placeholder="blue"/></div></div><div className="form-group"><label className="col-sm-1 control-label" htmlFor="hex">Hex</label><div className="col-sm-11"><input className="form-control" name="hex" type="text" placeholder="#00f"/></div></div><div className="form-group"><div className="col-sm-offset-1 col-sm-11"><button type="submit" className="btn btn-default">Submit</button></div></div></form></div>`;
  }
};

customElements.define('color-edit-view', ColorEditView)

