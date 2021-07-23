<template>
  <div>
    <v-sheet elevation="8" width="98vw" color="transparent">
      <div :class="$vuetify.breakpoint.mobile ? '' : 'mx-15'">
        <a class="font-weight-medium white--text text-h6">Top 10 in the Philippines Today</a>
      </div>
      <v-slide-group class="mt-2">
        <v-slide-item v-for="n in 10" :key="n" v-slot="{ active, toggle }">
          <div style="position: relative">
            <v-card
              class="mx-1"
              :width="$vuetify.breakpoint.mobile ? 100 : 280"
              :input-value="active"
              @click="toggle"
              flat
              color="transparent"
            >
              <v-img
                src="https://i.pinimg.com/originals/42/8f/1c/428f1c6eb0e1c8ff7889d6f7b147ed15.jpg"
              ></v-img>
            </v-card>
            <div style="position: absolute;bottom: 0px;left: 0px;">
              <h1 class="white--text">{{n}}</h1>
            </div>
          </div>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>