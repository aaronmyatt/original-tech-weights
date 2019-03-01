<template>
  <div>
    <ol :key="index" class="projects-list" v-for="(project, index) in projects">
      {{ index }} : {{ project }}
    </ol>
  </div>
</template>

<script>
// @todo #19:30m/DEV implement a Project component
//  this will render project data passed over by the ProjectBuilder

export default {
  name: 'ProjectsList',
  props: {
    projects: {
      default: () => [],
      type: Array,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
