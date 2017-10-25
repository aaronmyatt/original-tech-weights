<template>
<div class="weight-list progress" style="height: 20px;">
  <div v-for="weight in transformWeightList" :style="{ width: weight.weight, backgroundColor: weight.color }" class="weight progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
    {{ weight.name }}: {{ weight.weight }}
  </div>
</div>
</template>

<script>
export default {
  name: 'WeightVisualiser',
  props: ['weightList'],
  computed: {
    transformWeightList() {
      const colors = ['green', 'blue', 'red', 'black', 'white'];
      return this.weightList.map((w) => {
        const wc = Object.assign({}, w);
        wc.weight = `${w.weight}%`;
        wc.color = colors.shift();
        return wc;
      });
    },
  },
};
</script>

<style scoped>
</style>
