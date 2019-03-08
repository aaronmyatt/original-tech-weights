<template>
  <div>
    <form action="">
      <label for="project-name-field">Project Name</label>
      <input id="project-name-field" type="text" v-model="name">

      <label for="project-year-field">Project Year</label>
      <select id="project-year-field" v-model="year">
        <option :key="year" :value="year" v-for="year in years"> {{ year }} </option>
      </select>

      <label for="project-status-field">Project Status</label>
      <select id="project-status-field" v-model="status">
        <option :key="status" :value="status" v-for="status in statusChoices"> {{ status }} </option>
      </select>

      <SkillList @new-skill-added="updateSkills"/>
    </form>
    <button @click="createProject" class="create-project-button">Create Project</button>
  </div>
</template>

<script>

  import SkillList from './SkillList.vue';

  export default {
  name: 'ProjectBuilder',
  components: { SkillList },
  props: {},
  data: () => ({
    name: '',
    year: new Date().getFullYear(),
    status: 'Complete',
    statusChoices: [
      'Complete',
      'In Progress',
      'Retired'
    ],
    skills: [],
  }),
  methods: {
    createProject() {
      this.$emit('create-project', this.project);
    },
    updateSkills(skills) {
      this.skills = skills;
    },
  },
  computed: {
    project() {
      return {
        name: this.name,
        year: this.year,
        status: this.status,
        skills: this.skills,
      };
    },
    years() {
      const years = [];
      const now = new Date();
      const currentYear = now.getFullYear();
      for (let year = 1900; year !== currentYear + 1; year += 1) {
        years.unshift(year);
      }
      return years;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
