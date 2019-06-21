import { Component, html, property } from 'component'
import './paging-bar'
import { virtualState } from './virtualState'

const ColorItem = model => {
  const { id, hex, name } = model.attributes

  return html`
    <a
      class="colors__item list-group-item list-group-item-action flex-column align-items-start"
      href=${`#colors/${id}`}
    >
      <div class="d-flex w-100 justify-content-start">
        <span class="colors__swatch mt-2" style=${`background-color: ${hex}`}></span>
        <div>
          <h5>${name}</h5>
          <p class="mb-1">${hex}</p>
        </div>
      </div></a
    >
  `
}

export default class ColorsView extends Component {
  @property({ type: Number })
  page = 1

  @virtualState({
    filter: function(color, index) {
      const lastIndex = this.filter.start + this.filter.limit
      return index >= this.filter.start && index < lastIndex
    },
  })
  colors

  filter = { start: 0, limit: 20 }

  updateState() {
    this.filter.start = (this.page - 1) * this.filter.limit
    if (this.colors) {
      this.colors.updateFilter()
    }
  }

  shouldUpdate(changedProperties) {
    if (changedProperties.has('page')) {
      this.updateState()
    }
    return super.shouldUpdate(changedProperties)
  }

  render() {
    const colors = this.colors

    return html`
      <div class="colors colors--index container">
        <div class="page-header">
          <a href="#colors/new" class="btn btn-primary float-right mt-2">Create</a>
          <h1>Colors: Index</h1>
        </div>
        <div class="colors__list">
          <div class="list-group">${colors.map(ColorItem)}</div>
        </div>
        <div class="colors__footer mt-3 d-flex justify-content-center">
          <paging-bar
            .count=${colors ? colors.parent.length : 0}
            .start=${this.filter.start}
            .limit=${this.filter.limit}
          ></paging-bar>
        </div>
      </div>
    `
  }
}

customElements.define('colors-view', ColorsView)
