<template>
  <div>
    <form action="">
      <label for="project-name-field">Project Name</label>
      <input id="project-name-field" type="text" v-model="name">

      <label for="project-year-field">Project Year</label>
      <select id="project-year-field" v-model="year">
        <option :key="year" :value="year" v-for="year in years"> {{ year }}</option>
      </select>

      <label for="project-status-field">Project Status</label>
      <input id="project-status-field" type="text" v-model="status">

      <SkillList @new-skill-added="updateSkills"/>
    </form>
    <button @click="createProject" class="create-project-button">Create Project</button>
  </div>
</template>

<script>
// @todo #14:30m/DEV select current year by default
//  I can probably set data.year to new Date().getFullYear();

// @todo #5:30m/DEV add validation for project status
//  restrict status choices to Complete/In Progress/Retired
//  this should be a select/dropdown field then

import SkillList from './SkillList.vue';

export default {
  name: 'ProjectBuilder',
  components: { SkillList },
  props: {},
  data: () => ({
    name: '',
    year: '',
    status: '',
    skills: [],
  }),
  methods: {
    createProject() {
      this.$emit('create-project', this.project);
    },
    updateSkills(skills) {
      this.skills = skills;
    },
  },
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
      let years = [];
      const now = new Date();
      const currentYear = now.getFullYear();
      for (let year = 1900; year !== currentYear+1; year += 1){
        years.unshift(year);
      }
      return years;
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
