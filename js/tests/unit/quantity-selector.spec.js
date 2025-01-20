import QuantitySelector from '../../src/quantity-selector.js'
import {
  clearFixture, getFixture, createEvent, jQueryMock
} from '../helpers/fixture.js'

describe('QuantitySelector', () => {
  let fixtureEl

  beforeAll(() => {
    fixtureEl = getFixture()
  })

  afterEach(() => {
    clearFixture()
  })

  describe('VERSION', () => {
    it('should return plugin version', () => {
      expect(QuantitySelector.VERSION).toEqual(jasmine.any(String))
    })
  })

  describe('Default', () => {
    it('should return plugin default config', () => {
      expect(QuantitySelector.Default).toEqual(jasmine.any(Object))
    })
  })

  describe('DefaultType', () => {
    it('should return plugin default type config', () => {
      expect(QuantitySelector.DefaultType).toEqual(jasmine.any(Object))
    })
  })

  describe('DATA_KEY', () => {
    it('should return plugin data key', () => {
      expect(QuantitySelector.DATA_KEY).toEqual('bs.quantityselector')
    })
  })

  describe('jQueryInterface', () => {
    it('should create a quantity selector', () => {
      fixtureEl.innerHTML = '<div></div>'

      const div = fixtureEl.querySelector('div')

      jQueryMock.fn.quantitySelector = QuantitySelector.jQueryInterface
      jQueryMock.elements = [div]

      jQueryMock.fn.quantitySelector.call(jQueryMock)

      expect(QuantitySelector.getInstance(div)).not.toBeNull()
    })

    it('should not re create a quantity selector', () => {
      fixtureEl.innerHTML = '<div></div>'

      const div = fixtureEl.querySelector('div')
      const quantitySelector = new QuantitySelector(div)

      jQueryMock.fn.quantitySelector = QuantitySelector.jQueryInterface
      jQueryMock.elements = [div]

      jQueryMock.fn.quantitySelector.call(jQueryMock)

      expect(QuantitySelector.getInstance(div)).toEqual(quantitySelector)
    })

    it('should throw error on undefined method', () => {
      fixtureEl.innerHTML = '<div></div>'

      const div = fixtureEl.querySelector('div')
      const action = 'undefinedMethod'

      jQueryMock.fn.quantitySelector = QuantitySelector.jQueryInterface
      jQueryMock.elements = [div]

      expect(() => {
        jQueryMock.fn.quantitySelector.call(jQueryMock, action)
      }).toThrowError(TypeError, `No method named "${action}"`)
    })
  })

  it('should take care of element either passed as a CSS selector or DOM element (Step Up button)', () => {
    fixtureEl.innerHTML = [
      '<div class="quantity-selector">',
      '  <input type="number" id="inputQuantitySelector1" class="form-control" aria-live="polite" data-bs-step="counter" name="quantity" title="quantity" value="1" min="0" max="10" step="1" data-bs-round="0" aria-label="Quantity selector">',
      '  <button type="button" class="btn btn-icon btn-default" aria-describedby="inputQuantitySelector1" data-bs-step="down">',
      '    <span class="visually-hidden">Step down</span>',
      '  </button>',
      '  <button type="button" class="btn btn-icon btn-default" aria-describedby="inputQuantitySelector1" data-bs-step="up">',
      '    <span class="visually-hidden">Step up</span>',
      '  </button>',
      '</div>'
    ].join('')

    const buttonStepUpEl = fixtureEl.querySelector('[data-bs-step="up"]')
    const buttonStepUpBySelector = new QuantitySelector('[data-bs-step="up"]')
    const buttonStepUpByElement = new QuantitySelector(buttonStepUpEl)

    expect(buttonStepUpBySelector._element).toEqual(buttonStepUpEl)
    expect(buttonStepUpByElement._element).toEqual(buttonStepUpEl)
  })

  it('should take care of element either passed as a CSS selector or DOM element (Step Down button)', () => {
    fixtureEl.innerHTML = [
      '<div class="quantity-selector">',
      '  <input type="number" id="inputQuantitySelector1" class="form-control" aria-live="polite" data-bs-step="counter" name="quantity" title="quantity" value="1" min="0" max="10" step="1" data-bs-round="0" aria-label="Quantity selector">',
      '  <button type="button" class="btn btn-icon btn-default" aria-describedby="inputQuantitySelector1" data-bs-step="down">',
      '    <span class="visually-hidden">Step down</span>',
      '  </button>',
      '  <button type="button" class="btn btn-icon btn-default" aria-describedby="inputQuantitySelector1" data-bs-step="up">',
      '    <span class="visually-hidden">Step up</span>',
      '  </button>',
      '</div>'
    ].join('')

    const buttonStepDownEl = fixtureEl.querySelector('[data-bs-step="down"]')
    const buttonStepDownBySelector = new QuantitySelector('[data-bs-step="down"]')
    const buttonStepDownByElement = new QuantitySelector(buttonStepDownEl)

    expect(buttonStepDownBySelector._element).toEqual(buttonStepDownEl)
    expect(buttonStepDownByElement._element).toEqual(buttonStepDownEl)
  })

  it('should increment by one step on click on Step Up button', () => {
    fixtureEl.innerHTML = [
      '<div class="quantity-selector">',
      '  <input type="number" id="inputQuantitySelector1" class="form-control" aria-live="polite" data-bs-step="counter" name="quantity" title="quantity" value="9" min="0" max="10" step="1" data-bs-round="0" aria-label="Quantity selector">',
      '  <button type="button" class="btn btn-icon btn-default" aria-describedby="inputQuantitySelector1" data-bs-step="down">',
      '    <span class="visually-hidden">Step down</span>',
      '  </button>',
      '  <button type="button" class="btn btn-icon btn-default" aria-describedby="inputQuantitySelector1" data-bs-step="up">',
      '    <span class="visually-hidden">Step up</span>',
      '  </button>',
      '</div>'
    ].join('')

    const buttonStepUpEl = fixtureEl.querySelector('[data-bs-step="up"]')
    const inputEl = fixtureEl.querySelector('[data-bs-step="counter"]')

    expect(inputEl.value).toBe('9')

    buttonStepUpEl.click()

    expect(inputEl.value).toBe('10')

    buttonStepUpEl.click()

    expect(inputEl.value).toBe('10')
  })

  it('should decrement by one step on click on Step Down button', () => {
    fixtureEl.innerHTML = [
      '<div class="quantity-selector">',
      '  <input type="number" id="inputQuantitySelector1" class="form-control" aria-live="polite" data-bs-step="counter" name="quantity" title="quantity" value="1" min="0" max="10" step="1" data-bs-round="0" aria-label="Quantity selector">',
      '  <button type="button" class="btn btn-icon btn-default" aria-describedby="inputQuantitySelector1" data-bs-step="down">',
      '    <span class="visually-hidden">Step down</span>',
      '  </button>',
      '  <button type="button" class="btn btn-icon btn-default" aria-describedby="inputQuantitySelector1" data-bs-step="up">',
      '    <span class="visually-hidden">Step up</span>',
      '  </button>',
      '</div>'
    ].join('')

    const buttonStepDownEl = fixtureEl.querySelector('[data-bs-step="down"]')
    const inputEl = fixtureEl.querySelector('[data-bs-step="counter"]')

    expect(inputEl.value).toBe('1')

    buttonStepDownEl.click()

    expect(inputEl.value).toBe('0')

    buttonStepDownEl.click()

    expect(inputEl.value).toBe('0')
  })

  it('should increment a decimal value by 0.5 step on click on Step Up button and round it', () => {
    fixtureEl.innerHTML = [
      '<div class="quantity-selector">',
      '  <input type="number" id="inputQuantitySelector1" class="form-control" aria-live="polite" data-bs-step="counter" name="quantity" title="quantity" value="1.25" min="0" max="10" step="0.5" data-bs-round="1" aria-label="Quantity selector">',
      '  <button type="button" class="btn btn-icon btn-default" aria-describedby="inputQuantitySelector1" data-bs-step="down">',
      '    <span class="visually-hidden">Step down</span>',
      '  </button>',
      '  <button type="button" class="btn btn-icon btn-default" aria-describedby="inputQuantitySelector1" data-bs-step="up">',
      '    <span class="visually-hidden">Step up</span>',
      '  </button>',
      '</div>'
    ].join('')

    const buttonStepUpEl = fixtureEl.querySelector('[data-bs-step="up"]')
    const inputEl = fixtureEl.querySelector('[data-bs-step="counter"]')

    expect(inputEl.value).toBe('1.25')

    buttonStepUpEl.click()

    expect(inputEl.value).toBe('1.8') // 1.25 + .5 = 1.75 and with data-bs-round="1" = 1.8
  })

  it('should decrement a decimal value by 1 step on click on Step Down button but not resulting as a negative value', () => {
    fixtureEl.innerHTML = [
      '<div class="quantity-selector">',
      '  <input type="number" id="inputQuantitySelector1" class="form-control" aria-live="polite" data-bs-step="counter" name="quantity" title="quantity" value="1.5" min="0" max="10" step="1" data-bs-round="1" aria-label="Quantity selector">',
      '  <button type="button" class="btn btn-icon btn-default" aria-describedby="inputQuantitySelector1" data-bs-step="down">',
      '    <span class="visually-hidden">Step down</span>',
      '  </button>',
      '  <button type="button" class="btn btn-icon btn-default" aria-describedby="inputQuantitySelector1" data-bs-step="up">',
      '    <span class="visually-hidden">Step up</span>',
      '  </button>',
      '</div>'
    ].join('')

    const buttonStepDownEl = fixtureEl.querySelector('[data-bs-step="down"]')
    const inputEl = fixtureEl.querySelector('[data-bs-step="counter"]')

    expect(inputEl.value).toBe('1.5')

    buttonStepDownEl.click()

    expect(inputEl.value).toBe('0.5')

    expect(buttonStepDownEl.disabled).toBeTruthy()
  })

  it('should increment a decimal value by 1 step on click on Step Up button but not resulting as a negative value', () => {
    fixtureEl.innerHTML = [
      '<div class="quantity-selector">',
      '  <input type="number" id="inputQuantitySelector1" class="form-control" aria-live="polite" data-bs-step="counter" name="quantity" title="quantity" value="8.5" min="0" max="10" step="1" data-bs-round="1" aria-label="Quantity selector">',
      '  <button type="button" class="btn btn-icon btn-default" aria-describedby="inputQuantitySelector1" data-bs-step="down">',
      '    <span class="visually-hidden">Step down</span>',
      '  </button>',
      '  <button type="button" class="btn btn-icon btn-default" aria-describedby="inputQuantitySelector1" data-bs-step="up">',
      '    <span class="visually-hidden">Step up</span>',
      '  </button>',
      '</div>'
    ].join('')

    const buttonStepUpEl = fixtureEl.querySelector('[data-bs-step="up"]')
    const inputEl = fixtureEl.querySelector('[data-bs-step="counter"]')

    expect(inputEl.value).toBe('8.5')

    buttonStepUpEl.click()

    expect(inputEl.value).toBe('9.5')

    expect(buttonStepUpEl.disabled).toBeTruthy()
  })

  it('should disable click on Step Down button on load to prevent a value out of range', done => {
    fixtureEl.innerHTML = [
      '<div class="quantity-selector">',
      '  <input type="number" id="inputQuantitySelector1" class="form-control" aria-live="polite" data-bs-step="counter" name="quantity" title="quantity" value="0.5" min="0" max="10" step="1" data-bs-round="1" aria-label="Quantity selector">',
      '  <button type="button" class="btn btn-icon btn-default" aria-describedby="inputQuantitySelector1" data-bs-step="down">',
      '    <span class="visually-hidden">Step down</span>',
      '  </button>',
      '  <button type="button" class="btn btn-icon btn-default" aria-describedby="inputQuantitySelector1" data-bs-step="up">',
      '    <span class="visually-hidden">Step up</span>',
      '  </button>',
      '</div>'
    ].join('')

    const buttonStepDownEl = fixtureEl.querySelector('[data-bs-step="down"]')
    const inputEl = fixtureEl.querySelector('[data-bs-step="counter"]')

    const loadEvent = createEvent('load')
    window.dispatchEvent(loadEvent)

    expect(inputEl.value).toBe('0.5')

    setTimeout(() => {
      expect(buttonStepDownEl.disabled).toBeTruthy()
      expect(inputEl.value).toBe('0.5')
      done()
    }, 10)
  })

  it('should disable click on Step Up button on load to prevent a value out of range', done => {
    fixtureEl.innerHTML = [
      '<div class="quantity-selector">',
      '  <input type="number" id="inputQuantitySelector1" class="form-control" aria-live="polite" data-bs-step="counter" name="quantity" title="quantity" value="9.5" min="0" max="10" step="1" data-bs-round="1" aria-label="Quantity selector">',
      '  <button type="button" class="btn btn-icon btn-default" aria-describedby="inputQuantitySelector1" data-bs-step="down">',
      '    <span class="visually-hidden">Step down</span>',
      '  </button>',
      '  <button type="button" class="btn btn-icon btn-default" aria-describedby="inputQuantitySelector1" data-bs-step="up">',
      '    <span class="visually-hidden">Step up</span>',
      '  </button>',
      '</div>'
    ].join('')

    const buttonStepUpEl = fixtureEl.querySelector('[data-bs-step="up"]')
    const inputEl = fixtureEl.querySelector('[data-bs-step="counter"]')

    expect(inputEl.value).toBe('9.5')

    const loadEvent = createEvent('load')
    window.dispatchEvent(loadEvent)

    setTimeout(() => {
      expect(buttonStepUpEl.disabled).toBeTruthy()
      expect(inputEl.value).toBe('9.5')
      done()
    }, 10)
  })
})
