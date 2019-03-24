<template>
  <div class="flex flex-row flex-wrap w-full items-center">
    <div
      v-for="(project, projectKey) in projects"
      :key="projectKey"
      class="shadow p-5 my-5 w-1/4"
      data-test="projects-list"
    >
      <ul>
        <li>{{ project.name }}</li>
        <li>{{ project.status }}</li>
        <li>{{ project.year }}</li>
        <li>
          <div
            v-for="(skill, skillKey) in project.skills"
            :key="skillKey"
          >
            {{ skill.name }} | {{ skill.weight }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// @todo #19:30m/DEV implement a Project component
//  this will render project data passed over by the ProjectBuilder

// @todo #25:30m/DEV make projects editable

// @todo #1:30m/DEV add dev conveience to prepopulate with 1 project
//  perhaps using a url query arg?

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
