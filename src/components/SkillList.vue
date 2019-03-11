<template>
  <div>
    <label for="skill-name-input">Skill</label>
    <input id="skill-name-input" type="text" v-model="skillName">
    <label for="skill-weight-input">Skill</label>
    <input id="skill-weight-input" type="text" v-model="skillWeight">
    <button @click="addSkill()" class="add-new-skill-button" type="button"> Add Skill </button>
    <ol class="skills-list">
      <li :key="index" class="skill-item" v-for="(skill, index) in skills">
        {{ skill.name }} | {{ skill.weight }}
      </li>
    </ol>
  </div>
</template>

<script>
// @todo #23:30m/DEV add validation for weight field (integer only)

// @todo #23:30m/DEV the sum of all skill weights should not exceed 100

// @todo #4:30m/DEV create Skill component

// @todo #4:30m/DEV SkillList should aggregate the skill "weights" and present them
//  I am imagining all weights should total to no more than 100%

// @todo #29:30m/DEV add-new-skill-button should be triggered by enter key

export default {
  name: 'SkillList',
  props: {
    skills: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    skills: [],
    skillName: '',
    skillWeight: 0,
  }),
  methods: {
    addSkill() {
      this.skills.push({
        name: this.skillName,
        weight: this.skillWeight,
      });
      this.$emit('update:skills', this.skills);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
