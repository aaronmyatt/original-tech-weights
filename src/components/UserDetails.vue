<template>
  <div class="card">
    <ul class="user-details list-group list-group-flush">
      <li class="user-name list-group-item">
        {{ userName }}
      </li>
      <li class="user-email list-group-item">
        {{ email }}
      </li>
      <li class="user-github list-group-item">
        {{ githubProfileUrl }}
      </li>
      <li class="user-linkedin list-group-item">
        {{ linkedinProfileUrl }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'UserDetails',
  props: ['userName',
    'email',
    'githubProfileUrl',
    'linkedinProfileUrl',
  ],
};
</script>

<style scoped>
</style>
