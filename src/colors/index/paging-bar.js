import { Component } from 'component'
import _ from 'underscore'
import { html } from 'lit-html'

class PagingBar extends Component {
  static get properties() {
    return {
      count: { type: Number },
      start: { type: Number },
      limit: { type: Number },
    }
  }

  calculateValues() {
    const total = Math.ceil(this.count / this.limit)
    const current = Math.ceil(this.start / this.limit) + 1

    const pages = _.times(total, index => ({
      current: index + 1 === current,
      page: index + 1,
    }))

    const prev = current - 1 > 0 ? current - 1 : false
    const next = current < total ? current + 1 : false

    return { total, current, pages, prev, next }
  }

  render() {
    const { pages, prev, next } = this.calculateValues()
    return html`
      <div class="text-center">
        <ul class="pagination">
          ${prev
            ? html`
                <li class="page-item">
                  <a class="page-link" href=${'#colors?page=' + prev}>«</a>
                </li>
              `
            : html`
                <li class="page-item disabled"><a class="page-link">«</a></li>
              `}
          ${pages.map(
            item =>
              html`
                ${Boolean(item.current)
                  ? html`
                      <li class="active page-item">
                        <a class="page-link">${item.page} <span class="sr-only">(current)</span></a>
                      </li>
                    `
                  : html`
                      <li class="page-item">
                        <a class="page-link" href=${'#colors?page=' + item.page}>${item.page}</a>
                      </li>
                    `}
              `,
          )}
          ${next
            ? html`
                <li class="page-item">
                  <a class="page-link" href=${'#colors?page=' + next}>»</a>
                </li>
              `
            : html`
                <li class="disabled page-item"><a class="page-link">»</a></li>
              `}
        </ul>
      </div>
    `
  }
}

customElements.define('paging-bar', PagingBar)
