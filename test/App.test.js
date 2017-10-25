import { shallow } from 'vue-test-utils'
import App from '../src/App'

describe('App', () => {
  let cmp

  beforeEach(() => {
    cmp = shallow(App)
  })

  it('has the expected html structure', () => {
    expect(cmp.element).toMatchSnapshot()
  })
})
