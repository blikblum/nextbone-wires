import _ from 'underscore'
import { Component, html, property } from 'component'
import { Collection, state } from 'nextbone'
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

  state = { start: 0, limit: 20 }

  getFilteredCollection() {
    if (!this.filteredCollection) {
      const filtered = this.getFilteredModels()
      this.filteredCollection = new Collection(filtered)
    }
    return this.filteredCollection
  }

  getFilteredModels() {
    return _.chain(this.collection.models)
      .drop(this.state.start)
      .take(this.state.limit)
      .value()
  }

  updateState() {
    this.state.start = (this.page - 1) * this.state.limit
    const filtered = this.getFilteredModels()
    if (!this.filteredCollection) {
      this.filteredCollection = new Collection(filtered)
    } else {
      this.filteredCollection.reset(filtered)
    }
  }

  shouldUpdate(changedProperties) {
    if (changedProperties.has('page')) {
      this.updateState()
    }
    return super.shouldUpdate(changedProperties)
  }

  render() {
    const filtered = this.getFilteredCollection()

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
            .count=${this.collection.length}
            .start=${this.state.start}
            .limit=${this.state.limit}
          ></paging-bar>
        </div>
      </div>
    `
  }
}

customElements.define('colors-view', ColorsView)
