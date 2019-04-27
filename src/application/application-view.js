import { Component, html } from 'component';

export default class ApplicationView extends Component {
  static outlet = '.application__content';

  render() {
    return html`
      <div class="application__content"></div>
    `;
  }
}

customElements.define('application-view', ApplicationView);
