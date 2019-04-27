import $ from 'jquery';
import _ from 'underscore';
import { Radio } from 'nextbone-radio';
import { Events } from 'nextbone';
import nprogress from 'nprogress';

nprogress.configure({
  showSpinner: false,
});

export default class Application extends Events {
  initialize() {
    this.$body = $(document.body);

    this.listenTo(Radio.channel('router'), {
      'before:transition': this.onBeforeTransition,
      transition: this.onTransition,
      'transition:abort': this.onTransitionAbort,
    });
  }

  onBeforeTransition() {
    this.transitioning = true;
    // Don't show for synchronous route changes takin more than 50ms
    _.delay(() => {
      if (this.transitioning) {
        nprogress.start();
      }
    }, 50);
  }

  onTransition() {
    this.transitioning = false;
    this.$body.scrollTop(0);
    nprogress.done();
  }

  onTransitionAbort() {
    this.transitioning = false;
    nprogress.done(true);
  }
}
