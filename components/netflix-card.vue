<template>
  <v-card>
    <iframe
      v-if="!$vuetify.breakpoint.mobile"
      style="width: 100%;height: 180px"
      src="https://www.youtube.com/embed/6ZfuNTqbHE8?autoplay=0&mute=1&controls=0"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <v-container>
      <v-row class>
        <v-col>
          <v-list-item two-line class="px-0">
            <v-list-item-content>
              <v-list-item-title class="font-weight-bold green--text">98% Match</v-list-item-title>
              <v-list-item-subtitle>
                <v-chip outlined small label class="mr-2">13+</v-chip>
                <span class="mr-2">2021</span>
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn fab outlined small>
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
          <p
            class="body-2 grey--text text--lighten-2"
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, ipsa sequi, eius quae ipsum delectus consectetur iste dolorem eligendi!</p>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>