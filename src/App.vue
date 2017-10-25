<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
<div id="app">
  <section class="container-fluid">

    <Brand :brandName="getBrandName()" />
    <img src="./assets/logo.png">
    <UserDetails v-bind="getUserDetails()" />

  </section>

  <br/>

  <section class="container-fluid">

    <ProjectList :projectList="getProjectList()" />

  </section>


</div>
</template>

<script>

import projectDetails from './data/ProjectDetails';
import Brand from './components/Brand';
import UserDetails from './components/UserDetails';
import ProjectList from './components/ProjectList';

export default {
  name: 'app',
  components: {
    Brand,
    UserDetails,
    ProjectList,
  },
  methods: {
    getBrandName() {
      return projectDetails.projectDetails().brandName;
    },
    getUserDetails() {
      return projectDetails.projectDetails().userDetails;
    },
    getProjectList() {
      return projectDetails.projectDetails().projectList;
    },
  },
};
</script>
