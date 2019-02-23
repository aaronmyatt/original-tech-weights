<template>
  <div id="app">
    <h1>Tech Weights</h1>
    <ProjectBuilder/>
    <ProjectsList/>
  </div>
</template>

<script>
  import ProjectBuilder from './components/ProjectBuilder';
  import ProjectsList from "./components/ProjectsList";

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
