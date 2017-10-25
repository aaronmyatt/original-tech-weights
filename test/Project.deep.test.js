import {
  mount
} from 'vue-test-utils'
import Project from '../src/components/Project'
import WeightVisualiser from '../src/components/WeightVisualiser'

describe('Project', () => {
  let cmp

  beforeEach(() => {
    cmp = mount(Project, {
        propsData: {
          projectName: 'Test Project',
          projectWeights: [{
            name: 'Test',
            weight: 100,
          }]
        },
      })
    })


  it('has the expected html structure', () => {
    expect(cmp.element).toMatchSnapshot()
  })

  describe('Project Component Dependency', () => {

    it('renders a list of WeightVisualiser components', () => {
        expect(cmp.findAll('.project-tech-weights').contains(WeightVisualiser)).toBe(true)
    })

  })

})
