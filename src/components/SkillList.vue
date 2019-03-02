<template>
  <div>
    <label for="skill-name-input">Skill</label>
    <input id="skill-name-input" type="text" v-model="skillName">
    <label for="skill-weight-input">Skill</label>
    <input id="skill-weight-input" type="text" v-model="skillWeight">
    <button @click="addSkill()" type="button"> Add Skill </button>
    <ol class="skill-list" v-for="skill in skills">
      <li class="skill-item">{{ skill.name }} | {{ skill.weight }}</li>
    </ol>
  </div>
</template>

<script>
// @todo #23:30m/DEV add validation for weight field (integer only)

// @todo #23:30m/DEV the sum of all skill weights should not exceed 100

// @todo #4:30m/DEV create Skill component

// @todo #4:30m/DEV SkillList should aggregate the skill "weights" and present them
//  I am imagining all weights should total to no more than 100%

// @todo #19:30m/DEV $emit event everytime a new Skill is added to the list
//  this way the parent project can catch, save and recreate the list later

export default {
  name: 'SkillList',
  props: {},
  data: () => {
    return {
      skills: [],
      skillName: "",
      skillWeight: 0,
    }
  },
  methods: {
    addSkill() {
      this.skills.push({
        name: this.skillName,
        weight: this.skillWeight,
      });
      // prevents page refresh
      return false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
