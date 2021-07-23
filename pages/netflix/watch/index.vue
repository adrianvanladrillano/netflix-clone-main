<template>
  <div style="background:black;color: white">
    <netflix-nav v-if="!$vuetify.breakpoint.mobile" />
    <v-app-bar v-if="$vuetify.breakpoint.mobile" hide-on-scroll color="transparent" flat dark>
      <v-btn icon>
        <v-icon color="white">mdi-arrow-left</v-icon>
      </v-btn>
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
    </v-app-bar>
    <iframe
      v-if="$vuetify.breakpoint.mobile"
      style="width: 100%;height: 25vh"
      src="https://www.youtube.com/embed/6ZfuNTqbHE8?autoplay=1&mute=1&controls=0"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <v-container>
      <v-row>
        <v-col>
          <p class="font-weight-bold text-h5">Avengers Infinity War</p>
          <p style="font-size: .7em">
            <span class="green--text mr-2">96% Match</span>
            <span class="mr-2">2021</span>
            <v-chip color="white" outlined x-small label class="mr-2">13+</v-chip>
            <span class="mr-2">2h 16m</span>
            <v-chip color="white" outlined x-small label>HD</v-chip>
          </p>

          <v-btn block class="text-capitalize">
            <v-icon left>mdi-play</v-icon>Play
          </v-btn>
          <v-btn block class="text-capitalize mt-2" dark>
            <v-icon left>mdi-download</v-icon>Download
          </v-btn>

          <p
            class="mt-4"
            style="font-size: .7em"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur explicabo, quaerat ex expedita, architecto ullam perferendis accusamus eum vitae dolores quisquam quia repellat error nemo voluptates? Quam doloremque quis eligendi!</p>

          <p class="mt-4" style="font-size: .7em">
            Cast:
            <span
              class="grey--text text-lighten-2"
            >Adrian Van Ladrillano, Kenn Yvan Español, CJ Buenaventura, more.</span>
            <br />Creator:
            <span class="grey--text text-lighten-2">Adrian Van Ladrillano</span>
          </p>
        </v-col>
      </v-row>

      <v-row no-gutters>
        <v-col align="center">
          <v-btn icon @click="dialogView = true">
            <v-icon color="white">mdi-plus</v-icon>
          </v-btn>
          <p style="font-size: .8em;">My List</p>
        </v-col>

        <v-col align="center">
          <v-btn icon @click="dialogView = true">
            <v-icon color="white">mdi-thumb-up-outline</v-icon>
          </v-btn>
          <p style="font-size: .8em;">Rate</p>
        </v-col>

        <v-col align="center">
          <v-btn icon>
            <v-icon color="white">mdi-share</v-icon>
          </v-btn>
          <p style="font-size: .8em;">Share</p>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col>
          <v-tabs fixed-tabs background-color="black" dark>
            <v-tab class="text-capitalize">Episodes</v-tab>
            <v-tab class="text-capitalize">More like this</v-tab>

            <v-tab-item>
              <v-card color="black" dark>
                <v-row no-gutters v-for="i in 16" :key="i">
                  <v-col cols="4">
                    <iframe
                      style="width:100%;height:100px"
                      src="https://www.youtube.com/embed/6ZfuNTqbHE8?autoplay=1&mute=1&controls=0"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </v-col>
                  <v-col cols="8" class="d-flex flex-column pa-2">
                    <v-spacer></v-spacer>
                    <v-list-item two-line class="px-0 py-0">
                      <v-list-item-content>
                        <v-list-item-title class="font-weight-bold body-2">Episode {{i}}</v-list-item-title>
                        <v-list-item-subtitle style="font-size: .7em">
                          <span class="mr-2">42m</span>
                        </v-list-item-subtitle>
                      </v-list-item-content>

                      <v-list-item-action>
                        <v-btn large icon small @click="dialogView = false">
                          <v-icon>mdi-download</v-icon>
                        </v-btn>
                      </v-list-item-action>
                    </v-list-item>
                    <v-spacer></v-spacer>
                  </v-col>
                </v-row>
              </v-card>
            </v-tab-item>

            <v-tab-item>
              <v-card color="black">
                <v-row dense>
                  <v-col v-for="i in 12" :key="i" cols="4" xl="2" class="pa-1">
                    <netflix-vertical />
                  </v-col>
                </v-row>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </v-col>
      </v-row>
    </v-container>

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