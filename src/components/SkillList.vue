<template>
  <ol class="skill-list">
    <li>Skill #1</li>
  </ol>
</template>

<script>
// @todo #4:30m/DEV implement Add Skill on click adds a "skill-item" to ".skill-list

// @todo #4:30m/DEV create Skill component

// @todo #4:30m/DEV SkillList should aggregate the skill "weights" and present them
//  I am imagining all weights should total to no more than 100%

// @todo #19:30m/DEV $emit event everytime a new Skill is added to the list
//  this way the parent project can catch, save and recreate the list later

export default {
  name: 'SkillList',
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
