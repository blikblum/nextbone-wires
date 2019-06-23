import './plugins'
import $ from 'jquery'
import { Radio } from 'nextbone-radio'
import { Router } from 'nextbone-routing'

import Application from './application/application'
import ApplicationRoute from './application/route'

import ModalService from './modal/service'
import HeaderService from './header/service'
import FlashesService from './flashes/service'

import IndexRoute from './index/route'

import BooksRoute from './books/route'
import BooksIndexView from './books/index/book-index-view'
import BooksShowRoute from './books/show/route'

import { bindLocalStorage } from 'nextbone/localStorage'
import { Contacts, registerContactsRoute, getContactsSample } from 'nextbone-contact-manager'

import './main.scss'

const app = new Application()

ModalService.setup({
  container: '.application__overlay',
})

HeaderService.setup({
  container: '.application__header',
})

FlashesService.setup({
  container: '.application__flashes',
})

$(document).ajaxError(() => {
  FlashesService.request('add', {
    type: 'danger',
    title: 'Server Error',
  })
})

const router = new Router({ outlet: 'body', log: true, logError: true })

// proxy router events through a Radio channel
const routerChannel = Radio.channel('router')
routerChannel.reply('transitionTo', (...args) => {
  router.transitionTo(...args)
})

router.on('all', (...args) => {
  routerChannel.trigger(...args)
})

router.on('transition:error', (transition, error) => {
  FlashesService.request('add', {
    type: 'danger',
    title: `Transition Error:${error.message || error}`,
  })
})

function ColorsRoute() {
  return import('./colors/route')
}

const mainEl = document.querySelector('.application')

const getContacts = () => {
  const contacts = new Contacts()
  bindLocalStorage(contacts, 'Contacts', { initialData: getContactsSample })
  return contacts
}

router.map(route => {
  route('app', { path: '/', class: ApplicationRoute, component: mainEl, abstract: true }, () => {
    route('index', { path: '', class: IndexRoute })
    route('colors', { path: 'colors', class: ColorsRoute, abstract: true }, () => {
      route('colors.index', { path: '' })
      route('colors.create', { path: 'new' })
      route('colors.show', { path: ':colorid', outlet: false }, () => {
        route('colors.edit', { path: 'edit' })
      })
    })
    route('books', { path: 'books', class: BooksRoute, abstract: true }, () => {
      route('books.index', { path: '', component: BooksIndexView })
      route('books.show', { path: ':bookid', class: BooksShowRoute })
    })
    registerContactsRoute(route, getContacts, ModalService)
  })
})

HeaderService.request('add', {
  name: 'Colors',
  path: 'colors',
  type: 'primary',
})

HeaderService.request('add', {
  name: 'Books',
  path: 'books',
  type: 'primary',
})

HeaderService.request('add', {
  name: 'Contacts',
  path: 'contacts',
  type: 'primary',
})

app.initialize()

router.listen()
