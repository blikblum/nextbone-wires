import _ from 'underscore';
import {history} from "nextbone";
import {Component, html} from "component";
import template from './template.hbs';
import {RouterLink} from "nextbone-routing";

export default class extends Component {
  render = template;
  tagName = 'nav';
  class = 'header navbar navbar-expand-md navbar-light bg-light fixed-top';
  behaviors = [RouterLink];

  attributes = {
    role: 'navigation'
  };

  collectionEvents = {
    all: 'render'
  };

  templateContext() {
    return {
      primaryItems   : this.serializeWhere({ type: 'primary' }),
      secondaryItems : this.serializeWhere({ type: 'secondary' })
    };
  }

  serializeWhere(props) {
    return _.invoke(this.collection.where(props), 'toJSON');
  }

  ui = {
    collapse: '#navbar-collapse'
  };

  events = {
    'show.bs.collapse #navbar-collapse' : 'onCollapseShow'
  };

  onCollapseShow() {
    this.listenToOnce(history, 'route', () => {
      this.ui.collapse.collapse('hide');
    });
  }

  render() {
    return html`<a class="navbar-brand" href="#">Nextbone <span>Wires</span></a><button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbar-collapse"><span class="navbar-toggler-icon"/></button><div class="collapse navbar-collapse" id="navbar-collapse"><ul class="nav navbar-nav mr-auto">${primaryItems.map((item, i) => html`<li class="nav-item" route=${item.path}><a class="nav-link">${item.name}</a></li>`)}    </ul><ul class="nav navbar-nav navbar-right">${item.secondaryItems.map((item, i) => html`        <li class="nav-item" route=${item.path}><a class="nav-link">${item.name}</a></li>`)}    </ul></div>`;
  }
};
