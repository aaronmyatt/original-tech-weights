<template>
  <div>
    <form
      class="flex flex-col shadow-md rounded px-8 pt-6 pb-8 mb-4"
      action=""
    >
      <label for="skill-name-input"> Skill </label>
      <input
        id="skill-name-input"
        v-model="skillName"
        class="p-5 rounded-full border"
        type="text"
        @keyup.enter="addSkill"
      >
      <label for="skill-weight-input"> Skill </label>
      <input
        id="skill-weight-input"
        v-model="skillWeight"
        class=" p-5 rounded-full border"
        type="number"
        @keyup.enter="addSkill"
      >
      <button
        class="add-new-skill-button rounded-full shadow p-5"
        type="button"
        @click="addSkill"
      >
        Add Skill
      </button>
      <p>ERROR: {{ error }}</p>
    </form>
    <ul class="skills-list p-5 shadow">
      <li
        v-for="(skill, index) in skills"
        :key="index"
        class="skill-item"
      >
        {{ skill.name }} | {{ skill.weight }}
      </li>
    </ul>
    <div class="text-center py-5">
      <h4>TOTAL: {{ totalSkillWeights() }}</h4>
    </div>
  </div>
</template>

<script>
// @todo #23:30m/DEV add validation for weight field (integer only)
// @todo #25:30m/DEV only show error when necessary, clear error error when resolved
//  can add an onchange or keyup handler to clear the error

// @todo #25:30m/DEV make skills removable when creating projects

// @todo #25:30m/DEV name and skill weight should be present before creating a skill
//  currently we can just click "create skill" and an empty skill will be added to
//  to the list!

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
      } else {
        this.error = '';
        this.$emit('update:skills', this.skills);
      }
    },
    totalSkillWeights() {
      const sumSkillWeights = (acc, cur) => parseInt(cur.weight, 10) + acc;
      return this.skills.reduce(sumSkillWeights, 0);
    },
    totalWeightsExceed100() {
      return this.totalSkillWeights() > 100;
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
