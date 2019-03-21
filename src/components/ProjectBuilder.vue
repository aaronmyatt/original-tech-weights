<template>
  <div>
    <form action="">
      <label for="project-name-field">Project Name</label>
      <input
        id="project-name-field"
        v-model="name"
        required
        type="text"
        @keyup.enter="createProject()"
      >

      <label for="project-year-field">Project Year</label>
      <select
        id="project-year-field"
        v-model="year"
        required
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
        required
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
      <button
        class="create-project-button"
        type="submit"
        @click="createProject"
      >
        Create Project
      </button>
    </form>
  </div>
</template>

<script>
// @todo #38:30m/DEV move to data-test attribute selectors for tests
// @todo #38:30m/DEV add error message when form submit fails

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
      if (this.formValid()) {
        this.$emit('create-project', this.project);
        this.skills = [];
      }
    },
    formValid() {
      return this.name !== '' && this.totalWeightsExceed100();
    },
    totalSkillWeights() {
      const sumSkillWeights = (acc, cur) => cur.weight + acc;
      return this.skills.reduce(sumSkillWeights, 0);
    },
    totalWeightsExceed100() {
      return this.totalSkillWeights() > 100;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
