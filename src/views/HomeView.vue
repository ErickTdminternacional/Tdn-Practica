<template>
  <div class="home">
    <BookPage />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import BookPage from '../modules/books/adapters/views/BookPage.vue'

export default Vue.extend({
  name: 'HomeView',
  components: {
    BookPage
  },
});
</script>
