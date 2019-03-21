<template>
  <div>
    <form action="">
      <label for="project-name-field">Project Name</label>
      <input
        id="project-name-field"
        v-model="name"
        type="text"
        @keyup.enter="createProject()"
      >

      <label for="project-year-field">Project Year</label>
      <select
        id="project-year-field"
        v-model="year"
      >
        <option
          v-for="year in years"
          :key="year"
          :value="year"
        >
          {{ year }}
        </option>
      </select>

      <label for="project-status-field">Project Status</label>
      <select
        id="project-status-field"
        v-model="status"
      >
        <option
          v-for="status in statusChoices"
          :key="status"
          :value="status"
        >
          {{ status }}
        </option>
      </select>

      <SkillList
        :skills.sync="skills"
      />
    </form>
    <button
      class="create-project-button"
      type="submit"
      @click="createProject"
    >
      Create Project
    </button>
  </div>
</template>

<script>
// @todo #25:30m/DEV prevent project creation until skill weights equal 100
// @todo #38:30m/DEV failing test for project creation where weight != 100


import SkillList from './SkillList.vue';

export default {
  name: 'ProjectBuilder',
  components: { SkillList },
  props: {},
  data: () => ({
    name: '',
    year: new Date().getFullYear(),
    status: 'Complete',
    statusChoices: [
      'Complete',
      'In Progress',
      'Retired',
    ],
    skills: [],
  }),
  computed: {
    project() {
      return {
        name: this.name,
        year: this.year,
        status: this.status,
        skills: this.skills,
      };
    },
    years() {
      const years = [];
      const now = new Date();
      const currentYear = now.getFullYear();
      for (let year = 1900; year !== currentYear + 1; year += 1) {
        years.unshift(year);
      }
      return years;
    },
  },
  methods: {
    createProject() {
      this.$emit('create-project', this.project);
      this.skills = [];
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
