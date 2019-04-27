import * as Backbone from 'nextbone';
import Model from './model';

export default class extends Backbone.Collection {
  url = '../api/colors/fixture.json';

  localStorage = Model.prototype.localStorage;

  static model = Model;
}
