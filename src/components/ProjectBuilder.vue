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
// @todo #7:30m/DEV implement Create Project on click adds a "project-item"
//  to the ProjectsList. My intuition tells me I can just communicate via state
//  on the parent component. So, this should be the first step, but with an open
//  acknowledgement that this will be replaced with Vuex/a message bus in a further iteration

// @todo #7:30m/LEARN component-component message passing
//  how to notify sibling components that an event occurring in one should
//  trigger an event in the other

// @todo #5:30m/DEV add validation for project year
//  restrict formatting to '2019' style

// @todo #5:30m/DEV add validation for project status
//  restrict status choices to Complete/In Progress/Retired
//  this should be a select/dropdown field then

// @todo #5:30m/DEV add form submit method
//  probably need to pull .create-project-button into the form


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
