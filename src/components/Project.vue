<template>
<ul class="project-container list-group">
  <li class="project-name card-title list-group-item d-flex w-100 justify-content-between">
    <h5>{{ projectName }}</h5>
  </li>

  <li class="project-description list-group-item d-flex w-100 justify-content-between">
    {{ projectDescription }}
  </li>

  <li class="project-date list-group-item d-flex w-100 justify-content-between">
    {{ projectDate }}
  </li>

  <li class="project-owner list-group-item d-flex w-100 justify-content-between">
    {{ projectOwner }}
  </li>

  <li class="project-repo-url list-group-item d-flex w-100 justify-content-between">
    {{ projectUrl }}
  </li>

  <li class="project-tech-weights list-group-item">
    <WeightVisualiser :weightList="getWeightList()"/>
  </li>
</ul>
</template>

<script>
import WeightVisualiser from './WeightVisualiser';

export default {
  name: 'Project',
  components: {
    WeightVisualiser,
  },
  props: [
    'projectName',
    'projectDescription',
    'projectDate',
    'projectOwner',
    'projectUrl',
    'projectWeights',
  ],
  methods: {
    getWeightList() {
      return this.projectWeights;
    },
  },
};
</script>

<style scoped>
</style>
