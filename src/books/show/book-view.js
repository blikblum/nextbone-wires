import { Component, html } from 'component';

export default class BookView extends Component {
  render() {
    const { title, year, author, img, description } = this.model.attributes;
    return html`
      <div className="books__title">
        <h1>${title} <small>(${year})</small></h1>
        <p className="lead">${author}</p>
      </div>
      <div className="books__image">
        <img className="img-thumbnail" src=${img} alt=${`${title  } (${  year  }) by ${  author}`} />
      </div>
      <div className="books__content"><p>${description}</p></div>
      <hr className="hidden-md hidden-lg" />
    `;
  }
}

customElements.define('book-view', BookView);
