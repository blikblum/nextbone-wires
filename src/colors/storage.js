import { Storage } from 'nextbone-state';
import Model from './model';
import Collection from './collection';

class ColorsStorage extends Storage{
  static model = Model
  static collection = Collection
};

export default new ColorsStorage();
