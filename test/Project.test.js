import { shallow } from 'vue-test-utils'
import Project from '../src/components/Project'

describe('Project', () => {
  let cmp

  beforeEach(() => {
    cmp = shallow(Project, {
        propsData: {
            projectName: 'Test project',
            projectDescription: 'Test description',
            projectDate: new Date().toLocaleDateString(),
            projectOwner: 'Self',
            projectUrl: 'github.com/test_project'
        },
    })
  })

  it('has the expected html structure', () => {
    expect(cmp.element).toMatchSnapshot()
  })

  describe('Props', () => {

      it('renders the project name', () => {
          expect(cmp.find('.project-container .project-name').text().trim()).toBe(cmp.vm.projectName)
      })

      it('renders the project description', () => {
          expect(cmp.find('.project-container .project-description').text().trim()).toBe(cmp.vm.projectDescription)
      })

      it('renders the project date', () => {
          expect(cmp.find('.project-container .project-date').text().trim()).toBe(cmp.vm.projectDate)
      })

      it('renders the project owner', () => {
          expect(cmp.find('.project-container .project-owner').text().trim()).toBe(cmp.vm.projectOwner)
      })

      it('renders the project repo url', () => {
          expect(cmp.find('.project-container .project-repo-url').html()).toContain(cmp.vm.projectUrl)
      })

  })

})
