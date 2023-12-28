<template>
    <div class="row">
      <div class="col-sm-12">
        <h1>Users Area</h1>
        <div v-if="userData">
          <!-- Afficher les données ici -->
          <ul>
            <li v-for="value in userData">
               {{value.email}}
            </li>
          </ul>
        </div>
        <div v-else>
          Aucune donnée utilisateur disponible.
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UsersView',
    data() {
      return {
        userData: [],
      };
    },
    mounted() {
        const userDataString = this.$route.query.userData;
  if (userDataString) {
    this.userData = JSON.parse(userDataString);
    console.log(this.userData);
  }
    },
  };
  </script>
  