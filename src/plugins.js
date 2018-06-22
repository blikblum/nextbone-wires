import Backbone from 'backbone';
import $ from 'jquery';
import * as Marionette from 'backbone.marionette';
import 'bootstrap';
import 'backbone.syphon';
import 'backbone.localstorage';

Backbone.$ = $;

// start the marionette inspector
if (window.__agent) {
  window.__agent.start(Backbone, Marionette);
}
