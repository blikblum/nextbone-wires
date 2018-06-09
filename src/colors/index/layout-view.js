import _ from 'underscore';
import {View} from 'backbone.marionette';
import {Collection} from 'backbone';
import './paging-bar';
import renderer from '../../snabbdom-renderer';

const ColorItem = (model) => {
  const {id, hex, name} = model.attributes;
  return (<a className="colors__item list-group-item" href={`#colors/${id}`}>
    <span className="colors__swatch" style={{'background-color': hex}}></span>
    <h4 className="list-group-item-heading">{name}</h4>
    <p className="list-group-item-text">{hex}</p>
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

  outerRender: true,

  template() {
    const filtered = this.filteredCollection;
  
    return (<div className="colors colors--index container">
      <div className="page-header">
        <a href="#colors/new" className="btn btn-primary pull-right">Create</a>
        <h1>Colors: Index</h1>
      </div>

      <div className="colors__list">
        <div className="list-group">
          {filtered.map(model => ColorItem(model))}
        </div>
      </div>

      <div className="colors__footer">
        <paging-bar count={this.collection.length} start={this.state.start} limit={this.state.limit}/> 
      </div>
    </div>)
  }
}).setRenderer(renderer);
