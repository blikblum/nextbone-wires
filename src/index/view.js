import { Component, html } from 'component';

export default class IndexView extends Component {
  className = 'index';

  onPageTransitionEnd() {
    this.$('.index__billboard')
      .removeClass('d-none')
      .children()
      .addClass('shown');
  }

  render() {
    return html`
      <div className="index__billboard d-none">
        <h1>Marionette <span>Wires</span> Revisited</h1>
        <p>
          An opinionated starter application built with
          <a href="http://marionettejs.com/">Marionette.js</a>.
        </p>
        <p>
          Source code at
          <a href="https://github.com/blikblum/marionette-wires-revisited">GitHub</a>, scaffold a
          new project with <a href="https://github.com/blikblum/generator-mn">generator-mn</a>.
        </p>
      </div>
    `;
  }
}

customElements.define('index-view', IndexView);
