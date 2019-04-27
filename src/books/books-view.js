import { Component, html } from 'component';
import { Region } from 'nextbone-routing';

// inspired by https://3dtransforms.desandro.com/card-flip
// todo: disable or replace animation on small screns
class FlipRegion extends Region {
  attachHtml(view) {
    view.$el.addClass('flip-card__face').appendTo(this.$el);
    if (this.isSwappingView()) {
      const isFlipped = this.$el.hasClass('is-flipped');
      view.$el.addClass(`flip-card__face--${isFlipped ? 'front' : 'back'}`);
      this.$el.toggleClass('is-flipped');
    }
  }

  removeView(view) {
    if (this.isSwappingView()) {
      this.$el.one('transitionend', () => {
        view.destroy();
      });
    } else {
      view.destroy();
    }
  }
}

export default class BooksView extends Component {
  render() {
    html`
      <div class="container">
        <div class="page-header"><h1>Books</h1></div>
        <div class="row">
          <div class="flip-scene col-md-9 order-1 order-md-2">
            <div class="books__viewer flip-card" />
            <div class="list-group">
              ${this.collection.map(book => {
                const { title, year, author, id } = book.attributes;
                return html`
                  <a
                    class="list-group-item list-group-item-action flex-column"
                    route="books.show"
                    param-bookid=${id}
                  >
                    <h5 class="mb-1">${title} <small>(${year})</small></h5>
                    <p class="mb-1">${author}</p>
                  </a>
                `;
              })}
            </div>
          </div>
          <div class="books__library col-md-3 order-2 order-md-1" />
        </div>
      </div>
    `;
  }
}

customElements.define('books-view', BooksView);
