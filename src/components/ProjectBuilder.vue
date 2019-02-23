<template>
  <button class="create_project_button">Create Project</button>
</template>

<script>
  // @todo #4:30m/DEV add project builder form fields
  //  including: Name, Year of Project, and Completed Status
  //  https://github.com/aaronmyatt/tech-weights/wiki
  //  don't forget to ignore it before pushing

  // @todo #4:30m/DEV create SkillList component

  // @todo #7:30m/DEV implement Create Project on click adds a "project_item"
  //  to the ProjectsList. My intuition tells me I can just communicate via state
  //  on the parent component. So, this should be the first step, but with an open
  //  acknowledgement that this will be replaced with Vuex/a message bus in a further iteration

  export default {
    name: 'ProjectBuilder',
    props: {},
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
