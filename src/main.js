import './plugins';
import $ from 'jquery';
import { Radio } from "nextbone-radio";
import {Router} from "nextbone-routing";

import Application from './application/application';
import ApplicationRoute from './application/route';

import ModalService from './modal/service';
import HeaderService from './header/service';
import FlashesService from './flashes/service';

import IndexRoute from './index/route';

import BooksRoute from './books/route';
import BooksIndexView from './books/index/book-index-view';
import BooksShowRoute from './books/show/route';

import './main.scss';

const app = new Application();

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

const router = new Router({outlet: 'body', log: true, logError: true});

// proxy router events through a Radio channel
const routerChannel = Radio.channel('router')

router.on('all', function(...args) {
  routerChannel.trigger(...args)
})

function ColorsRoute () {
  return import('./colors/route');
}

router.map(function (route) {
  route('app', {path: '/', class: ApplicationRoute, abstract: true}, function () {
    route('index', {path: '', class: IndexRoute});
    route('colors', {path: 'colors', class: ColorsRoute, abstract: true}, function () {
      route('colors.index', {path: ''});
      route('colors.create', {path: 'new'});
      route('colors.show', {path: ':colorid', outlet: false}, function () {
        route('colors.edit', {path: 'edit'});
      });
    });
    route('books', {path: 'books', class: BooksRoute, abstract: true}, function () {
      route('books.index', {path: '', component: BooksIndexView});
      route('books.show', {path: ':bookid', class: BooksShowRoute});
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

app.initialize()

router.listen();

