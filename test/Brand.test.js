import { shallow } from 'vue-test-utils'
import Brand from '../src/components/Brand'

describe('Brand', () => {
  let cmp

  beforeEach(() => {
    cmp = shallow(Brand, {
        propsData: {
            brandName: 'Test',
        }
    })
  })

  it('has the expected html structure', () => {
    expect(cmp.element).toMatchSnapshot()
  })

  describe('Props', () => {

      it('renders the given brand name', () => {
          expect(cmp.find('.brand').text()).toBe(cmp.vm.brandName)
      })

  })
})
