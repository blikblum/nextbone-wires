import _ from 'underscore'
import { Component, html, property } from 'component'
import { Collection, state } from 'nextbone'
import { VirtualCollection } from 'nextbone/virtualcollection'
import './paging-bar'

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

  @state
  filteredColors

  filter = { start: 0, limit: 20 }

  getFilteredColors() {
    if (!this.filteredColors) {
      this.filteredColors = new VirtualCollection(this.colors, {
        filter: (color, index) => {
          const lastIndex = this.filter.start + this.filter.limit
          return index >= this.filter.start && index <= lastIndex
        },
      })
    }
    return this.filteredColors
  }

  updateState() {
    this.filter.start = (this.page - 1) * this.filter.limit
    if (!this.filteredColors) {
      this.getFilteredColors()
    } else {
      this.filteredColors.trigger('filter')
    }
  }

  shouldUpdate(changedProperties) {
    if (changedProperties.has('page')) {
      this.updateState()
    }
    return super.shouldUpdate(changedProperties)
  }

  render() {
    const filtered = this.getFilteredColors()

    return html`
      <div class="colors colors--index container">
        <div class="page-header">
          <a href="#colors/new" class="btn btn-primary float-right mt-2">Create</a>
          <h1>Colors: Index</h1>
        </div>
        <div class="colors__list">
          <div class="list-group">${filtered.map(model => ColorItem(model))}</div>
        </div>
        <div class="colors__footer mt-3 d-flex justify-content-center">
          <paging-bar
            .count=${this.colors.length}
            .start=${this.filter.start}
            .limit=${this.filter.limit}
          ></paging-bar>
        </div>
      </div>
    `
  }
}

customElements.define('colors-view', ColorsView)
