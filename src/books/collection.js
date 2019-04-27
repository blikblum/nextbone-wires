import { Collection } from 'nextbone';
import { localStorage } from 'nextbone/localstorage';
import Model from './model';

@localStorage('books')
class Books extends Collection {
  static model = Model;

  url = '../api/books/fixture.json';
}

export default Books;
