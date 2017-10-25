import {
  shallow
} from 'vue-test-utils'
import WeightVisualiser from '../src/components/WeightVisualiser'

describe('WeightVisualiser', () => {
  let cmp

  beforeEach(() => {
    cmp = shallow(WeightVisualiser, {
      propsData: {
        weightList: [{
            name: 'Vue.js',
            weight: 50,
          },
          {
            name: 'jest.js',
            weight: 50,
          },
        ]
      }
    })
  })

  it('has the expected html structure', () => {
    expect(cmp.element).toMatchSnapshot()
  })

  describe('Props', () => {

    it('renders a list of projects', () => {
      expect(cmp.findAll('.weight-list .weight')).toHaveLength(cmp.vm.weightList.length)
    })

  })

  describe('Weight Style', () => {

    it('sets width to weight value', () => {
      let tech = cmp.vm.weightList[0]
      expect(cmp.find('.weight-list .weight').hasStyle('width', `${tech.weight}%`)).toBe(true)
    })

  })


})
