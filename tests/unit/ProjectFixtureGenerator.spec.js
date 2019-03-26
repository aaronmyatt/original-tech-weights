import ProjectFixtureGenerator from '../../src/lib/ProjectFixtureGenerator';

const project = {
  name: 'Project1',
  year: 2019,
  status: 'Complete',
  skills: [
    { name: 'skill1', weight: 20 },
    { name: 'skill2', weight: 30 },
    { name: 'skill3', weight: 50 },
  ],
};

let projectFixtureGenerator;
beforeAll(() => {
  projectFixtureGenerator = new ProjectFixtureGenerator();
});

describe('ProjectFixtureGenerator', () => {
  test('is importable', () => {
    expect(projectFixtureGenerator).toBeInstanceOf(ProjectFixtureGenerator);
  });

  describe('no parameters', () => {
    test('returns empty list', () => {
      projectFixtureGenerator.process();
      expect(projectFixtureGenerator.results()).toEqual([]);
    });
  });

  describe('parameters: 1', () => {
    let oneProject;
    beforeEach(() => {
      oneProject = new ProjectFixtureGenerator(1);
    });

    test('returns a list with 1 item', () => {
      oneProject.process();
      expect(oneProject.results()).toHaveLength(1);
    });

    test('returns one project fixture', () => {
      oneProject.process();
      expect(oneProject.results()).toContainEqual(project);
    });
  });

  describe('parameters: 2', () => {
    let twoProjects;
    beforeEach(() => {
      twoProjects = new ProjectFixtureGenerator(2);
    });

    test('returns a list with 2 item', () => {
      twoProjects.process();
      expect(twoProjects.results()).toHaveLength(2);
    });

    test('returns project fixtures', () => {
      twoProjects.process();
      expect(twoProjects.results()).toContainEqual(project);
    });
  });
});
