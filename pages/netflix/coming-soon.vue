<template>
  <div style="background:black;color: white">
    <netflix-nav type="sub" title="Coming soon" />
    <v-list-item color="black" link class="py-2">
      <v-list-item-icon>
        <v-icon color="white">mdi-bell-outline</v-icon>
      </v-list-item-icon>
      <v-list-item-content class="white--text">
        <v-list-item-title class="body-2">Notifications</v-list-item-title>
      </v-list-item-content>
      <v-list-item-icon>
        <v-icon color="white">mdi-chevron-right</v-icon>
      </v-list-item-icon>
    </v-list-item>
    <v-row dense v-for="i in 12" :key="i" cols="4" xl="2">
      <v-col>
        <v-card color="black" dark class>
          <iframe
            style="width: 100%;height: 25vh"
            src="https://www.youtube.com/embed/6ZfuNTqbHE8?autoplay=1&mute=1&controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <v-container>
            <v-row align="center" justify="space-between" no-gutters>
              <v-col cols="6">
                <v-img
                  src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersinfinitywar_lob_log_03.png"
                ></v-img>
              </v-col>

              <v-col cols="2" align="center">
                <v-btn icon @click="dialogView = true">
                  <v-icon color="white">mdi-bell</v-icon>
                </v-btn>
                <p style="font-size: .5em;">Remind me</p>
              </v-col>

              <v-col cols="2" align="center">
                <v-btn icon router to="/netflix/watch">
                  <v-icon color="white">mdi-information-outline</v-icon>
                </v-btn>
                <p style="font-size: .5em;">Info</p>
              </v-col>
            </v-row>
            <v-list-item two-line class="px-0">
              <v-list-item-content>
                <v-list-item-subtitle style="font-size: .7em">
                  <span class="mr-2">Coming Friday</span>
                </v-list-item-subtitle>
                <v-list-item-title class="font-weight-bold">Avengers: Infinity War</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <p
              style="font-size: .7em"
              class="grey--text lighten-2"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur explicabo, quaerat ex expedita, architecto ullam perferendis accusamus.</p>
            <p style="font-size: .7em">
              <span>
                Gruesome
                <span class="green--text px-1">•</span>
              </span>
              <span>
                Gory
                <span class="green--text px-1">•</span>
              </span>
              <span>
                Violent
                <span class="green--text px-1">•</span>
              </span>
              <span>
                Thriller
                <span class="green--text px-1">•</span>
              </span>
              <span>
                Horror
                <span class="green--text px-1">•</span>
              </span>
              <span>Suspense</span>
            </p>
          </v-container>
        </v-card>
      </v-col>
    </v-row>

    <netflix-footer />
  </div>
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>