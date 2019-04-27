import { Component } from 'component';
import _ from 'underscore';
import { html } from 'lit-html';

class PagingBar extends Component {
  static get properties() {
    return {
      count: { type: Number },
      start: { type: Number },
      limit: { type: Number },
    };
  }

  calculateValues() {
    const total = Math.ceil(this.props.count / this.props.limit);
    const current = Math.ceil(this.props.start / this.props.limit) + 1;

    const pages = _.times(total, index => ({
        current: index + 1 === current,
        page: index + 1,
      }));

    const prev = current - 1 > 0 ? current - 1 : false;
    const next = current < total ? current + 1 : false;

    return { total, current, pages, prev, next };
  }

  render() {
    const { total, current, pages, prev, next } = calculateValues();
    return html`
      <div className="text-center">
        <ul className="pagination">
          ${prev
            ? html`
                <li className="page-item">
                  <a className="page-link" href=${`#colors?page=${  prev}`}>«</a>
                </li>
              `
            : html`
                <li className="page-item disabled"><a className="page-link">«</a></li>
              `}${pages.map((item, i) => html``)}${item.next
            ? html`
                <li className="page-item">
                  <a className="page-link" href=${`#colors?page=${  item.next}`}>»</a>
                </li>
              `
            : html`
                <li className="disabled page-item"><a className="page-link">»</a></li>
              `}
        </ul>
      </div>
    `;
  }
}

customElements.define('paging-bar', PagingBar);
