import { createLocalVue, mount } from '@vue/test-utils'
import BrowserCard from '../../src/components/BrowserCard.vue'

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

  test('it displays the browser full version number if it is present', () => {
    const app = createComponentWrapper()
    const version = app.find({ ref: 'version' })

    expect(version.text()).toEqual('69.0.3')
  })

  test('it displays the browser partial version number if it is present and full is not', () => {
    const app = createComponentWrapper({
      name: 'Firefox',
      versions: {
        full: null,
        partial: '59.0.5',
        no: '57.1.0'
      }
    })

    const version = app.find({ ref: 'version' })

    expect(version.text()).toEqual('59.0.5')
  })

  test('it defaults to displaying the browser no support version number', () => {
    const app = createComponentWrapper({
      name: 'Firefox',
      versions: {
        full: null,
        partial: null,
        no: '57.1.0'
      }
    })

    const version = app.find({ ref: 'version' })

    expect(version.text()).toEqual('57.1.0')
  })

  test('it displays the full version tooltip if it is present', () => {
    const app = createComponentWrapper()
    const titleTooltip = app.attributes('title')

    expect(titleTooltip).toEqual('Full support from v. 69.0.3')
  })

  test('it displays the partial version tooltip if it is present and full is not', () => {
    const app = createComponentWrapper({
      name: 'Firefox',
      versions: {
        full: null,
        partial: '59.0.5',
        no: '57.1.0'
      }
    })

    const titleTooltip = app.attributes('title')

    expect(titleTooltip).toEqual('Partial support from v. 59.0.5')
  })

  test('it displays the no support tooltip by default', () => {
    const app = createComponentWrapper({
      name: 'Firefox',
      versions: {
        full: null,
        partial: null,
        no: '57.1.0'
      }
    })

    const titleTooltip = app.attributes('title')

    expect(titleTooltip).toEqual('No support')
  })

  test('it adds the full support class if it is present', () => {
    const app = createComponentWrapper()

    expect(app.classes('full-support')).toBe(true)
    expect(app.classes('partial-support')).toBe(false)
    expect(app.classes('no-support')).toBe(false)
  })

  test('it adds the partial support class if it is present and full is not', () => {
    const app = createComponentWrapper({
      name: 'Firefox',
      versions: {
        full: null,
        partial: '59.0.5',
        no: '57.1.0'
      }
    })

    expect(app.classes('full-support')).toBe(false)
    expect(app.classes('partial-support')).toBe(true)
    expect(app.classes('no-support')).toBe(false)
  })

  test('it adds the no support class by default', () => {
    const app = createComponentWrapper({
      name: 'Firefox',
      versions: {
        full: null,
        partial: null,
        no: '57.1.0'
      }
    })

    expect(app.classes('full-support')).toBe(false)
    expect(app.classes('partial-support')).toBe(false)
    expect(app.classes('no-support')).toBe(true)
  })
})
