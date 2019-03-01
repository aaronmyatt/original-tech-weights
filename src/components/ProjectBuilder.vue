<template>
  <div>
    <form action="">
      <label for="project-name-field">Project Name</label>
      <input id="project-name-field" type="text" v-model="name">

      <label for="project-year-field">Project Year</label>
      <input id="project-year-field" type="text" v-model="year">

      <label for="project-status-field">Project Status</label>
      <input id="project-status-field" type="text" v-model="status">

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

// @todo #19:30m/DEV add v-on to SkillList
//  this will require some sort of callback method to populate the `this.skills`


import SkillList from './SkillList.vue';

export default {
  name: 'ProjectBuilder',
  components: { SkillList },
  props: {},
  data: () => {
    return {
      name: "",
      year: "",
      status: "",
      skills: []
    }
  },
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
