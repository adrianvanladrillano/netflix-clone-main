<template>
  <div>
    <v-bottom-navigation
      app
      v-if="$vuetify.breakpoint.mobile"
      background-color="#141414"
      grow
      v-model="value"
      style="z-index: 999;font-weight: 500;font-size: .7em"
      dark
    >
      <v-btn value="recent" style="font-weight: 400;font-size: .8em" router to="/netflix/app">
        <span>Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn value="recent" style="font-weight: 400;font-size: .8em" router to="/netflix/watch/1">
        <span>Play Something</span>
        <v-icon>mdi-shuffle-variant</v-icon>
      </v-btn>

      <v-btn
        value="recent"
        style="font-weight: 400;font-size: .8em"
        router
        to="/netflix/coming-soon"
      >
        <span>Coming Soon</span>
        <v-icon>mdi-filmstrip-box-multiple</v-icon>
      </v-btn>

      <v-btn value="recent" style="font-weight: 400;font-size: .8em" router to="/netflix/downloads">
        <span>Downloads</span>
        <v-icon>mdi-download-circle-outline</v-icon>
      </v-btn>
    </v-bottom-navigation>
    <v-footer dark v-if="!$vuetify.breakpoint.mobile">
      <v-card flat tile class="black lighten-1 white--text text-center py-15">
        <v-card-text>
          <v-btn class="mx-4 white--text" icon>
            <v-icon size="24px"></v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text
          class="white--text pt-0"
        >In the film, the Avengers and the Guardians of the Galaxy attempt to prevent Thanos from collecting the six all-powerful Infinity Stones as part of his quest to kill half of all life in the universe. The film was announced in October 2014 as Avengers: Infinity War – Part 1.</v-card-text>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} —
          <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>