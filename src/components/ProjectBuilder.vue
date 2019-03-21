<template>
  <div>
    <div
      v-if="error.show"
      data-test="create-project-failed-error"
    >
      ERROR: {{ error.message }}
    </div>
    <form action="">
      <label for="project-name-field">Project Name</label>
      <input
        id="project-name-field"
        v-model="name"
        data-test="project-name-field"
        required
        type="text"
        @keyup.enter="createProject()"
      >

      <label for="project-year-field">Project Year</label>
      <select
        id="project-year-field"
        v-model="year"
        data-test="project-year-field"
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
        data-test="project-status-field"
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
    </form>
    <button
      type="submit"
      data-test="create-project-button"
      @click="createProject"
    >
      Create Project
    </button>
  </div>
</template>

<script>
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
    error: {
      show: false,
      message: '',
    },
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
        this.error.show = false;
      } else {
        this.error.message = 'Please complete the form and ensure skill weights === 100';
        this.error.show = true;
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
