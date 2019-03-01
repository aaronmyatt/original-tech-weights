<template>
  <div>
    <form action="">
      <label for="project-name-field">Project Name</label>
      <input id="project-name-field" type="text">

      <label for="project-year-field">Project Year</label>
      <input id="project-year-field" type="text">

      <label for="project-status-field">Project Status</label>
      <input id="project-status-field" type="text">

      <SkillList/>
    </form>
    <button @click="createProject()" class="create-project-button">Create Project</button>
  </div>
</template>

<script>
// @todo #5:30m/DEV add validation for project year
//  restrict formatting to '2019' style

// @todo #5:30m/DEV add validation for project status
//  restrict status choices to Complete/In Progress/Retired
//  this should be a select/dropdown field then

// @todo #5:30m/DEV pass form field data to project list


import SkillList from './SkillList.vue';

export default {
  name: 'ProjectBuilder',
  components: { SkillList },
  props: {},
  methods: {
    createProject() {
      this.$emit('create-project');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
