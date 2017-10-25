import { shallow } from 'vue-test-utils'
import UserDetails from '../src/components/UserDetails'

describe('UserDetails', () => {
  let cmp

  beforeEach(() => {
    cmp = shallow(UserDetails, {
        propsData: {
            userName: 'Test User',
            email: 'test@test.com',
            githubProfileUrl: 'github.com/test',
            linkedinProfileUrl: 'linkedin.com/test',
        }
    })
  })

  it('has the expected html structure', () => {
    expect(cmp.element).toMatchSnapshot()
  })

  describe('Props', () => {

      it('renders the users name', () => {
          expect(cmp.find('.user-details .user-name').text().trim()).toBe(cmp.vm.userName)
      })

      it('renders the users email', () => {
          expect(cmp.find('.user-details .user-email').text().trim()).toBe(cmp.vm.email)
      })

      it('renders the users github profile url', () => {
          expect(cmp.find('.user-details .user-github').html()).toContain(cmp.vm.githubProfileUrl)
      })

      it('renders the users linkdin url', () => {
          expect(cmp.find('.user-details .user-linkedin').html()).toContain(cmp.vm.linkedinProfileUrl)
      })

  })
})
