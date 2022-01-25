<template>
  <main>{{ msg }}</main>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'TheTarot',
  data () {
    return {
      msg: '타로',
    };
  },
});
</script>
