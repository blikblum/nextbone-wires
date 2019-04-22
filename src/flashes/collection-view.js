import {Component, html} from "component";

export default class FlashView extends Component {
  render() {
    return this.collection.map((model) => {
      return html`<div role="alert" class="flashes__alert alert alert-${model.get('type')}">${Boolean(dismissible) && html`  <button type="button" className="close" data-dismiss="alert"><span aria-hidden="true">×</span><span className="sr-only">Close</span></button>`}<strong>${title}</strong></div>`
    })

  }  
};

customElements.define('flash-view', FlashView)