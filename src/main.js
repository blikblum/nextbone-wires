import './plugins';
import $ from 'jquery';
import Radio from 'backbone.radio';
import {Router} from 'marionette.routing';

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

let router = new Router({log: true, logError: true});

function ColorsRoute () {
  return import('./colors/route');
}

router.map(function (route) {
  route('app', {path: '/', routeClass: ApplicationRoute, abstract: true}, function () {
    route('index', {path: '', routeClass: IndexRoute});
    route('colors', {path: 'colors', routeClass: ColorsRoute, abstract: true}, function () {
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

Radio.channel('router').on('route:render', route => {
  if (route instanceof ApplicationRoute) {
    // setup root view for inspector
    if (window.__agent) {
      app.layout = route.view;
    }
  }
})

router.listen();

