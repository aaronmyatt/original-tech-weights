<template>
  <div id="app">
    <h1>Tech Weights</h1>
    <ProjectBuilder @create-project="createProject()"/>
    <ProjectsList :projects="projects"/>


  </div>
</template>

<script>
import ProjectBuilder from './components/ProjectBuilder.vue';
import ProjectsList from './components/ProjectsList.vue';

export default {
  name: 'app',
  components: {
    ProjectsList,
    ProjectBuilder,
  },
  data() {
    return {
      projects: [],
    };
  },
  methods: {
    createProject() {
      this.projects.push('aproject!');
    },
  },
};
</script>

<style>
</style>
