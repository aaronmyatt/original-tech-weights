import { mount } from 'vue-test-utils'
import ProjectList from '../src/components/ProjectList'
import Project from '../src/components/Project'

describe('ProjectList', () => {
  let cmp

  beforeEach(() => {
    cmp = mount(ProjectList, {
        propsData: {
            projectList: [
                {
                    projectName: 'Test Project',
                    projectWeights: [{
                      name: 'Test',
                      weight: 100,
                    }]
                },
            ],
        },
    })
  })

  it('has the expected html structure', () => {
    expect(cmp.element).toMatchSnapshot()
  })

  describe('Project Component Dependency', () => {

      it('renders a list of Project components', () => {
          expect(cmp.findAll('.project-list .project').contains(Project)).toBe(true)
      })

      it('passes props to sub components', () => {
          expect(cmp.find('.project-list .project-name').text().trim()).toBe(cmp.vm.projectList[0].projectName)
      })

  })

})
