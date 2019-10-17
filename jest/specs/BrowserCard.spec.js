import { createLocalVue, mount } from '@vue/test-utils'
import BrowserCard from '../../src/components/BrowserCard'

/**
 * @param {object} [props]
 * @returns {import("@vue/test-utils").Wrapper}
 */
function createComponentWrapper (propsOverrides) {
  const localVue = createLocalVue()

  const defaultProps = {
    name: 'Firefox',
    versions: {
      full: '69.0.3',
      partial: '59.0.5',
      no: '57.1.0'
    }
  }

  const propsData = Object.assign({}, defaultProps, propsOverrides)

  return mount(BrowserCard, {
    localVue,
    propsData
  })
}

describe('BrowserCard Vue component', () => {
  test('it displays the browser name based on the name prop', () => {
    const app = createComponentWrapper()
    const name = app.find({ ref: 'name' })

    expect(name.text()).toEqual('Firefox')
  })
})
