<template>
  <div>
    <label for="skill-name-input">Skill</label>
    <input @keyup.enter="addSkill()" id="skill-name-input" type="text" v-model="skillName">
    <label for="skill-weight-input">Skill</label>
    <input @keyup.enter="addSkill()" id="skill-weight-input" type="text" v-model="skillWeight">
    <button @click="addSkill()" class="add-new-skill-button" type="button"> Add Skill</button>
    <ol class="skills-list">
      <li :key="index" class="skill-item" v-for="(skill, index) in skills">
        {{ skill.name }} | {{ skill.weight }}
      </li>
    </ol>
    <p>ERROR: {{ error }}</p>
  </div>
</template>

<script>
// @todo #23:30m/DEV add validation for weight field (integer only)
// @todo #4:30m/DEV SkillList should aggregate the skill "weights" and present them
//  I am imagining all weights should total to no more than 100%
// @todo #25:30m/DEV only show error when necessary, clear error error when resolved
//  can add an onchange or keyup handler to clear the error

export default {
  name: 'SkillList',
  props: {
    skills: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    skillName: '',
    skillWeight: 0,
    error: '',
  }),
  methods: {
    addSkill() {
      this.skills.push({
        name: this.skillName,
        weight: this.skillWeight,
      });

      if (this.totalWeightsExceed100()) {
        this.dropLastSkill();
        this.issueSkillWeightWarning();
      }

      this.$emit('update:skills', this.skills);
    },
    totalWeightsExceed100() {
      const sumSkillWeights = (acc, cur) => cur.weight + acc;
      return this.skills.reduce(sumSkillWeights, 0) > 100;
    },
    dropLastSkill() {
      this.skills.pop();
    },
    issueSkillWeightWarning() {
      this.error = 'Total Skill Weights cannot exceed 100';
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
