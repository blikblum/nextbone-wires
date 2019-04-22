import {Component, html} from "component";

export default class ApplicationView extends Component {
  static outlet = '.application__content'

  render() {
    return html`
      <div class="application__header"></div>
      <div class="application__flashes"></div>
      <div class="application__content"></div>
      <div class="application__overlay"></div>
    `
  }  
};

customElements.define('application-view', ApplicationView)