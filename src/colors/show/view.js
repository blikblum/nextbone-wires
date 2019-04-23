import {Component} from "component";
import nprogress from 'nprogress';
import ModalService from '../../modal/service';
import FlashesService from '../../flashes/service';
import { Radio } from "nextbone-radio";

export default class ColorView extends Component {  
  initialize(options = {}) {
    this.model = options.model;
  }

  templateContext() {
    return {
      errors: this.model.validationError
    };
  }

  events = {
    'click .colors__toggle' : 'handleToggle',
    'click .colors__destroy' : 'handleDestroy'
  };

  handleToggle() {
    this.model.set('active', !this.model.get('active'));
    this.model.save().fail(() => this.handleToggleFailure());
  }

  handleToggleFailure() {
    this.model.set('active', this.model.previous('active'));
  }

  handleDestroy() {
    ModalService.request('confirm', {
      title : 'Confirm Color Destruction',
      text  : `Are you sure you want to destroy ${this.model.get('name')}?`
    }).then(confirmed => {
      if (!confirmed) {
        return;
      }

      nprogress.start();

      return this.model.destroy({ wait: true })
        .then(() => this.handleDestroySuccess());
    });
  }

  handleDestroySuccess() {
    Radio.channel('router').request('transitionTo', 'colors.index');
    FlashesService.request('add', {
      timeout : 5000,
      type    : 'info',
      title   : `It's gone!`,
      body    : `You have deleted ${this.model.get('name')}.`
    });
  }

  render() {
    html`<div class="colors colors--show container"><div class="page-header"><div class="btn-toolbar float-right mt-2" role="toolbar"><div class="btn-group mr-2"><button class="colors__destroy btn btn-danger">Destroy</button></div><div class="btn-group"><button class="colors__toggle btn btn-light">${Boolean(active) ? "Deactivate" : "Activate"}</button><a href=${"#colors/" + id + "/edit"} class="btn btn-light">Edit</a></div></div><h1>Colors: Show</h1></div><div class="row"><div class="col-md-3"><div class="thumbnail"><div class="colors__thumbnail" style=${"background-color: " + hex}/></div></div><div class="col-md-9"><div class="list-group"><div class="list-group-item"><h4 class="mb-1">Name</h4><p class="mb-1">${name}</p></div><div class="list-group-item"><h4 class="mb-1">Hex</h4><p class="mb-1">${hex}</p></div><div class="list-group-item"><h4 class="mb-1">State</h4><p class="mb-1">${Boolean(active) ? "Active" : "Inactive"}</p></div></div></div></div></div>`;
  }
};

customElements.define('color-view', ColorView)