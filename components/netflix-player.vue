<template>
  <div>
    {{loadID}}
    <youtube resize fitParent :video-id="viewID" :player-vars="playerVars" @playing="playing"></youtube>
  </div>
</template>
<script>
import axios from 'axios'
import { Youtube } from 'vue-youtube'
export default {
  components: {
    Youtube
  },
  props: ['videoId'],
  data() {
    return {
      viewID: '',
      playerVars: {
        autoplay: 1,
        controls: 0
      }
    }
  },
  computed: {
    loadID() {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${this.videoId}/videos?api_key=2cba07250c68ac124f41fc4eb8d617b8&language=en-US`
        )
        .then(res => {
          this.viewID = res.data.results[0].key
        })
        .catch(err => {
          console.error(err)
        })
    }
  },
  mounted() {},

  methods: {
    playing() {
      console.log('o/ we are watching!!!')
    }
  }
}
</script>
