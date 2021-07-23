<template>
  <div>
    <v-app-bar app hide-on-scroll color="transparent">
      <v-img
        class="mr-10"
        contain
        :max-width="$vuetify.breakpoint.mobile ? '20': '100'"
        :src="$vuetify.breakpoint.mobile ? 'https://pngimg.com/uploads/netflix/netflix_PNG15.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png'"
      ></v-img>
      <div v-if="!$vuetify.breakpoint.mobile">
        <v-btn dark style="text-transform: none" text>Home</v-btn>
        <v-btn dark style="text-transform: none" text>TV Shows</v-btn>
        <v-btn dark style="text-transform: none" text>Movies</v-btn>
        <v-btn dark style="text-transform: none" text>New & Popular</v-btn>
        <v-btn style="text-transform: none" text>My List</v-btn>
      </div>
      <v-spacer></v-spacer>
      <v-btn dark icon style="text-transform: none">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn dark style="text-transform: none" text>Kids</v-btn>
      <v-btn dark icon style="text-transform: none">
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-avatar tile class="py-5" width="15">
        <v-img
          src="https://media1.tenor.com/images/384310fce352683d54987b1304c8a0b4/tenor.gif?itemid=14797267"
        ></v-img>
      </v-avatar>

      <template v-slot:extension v-if="$vuetify.breakpoint.mobile">
        <v-btn dark style="text-transform: none" text>TV Shows</v-btn>
        <v-spacer></v-spacer>
        <v-btn dark style="text-transform: none" text>Movies</v-btn>
        <v-spacer></v-spacer>
        <v-btn dark style="text-transform: none" text>My List</v-btn>
      </template>
    </v-app-bar>
  </div>
</template>