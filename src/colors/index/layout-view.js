import _ from 'underscore';
import {Component} from "component";
import {Collection} from "nextbone";
import './paging-bar';
import renderer from '../../snabbdom-renderer';

const ColorItem = (model) => {
  const {id, hex, name} = model.attributes;

  return (<a className="colors__item list-group-item list-group-item-action flex-column align-items-start" href={`#colors/${id}`}>
    <div className="d-flex w-100 justify-content-start">
      <span className="colors__swatch mt-2" style={{'background-color': hex}}></span>
      <div>
        <h5>{name}</h5>
        <p className="mb-1">{hex}</p>
      </div>
    </div>
  </a>)
}

export default View.extend({
  initialize(options = {}) {
    this.state = { start: 0, limit: 20 };
    this.state.start = (options.page - 1) * this.state.limit;
    this.render = _.debounce(this.render, 0);
    let filtered = this.getFilteredModels();
    this.filteredCollection = new Collection(filtered);
    this.listenTo(this.filteredCollection, 'all', this.render);
  },

  getFilteredModels() {
    return _.chain(this.collection.models)
      .drop(this.state.start)
      .take(this.state.limit)
      .value();
  },

  updateState(options) {
    this.state.start = (options.page - 1) * this.state.limit;
    let filtered = this.getFilteredModels();
    this.filteredCollection.reset(filtered);    
  },

  template() {
    const filtered = this.filteredCollection;
  
    return (<div className="colors colors--index container">
      <div className="page-header">
        <a href="#colors/new" className="btn btn-primary float-right mt-2">Create</a>
        <h1>Colors: Index</h1>
      </div>

      <div className="colors__list">
        <div className="list-group">
          {filtered.map(model => ColorItem(model))}
        </div>
      </div>

      <div className="colors__footer mt-3 d-flex justify-content-center">
        <paging-bar count={this.collection.length} start={this.state.start} limit={this.state.limit}/> 
      </div>
    </div>)
  }
}).setRenderer(renderer);
