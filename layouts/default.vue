<template>
  <v-app light>
    <v-container>
      <Nuxt />
    </v-container>
    <v-footer absolute app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'DefaultLayout',
});
</script>
