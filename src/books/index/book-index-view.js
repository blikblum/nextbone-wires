import { Component, html } from 'component';

export default class BookIndexView extends Component {
  render() {
    return html`
      <h2>Select a book</h2>
    `;
  }
}

customElements.define('book-index-view', BookIndexView);
