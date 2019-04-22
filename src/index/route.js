import {Route} from "nextbone-routing";
import View from './view';
import HeaderService from '../header/service';

export default class extends Route {
  static component = View;

  activate() {
    HeaderService.request('activate', {
      path: ''
    });
  }
};
