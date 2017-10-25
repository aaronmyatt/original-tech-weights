<template>
<ul class="project-list">
  <li class="project card" v-for="project, index in projectList" :key="index">
    <Project v-bind="project" />
  </li>
</ul>
</template>

<script>
import Project from './Project';

export default {
  name: 'ProjectList',
  props: ['projectList'],
  components: {
    Project,
  },
};
</script>

<style scoped>
</style>
