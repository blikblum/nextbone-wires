import { Component, html } from 'component'
import $ from 'jquery'

export default class IndexView extends Component {
  constructor() {
    super()
    this.classList.add('index')
  }

  firstUpdated() {
    this.onPageTransitionEnd()
  }

  onPageTransitionEnd() {
    $(this)
      .find('.index__billboard')
      .removeClass('d-none')
      .children()
      .addClass('shown')
  }

  render() {
    return html`
      <div class="index__billboard d-none">
        <h1>Nextbone <span>Wires</span></h1>
        <p>
          An opinionated starter application built with
          <a href="https://github.com/blikblum/nextbone">Nextbone</a>.
        </p>
        <p>
          Source code at
          <a href="https://github.com/blikblum/nextbone-wires">GitHub</a>, scaffold a new project
          with <a href="https://github.com/blikblum/generator-nextbone">generator-nextbone</a>.
        </p>
      </div>
    `
  }
}

customElements.define('index-view', IndexView)
