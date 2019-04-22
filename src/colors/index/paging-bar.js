import Component from '../../component';
import _ from 'underscore';
import { html } from 'lit-html';

class PagingBar extends Component {

  static get properties() {
    return {
      count: {type: Number},
      start: {type: Number},
      limit: {type: Number}
    };
  }

  calculateValues() {
    let total   = Math.ceil(this.props.count / this.props.limit);
    let current = Math.ceil(this.props.start / this.props.limit) + 1;

    let pages = _.times(total, index => {
      return {
        current : index + 1 === current,
        page    : index + 1
      };
    });

    let prev = current - 1 > 0 ? current - 1 : false;
    let next = current < total ? current + 1 : false;

    return { total, current, pages, prev, next };
  }

  render() {
    const { total, current, pages, prev, next } = calculateValues()
    return html`<div className="text-center"><ul className="pagination">${Boolean(prev) ? html`            <li className="page-item"><a className="page-link" href=${"#colors?page=" + prev}>«</a></li>` : html`            <li className="page-item disabled"><a className="page-link">«</a></li>`}${pages.map((item, i) => html``)}${Boolean(item.next) ? html`            <li className="page-item"><a className="page-link" href=${"#colors?page=" + item.next}>»</a></li>` : html`            <li className="disabled page-item"><a className="page-link">»</a></li>`}    </ul></div>`;

  }
}

customElements.define('paging-bar', PagingBar);