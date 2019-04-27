import { Component, html } from 'component';
import { state } from 'nextbone';

export default class FlashesView extends Component {
  @state
  collection;

  render() {
    return html`
      <div>
        ${this.collection.map(model => html`
            <div role="alert" class="flashes__alert alert alert-${model.get('type')}">
              ${Boolean(model.get('dismissible')) &&
                html`
                  <button type="button" className="close" data-dismiss="alert">
                    <span aria-hidden="true">×</span><span className="sr-only">Close</span>
                  </button>
                `}<strong>${model.get('title')}</strong>
            </div>
          `)}
      </div>
    `;
  }
}

customElements.define('flashes-view', FlashesView);
