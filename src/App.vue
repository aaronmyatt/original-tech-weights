<template>
  <div id="app">
    <h1>Tech Weights</h1>
    <ProjectBuilder/>
    <ProjectsList/>
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
  };
</script>

<style>
</style>
