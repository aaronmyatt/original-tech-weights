<template>
  <div id="app" class="mx-auto container flex flex-col items-center">
    <ProjectBuilder></ProjectBuilder>
    <ProjectsList></ProjectsList>
  </div>
</template>

<script>
import ProjectBuilder from '~/components/ProjectBuilder.vue';
import ProjectsList from '~/components/ProjectsList.vue';

export default {
  components: {
    ProjectBuilder,
    ProjectsList
  }
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
