import { Component, html } from 'component'

export default class BookView extends Component {
  render() {
    const { title, year, author, img, description } = this.model.attributes
    return html`
      <div class="books__title">
        <h1>${title} <small>(${year})</small></h1>
        <p class="lead">${author}</p>
      </div>
      <div class="books__image">
        <img class="img-thumbnail" src=${img} alt=${title + ' (' + year + ') by ' + author} />
      </div>
      <div class="books__content"><p>${description}</p></div>
      <hr class="hidden-md hidden-lg" />
    `
  }
}

customElements.define('book-view', BookView)
