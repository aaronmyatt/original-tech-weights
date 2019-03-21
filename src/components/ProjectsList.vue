<template>
  <div>
    <ol>
      <li
        v-for="(project, index) in projects"
        :key="index"
        class="projects-list"
      >
        <ul>
          <li>{{ project.name }}</li>
          <li>{{ project.status }}</li>
          <li>{{ project.skills }}</li>
          <li>{{ project.year }}</li>
        </ul>
      </li>
    </ol>
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
      type: Array,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
