import { Model } from 'nextbone';

export default class extends Model {
  urlRoot = '/api/books';

  isActive() {
    return this.collection.active === this;
  }
}
