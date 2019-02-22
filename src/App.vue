<template>
  <div id="app">
    <h1>Tech Weights</h1>
    <ProjectBuilder/>
  </div>
</template>

<script>
  import ProjectBuilder from './components/ProjectBuilder.vue';

  export default {
    name: 'app',
    components: {
      ProjectBuilder,
    },
  };
</script>

<style>
</style>
