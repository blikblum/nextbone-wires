import { Component, html } from 'component'
import { Region, withRouterLinks } from 'nextbone-routing'

@withRouterLinks
class BooksView extends Component {
  static outlet = '.books__viewer'

  render() {
    return html`
      <div class="container">
        <div class="page-header"><h1>Books</h1></div>
        <div class="row">
          <div class="flip-scene col-md-9 order-1 order-md-2">
            <div class="books__viewer flip-card"></div>
          </div>
          <div class="books__library col-md-3 order-2 order-md-1">
            <div class="list-group" routerlinks>
              ${this.collection.map(book => {
                const { title, year, author, id } = book.attributes
                return html`
                  <a
                    class="list-group-item list-group-item-action flex-column"
                    route="books.show"
                    param-bookid=${id}
                  >
                    <h5 class="mb-1">${title} <small>(${year})</small></h5>
                    <p class="mb-1">${author}</p>
                  </a>
                `
              })}
            </div>
          </div>
        </div>
      </div>
    `
  }
}

export default BooksView

customElements.define('books-view', BooksView)
