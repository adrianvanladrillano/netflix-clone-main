<template>
  <div>
    <v-sheet elevation="8" width="98vw" color="transparent">
      <div :class="$vuetify.breakpoint.mobile ? '' : 'mx-15'">
        <a class="font-weight-medium white--text text-h6">{{title}}</a>
      </div>
      <v-slide-group class="mt-2">
        <v-slide-item v-for="(movie, index) in movies" :key="index" v-slot="{ active, toggle }">
          <v-card
            class="mx-1"
            :width="$vuetify.breakpoint.mobile ? 100 : 280"
            :input-value="active"
            active-class="purple white--text"
            @click="toggle;$emit('showDialog', index)"
          >
            <v-img
              :src="!$vuetify.breakpoint.mobile ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}` : `https://image.tmdb.org/t/p/w200/${movie.poster_path}`"
            ></v-img>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  props: ['title'],
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