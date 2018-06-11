import {View, Region} from 'backbone.marionette';
import template from './layout-template.hbs';

//based on https://tympanus.net/Development/PageTransitions/

class PageTransitionRegion extends Region {
  initialize(options) {
    this.animation = options.animation;
  }

  attachHtml(view) {
    var hasAnimation = !!this.animation && !!this.animation.inClass;

    this.$el.append(view.el);
    view.$el.addClass("pt-page-current");
    if (hasAnimation) {
      view.$el.addClass(this.animation.inClass);
    }
  }

  removeView(view) {
    var hasAnimation = !!this.animation && !!this.animation.outClass;

    if (hasAnimation) {
      view.$el.addClass(this.animation.outClass).one("animationend", () => {
        view.destroy();
      });
    } else {
      view.destroy();
    }
  }
}


export default View.extend({
  el: '.application',
  template: template,

  regions: {
    header  : '.application__header',
    flashes : '.application__flashes',
    content : {
      el: '.application__content',
      regionClass: PageTransitionRegion,
      animation: {
        inClass: 'pt-page-moveFromLeft',
        outClass: 'pt-page-moveToRight'
      }
    },
    overlay : '.application__overlay'
  }
});
