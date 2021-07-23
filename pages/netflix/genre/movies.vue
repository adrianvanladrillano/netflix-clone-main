<template>
  <div style="background:black;color: white">
    <netflix-nav v-if="!$vuetify.breakpoint.mobile" />
    <v-app-bar v-if="$vuetify.breakpoint.mobile" hide-on-scroll color="transparent" flat dark>
      <v-btn icon>
        <v-icon color="white">mdi-arrow-left</v-icon>
      </v-btn>
      <v-app-bar-title class="font-weight-medium">Movies</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn dark icon style="text-transform: none">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-avatar tile width="38" height="38">
        <v-img
          contain
          style="height: 100%"
          src="https://i.pinimg.com/564x/1a/4e/46/1a4e46e64b47fa2925c083c805490b0d.jpg"
        ></v-img>
      </v-avatar>
      <template v-slot:extension v-if="$vuetify.breakpoint.mobile">
        <v-btn
          dark
          style="text-transform: none;"
          class="mr-2"
          x-small
          text
          router
          to="/netflix/genre/tv-shows"
        >
          TV Shows
          <v-icon right>mdi-chevron-down</v-icon>
        </v-btn>
        <v-btn dark style="text-transform: none;" x-small text router to="/netflix/genre/movies">
          Movies
          <v-icon right>mdi-chevron-down</v-icon>
        </v-btn>
      </template>
    </v-app-bar>
    <v-row>
      <v-col>
        <v-row
          align="center"
          justify="center"
          style="height: 100vh;position:absolute;"
          v-if="!$vuetify.breakpoint.mobile"
        >
          <v-col class="px-15">
            <v-card color="transparent" style="width: 20vw" flat>
              <v-img
                src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersinfinitywar_lob_log_03.png"
              ></v-img>
              <div class="mt-10">
                <v-btn x-large class="px-10 mr-5">
                  <v-icon left>mdi-play</v-icon>Play
                </v-btn>
                <v-btn @click="onDialog()" x-large class="px-10" color="grey lighten-1">
                  <v-icon left>mdi-play</v-icon>More Info
                </v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>

        <iframe
          v-if="!$vuetify.breakpoint.mobile"
          style="width: 100%;height: 90vh"
          src="https://www.youtube.com/embed/6ZfuNTqbHE8?autoplay=1&mute=1&controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <!-- Mobile -->
        <v-row v-if="$vuetify.breakpoint.mobile">
          <v-col>
            <v-img style="height: 50vh" src="https://cdn.wallpapersafari.com/2/30/S1OntZ.jpg"></v-img>

            <v-card dark style="margin-top: -150px" color="transparent" align="center">
              <v-img
                width="60vw"
                src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersinfinitywar_lob_log_03.png"
              ></v-img>
              <v-row justify="center" align="center">
                <v-col cols="4" align="center" justify="center">
                  <v-btn icon>
                    <v-icon color="white">mdi-plus</v-icon>
                  </v-btn>
                  <p style="font-size: .6em;">My List</p>
                </v-col>
                <v-col cols="4">
                  <v-btn color="white" class="black--text text-capitalize">
                    <v-icon left>mdi-play</v-icon>Play
                  </v-btn>
                </v-col>
                <v-col cols="4">
                  <v-btn icon @click="dialogView = true">
                    <v-icon color="white">mdi-information-outline</v-icon>
                  </v-btn>
                  <p style="font-size: .6em;">More Info</p>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>

        <v-container :class="$vuetify.breakpoint.mobile ? 'mx-2 mt-5' : 'mx-10'">
          <v-row :style="$vuetify.breakpoint.mobile ? '' : 'margin-top: -150px'">
            <netflix-cards title="Popular on Netflix" style="z-index: 99" />
          </v-row>

          <v-row class="mt-15">
            <netflix-cards title="Trending Now" style="z-index: 99" />
          </v-row>

          <v-row class="mt-15">
            <netflix-top style="z-index: 99" />
          </v-row>

          <v-row class="mt-15">
            <netflix-cards title="Continue watching for Username" style="z-index: 99" />
          </v-row>

          <v-row class="mt-15">
            <netflix-cards title="US TV Shows" style="z-index: 99" />
          </v-row>

          <v-row class="mt-15">
            <netflix-only style="z-index: 99" />
          </v-row>

          <v-row class="mt-15">
            <netflix-cards title="Something" style="z-index: 99" />
          </v-row>

          <v-row class="mt-15">
            <netflix-cards title="Something" style="z-index: 99" />
          </v-row>
        </v-container>
      </v-col>
    </v-row>

    <!-- More info dialog -->
    <v-bottom-sheet
      style="z-index: 99999"
      app
      v-model="dialogView"
      v-if="$vuetify.breakpoint.mobile"
    >
      <v-card color="black" dark class="px-4 py-4">
        <v-row dense>
          <v-col cols="4">
            <v-img
              contain
              style="width: 100%;height: 100%"
              src="https://m.media-amazon.com/images/M/MV5BZTliNWJhM2YtNDc1MC00YTk1LWE2MGYtZmE4M2Y5ODdlNzQzXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_.jpg"
            ></v-img>
          </v-col>
          <v-col cols="8">
            <v-list-item two-line class="px-0">
              <v-list-item-content>
                <v-list-item-title class="font-weight-bold">US</v-list-item-title>
                <v-list-item-subtitle style="font-size: .7em">
                  <span class="mr-2">2019</span>
                  <span class="mr-2">
                    <v-chip x-small label outlined>18+</v-chip>
                  </span>
                  <span>3 Seasons</span>
                </v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-btn fab small @click="dialogView = false">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>

            <p
              style="font-size: .7em"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur explicabo, quaerat ex expedita, architecto ullam perferendis accusamus eum vitae dolores quisquam quia repellat error nemo voluptates? Quam doloremque quis eligendi!</p>
          </v-col>
        </v-row>

        <v-row align="center" justify="center" no-gutters>
          <v-col>
            <v-btn block light>
              <v-icon left>mdi-play</v-icon>Play
            </v-btn>
          </v-col>

          <v-col cols="3" align="center">
            <v-btn icon @click="dialogView = true">
              <v-icon color="white">mdi-download</v-icon>
            </v-btn>
            <p style="font-size: .5em;">Download</p>
          </v-col>

          <v-col cols="3" align="center">
            <v-btn icon @click="dialogView = true">
              <v-icon color="white">mdi-play</v-icon>
            </v-btn>
            <p style="font-size: .5em;">Preview</p>
          </v-col>
        </v-row>

        <v-row no-gutters>
          <v-col>
            <v-list-item class="px-0" link router to="/netflix/watch">
              <v-list-item-avatar>
                <v-icon color="white">mdi-information-outline</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="body-2 font-weight-regular">Episodes & Info</v-list-item-title>
              </v-list-item-content>

              <v-list-item-action>
                <v-btn fab x-small @click="dialogView = false">
                  <v-icon>mdi-arrow-right</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-col>
        </v-row>
      </v-card>
    </v-bottom-sheet>

    <v-dialog v-model="dialogView" width="1000" v-if="!$vuetify.breakpoint.mobile">
      <v-card color="black" dark>
        <div style="height: 50vh;">
          <v-row justify="center" style="position:absolute;" v-if="!$vuetify.breakpoint.mobile">
            <v-col class="px-15">
              <v-card color="transparent" style="width: 80%" flat>
                <v-img
                  src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersinfinitywar_lob_log_03.png"
                ></v-img>
                <div class="mt-5">
                  <v-btn class="px-10 mr-5">
                    <v-icon left>mdi-play</v-icon>Play
                  </v-btn>
                  <v-btn @click="onDialog()" dark fab small class="mx-1">
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>

                  <v-btn @click="onDialog()" dark fab small class="mx-1">
                    <v-icon>mdi-thumb-up</v-icon>
                  </v-btn>

                  <v-btn @click="onDialog()" dark fab small class="mx-1">
                    <v-icon>mdi-thumb-down</v-icon>
                  </v-btn>
                </div>
              </v-card>
            </v-col>
          </v-row>

          <iframe
            v-if="!$vuetify.breakpoint.mobile"
            style="width: 100%;height: 50vh"
            src="https://www.youtube.com/embed/6ZfuNTqbHE8?autoplay=1&mute=1&controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <v-container class="pa-10">
          <v-row>
            <v-col cols="8">
              <p>
                <span class="mr-2">NEW</span>
                <span class="mr-2">2021</span>
                <v-chip outlined small label class="mr-2">13+</v-chip>
                <span class="mr-2">2h 16m</span>
                <v-chip outlined small label>HD</v-chip>
              </p>
              <p>In the film, the Avengers and the Guardians of the Galaxy attempt to prevent Thanos from collecting the six all-powerful Infinity Stones as part of his quest to kill half of all life in the universe. The film was announced in October 2014 as Avengers: Infinity War – Part 1.</p>
            </v-col>

            <v-col cols="4" style="font-size: .9em">
              <p class="grey--text text--darken-1">
                Cast:
                <span
                  class="white--text"
                >Adrian Van Ladrillano, Kenn Yvan Español, CJ Buenaventura, more.</span>
              </p>
              <p class="grey--text text--darken-1">
                Genres:
                <span class="white--text">Superhero, Sci-fi</span>
              </p>
              <p class="grey--text text--darken-1">
                This movie is:
                <span class="white--text">Superhero, Sci-fi</span>
              </p>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="4" v-for="i in 9" :key="i">
              <netflix-card />
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
    <v-overlay opacity=".9" v-model="dialogType" align="center">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>All</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>TV Shows</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Movies</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>My List</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-spacer></v-spacer>
      <v-btn fab light @click="dialogType = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-overlay>

    <v-overlay opacity=".9" v-model="dialogGenre" align="center">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>All Genres</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item v-for="i in 50" :key="i">
        <v-list-item-content>
          <v-list-item-title>Action</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-spacer></v-spacer>
      <v-btn fab light @click="dialogType = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-overlay>

    <netflix-footer />
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogView: false,
      dialogType: false,
      dialogGenre: false
    }
  },
  methods: {
    onDialog() {
      this.dialogView = true
    }
  }
}
</script>
<style>
.v-sheet {
  background: black;
}
</style>