import './plugins';
import $ from 'jquery';
import {createRouter, middleware} from 'marionette.routing';

import Application from './application/application';
import ApplicationRoute from './application/route';

import ModalService from './modal/service';
import HeaderService from './header/service';
import FlashesService from './flashes/service';

import IndexRoute from './index/route';

import BooksRoute from './books/route';
import BooksIndexView from './books/index/view';
import BooksShowRoute from './books/show/route';

import './main.scss';

let app = new Application();

ModalService.setup({
  el: '.application__overlay'
});

HeaderService.setup({
  el: '.application__header'
});

FlashesService.setup({
  el: '.application__flashes'
});

$(document).ajaxError(() => {
  FlashesService.request('add', {
    type: 'danger',
    title: 'Server Error'
  });
});

let router = createRouter({log: true, logError: true});

router.map(function (route) {
  route('app', {path: '/', routeClass: ApplicationRoute, abstract: true}, function () {
    route('index', {path: '', routeClass: IndexRoute});
    route('colors', {path: 'colors', abstract: true}, function () {
      route('colors.index', {path: ''});
      route('colors.create', {path: 'new'});
      route('colors.show', {path: ':colorid', outlet: false}, function () {
        route('colors.edit', {path: 'edit'});
      });
    });
    route('books', {path: 'books', routeClass: BooksRoute, abstract: true}, function () {
      route('books.index', {path: '', viewClass: BooksIndexView});
      route('books.show', {path: ':bookid', routeClass: BooksShowRoute});
    });
  })
});

HeaderService.request('add', {
  name: 'Colors',
  path: 'colors',
  type: 'primary'
});

HeaderService.request('add', {
  name: 'Books',
  path: 'books',
  type: 'primary'
});

router.use(middleware);

router.listen();

