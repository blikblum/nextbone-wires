import { View, Region } from 'backbone.marionette';
import template from './layout-template.hbs';
import LibraryView from './library/collection-view';


// inspired by https://3dtransforms.desandro.com/card-flip
// todo: disable or replace animation on small screns
const FlipRegion = Region.extend({

  attachHtml(view) {
    view.$el.addClass('flip-card__face').appendTo(this.$el);
    if (this.isSwappingView()) {
      const isFlipped = this.$el.hasClass('is-flipped');
      view.$el.addClass(`flip-card__face--${isFlipped ? 'front': 'back'}`);
      this.$el.toggleClass('is-flipped');
    }
  },

  removeView(view) {
    if (this.isSwappingView()) {
      this.$el.one('transitionend', function () {
        view.destroy();
      });
    } else {
      view.destroy();
    }
  }
});


export default View.extend({
  template: template,  
  regions: {
    library: '.books__library',
    outlet: {
      el: '.books__viewer',
      regionClass: FlipRegion
    }
  },
  onRender() {
    this.showChildView('library', new LibraryView({ collection: this.collection }))
  }
});
