import {View, Region} from 'backbone.marionette';

//based on https://tympanus.net/Development/PageTransitions/

class PageTransitionRegion extends Region {
  initialize(options) {
    this.animation = options.animation;
  }

  attachHtml(view) {
    var hasAnimation = !!this.animation && !!this.animation.inClass;

    this.$el.append(view.el);
    view.$el.addClass("pt-page pt-page-current");
    if (hasAnimation && this.isSwappingView()) {
      this.$el.css('overflow', 'hidden');
      view.$el.addClass(this.animation.inClass).one("animationend", () => {
        this.$el.css('overflow', '');
        view.$el.removeClass(this.animation.inClass);
        view.triggerMethod('page:transition:end');
      });
    } else {
      view.triggerMethod('page:transition:end');
    }
  }

  removeView(view) {
    var hasAnimation = !!this.animation && !!this.animation.outClass;

    if (hasAnimation && this.isSwappingView()) {
      this.$el.css('overflow', 'hidden');
      view.$el.addClass(this.animation.outClass).one("animationend", () => { 
        this.$el.css('overflow', '');
        view.destroy();
      });
    } else {
      view.destroy();
    }
  }
}


export default View.extend({
  el: '.application',
  template: false,

  regions: {    
    content : {
      el: '.application__content',
      regionClass: PageTransitionRegion,
      animation: {
        inClass: 'pt-page-moveFromLeft',
        outClass: 'pt-page-moveToRight'
      }
    }    
  }
});
