<template>
  <div class="flex flex-row flex-wrap w-full items-center">
    <div
      v-for="(project, projectKey) in getProjects"
      :key="projectKey"
      class="shadow p-5 my-5 w-1/4"
      data-test="projects-list"
    >
      <ul>
        <li>{{ project.name }}</li>
        <li>{{ project.status }}</li>
        <li>{{ project.year }}</li>
        <li>
          <div v-for="(skill, skillKey) in project.skills" :key="skillKey">
            {{ skill.name }} | {{ skill.weight }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// @todo #19:30m/DEV implement a Project component
//  this will render project data passed over by the ProjectBuilder
// @todo #25:30m/DEV make projects editable

export default {
  name: 'ProjectsList',
  props: {
    projects: {
      default: () => [],
      type: Array
    }
  },
  data: () => ({
    projectFixtures: []
  }),
  computed: {
    getProjects() {
      return this.projects.concat(this.projectFixtures);
    }
  },
  mounted() {
    const generateCount = this.getParameterByName(
      'projects',
      window.location.href
    );
    const generator = new this.$FixtureGenerator(generateCount);
    this.projectFixtures = generator.process().results();
  },
  methods: {
    getParameterByName(name, url) {
      const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`);
      const results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
