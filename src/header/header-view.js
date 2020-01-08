import _ from 'underscore'
import $ from 'jquery'
import { Component, html } from 'component'
import { withRouterLinks } from 'nextbone-routing'
import { event, state } from 'nextbone'
import { Radio } from 'nextbone-radio'

@withRouterLinks
class HeaderView extends Component {
  @state
  collection

  templateContext() {
    return {
      primaryItems: this.serializeWhere({ type: 'primary' }),
      secondaryItems: this.serializeWhere({ type: 'secondary' }),
    }
  }

  serializeWhere(props) {
    return _.invoke(this.collection.where(props), 'toJSON')
  }

  @event('show.bs.collapse', '#navbar-collapse')
  onCollapseShow() {
    Radio.channel('router').once('transition', () => {
      $(this)
        .find('#navbar-collapse')
        .collapse('hide')
    })
  }

  render() {
    const { primaryItems, secondaryItems } = this.templateContext()
    return html`
      <nav class="header navbar navbar-expand-md navbar-light bg-light fixed-top" role="navigation">
        <a class="navbar-brand" href="#">Nextbone <span>Wires</span></a>
        <button
          type="button"
          class="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbar-collapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar-collapse">
          <ul class="nav navbar-nav mr-auto" routerlinks>
            ${primaryItems.map(
              (item, i) =>
                html`
                  <li class="nav-item" route=${item.path}>
                    <a class="nav-link">${item.name}</a>
                  </li>
                `,
            )}
          </ul>
          <ul class="nav navbar-nav navbar-right" routerlinks>
            ${secondaryItems.map(
              (item, i) =>
                html`
                  <li class="nav-item" route=${item.path}>
                    <a class="nav-link">${item.name}</a>
                  </li>
                `,
            )}
          </ul>
        </div>
      </nav>
    `
  }
}

export default HeaderView

customElements.define('header-view', HeaderView)
