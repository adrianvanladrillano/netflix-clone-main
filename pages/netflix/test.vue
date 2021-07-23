<template>
  <p v-if="movies.length == 0">Fetching mountains...</p>
  <p v-else>
    <span v-for="movie in movies" :key="movie">{{movie}}</span>
  </p>
</template>

<script>
import { mapState } from 'vuex'
export default {
  async fetch({ store }) {
    await store.dispatch('get_netflix')
  },
  data() {
    return {}
  },
  computed: {
    ...mapState({
      movies: state => {
        return state.movies
      }
    })
  }
}
</script>