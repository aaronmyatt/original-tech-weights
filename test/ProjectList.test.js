import { shallow } from 'vue-test-utils'
import ProjectList from '../src/components/ProjectList'

describe('ProjectList', () => {
  let cmp

  beforeEach(() => {
    cmp = shallow(ProjectList, {
        propsData: {
            projectList: ['Test project'],
        },
    })
  })

  it('has the expected html structure', () => {
    expect(cmp.element).toMatchSnapshot()
  })

  describe('Props', () => {

      it('renders a list of projects', () => {
          expect(cmp.findAll('.project-list .project')).toHaveLength(cmp.vm.projectList.length)
      })

      it('renders a all projects in the list', () => {
          cmp.vm.projectList.push('Another Test Project')
          cmp.update()
          expect(cmp.findAll('.project-list .project')).toHaveLength(cmp.vm.projectList.length)
      })

  })

})
