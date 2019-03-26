class ProjectFixtureGenerator {
  #numberOfFixtures = 0;

  #result;

  fixtureTemplate = {
    name: 'Project1',
    year: 2019,
    status: 'Complete',
    skills: [
      { name: 'skill1', weight: 20 },
      { name: 'skill2', weight: 30 },
      { name: 'skill3', weight: 50 },
    ],
  };

  constructor(numberOfFixtures) {
    this.numberOfFixtures = numberOfFixtures;
  }

  process() {
    this.result = this.generateProjects();
    return this;
  }

  results() {
    return this.result;
  }

  generateProjects() {
    const projects = [];
    for (let count = 0; count < this.numberOfFixtures; count += 1) {
      projects.push(this.fixtureTemplate);
    }
    return projects;
  }
}

export default ProjectFixtureGenerator;
