import Component from '../../component';
import {props} from 'skatejs';
import _ from 'underscore';
import template from './paging-bar.hbs';

class PagingBar extends Component {
  template = template

  // disable shadow dom
  static get renderRoot () {
    return this;
  }

  static get props() {
    return {
      count: props.number,
      start: props.number,
      limit: props.number
    };
  }

  templateContext() {
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
}

customElements.define('paging-bar', PagingBar);