import '@webcomponents/webcomponentsjs/bundles/webcomponents-sd-ce'
import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter'

import { withComponent } from 'skatejs'

const withTemplateRenderer = (Base => {
  return class extends Base {
    render (props) {
      if (!this.template) return ''
      const data = Object.assign({}, props, this.templateContext() || {})
      return this.template(data) || ''
    }

    templateContext () {}
  }
})

const Component = withTemplateRenderer(withComponent())

export default Component