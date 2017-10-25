export default {
  projectDetails() {
    return {
      brandName: 'Tech Weight',
      userDetails: {
        userName: 'Aaron Myatt',
        email: 'aaronmyatt@gmail.com',
        githubProfileUrl: 'https://github.com/aaronmyatt',
        linkedinProfileUrl: 'https://www.linkedin.com/in/aaronmyatt/',
      },
      projectList: [{
        projectName: 'Tech Weights',
        projectDescription: 'Better visualise your tech strengths',
        projectDate: new Date().toString(),
        projectOwner: 'Self',
        projectUrl: 'https://github.com/aaronmyatt/tech_skill_weights',
        projectWeights: [
          {
            name: 'Vue.js',
            weight: 50,
          },
          {
            name: 'jest.js',
            weight: 50,
          },
        ],
      }],
    };
  },
};
