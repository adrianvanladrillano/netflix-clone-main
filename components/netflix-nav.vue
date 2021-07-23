<template>
  <div>
    <v-app-bar app hide-on-scroll :color="type=='main' ? ' transparent' : 'black'" flat>
      <v-img
        v-if="type == 'main'"
        class="mr-10"
        contain
        :max-width="$vuetify.breakpoint.mobile ? '20': '100'"
        :src="$vuetify.breakpoint.mobile ? 'https://pngimg.com/uploads/netflix/netflix_PNG15.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png'"
      ></v-img>

      <v-btn icon v-if="type == 'back'">
        <v-icon color="white">mdi-arrow-left</v-icon>
      </v-btn>
      <v-app-bar-title
        class="white--text font-weight-medium"
        v-if="type == 'sub' || type=='back'"
      >{{title}}</v-app-bar-title>

      <div v-if="!$vuetify.breakpoint.mobile">
        <v-btn dark style="text-transform: none" text router to="/netflix/app">Home</v-btn>
        <v-btn dark style="text-transform: none" text router to="/netflix/genre/tv-shows">TV Shows</v-btn>
        <v-btn dark style="text-transform: none" text router to="/netflix/genre/tv-shows">Movies</v-btn>
        <v-btn dark style="text-transform: none" text router to="/netflix/my-list">My List</v-btn>
      </div>
      <v-spacer></v-spacer>
      <v-btn dark icon style="text-transform: none">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <div v-if="!$vuetify.breakpoint.mobile">
        <v-btn dark style="text-transform: none" text>Kids</v-btn>
        <v-btn dark icon style="text-transform: none">
          <v-icon>mdi-bell</v-icon>
        </v-btn>
      </div>

      <v-avatar tile width="30" height="30" @click="$router.push('/netflix/settings')">
        <v-img
          contain
          style="height: 100%"
          src="https://i.pinimg.com/564x/1a/4e/46/1a4e46e64b47fa2925c083c805490b0d.jpg"
        ></v-img>
      </v-avatar>

      <template v-slot:extension v-if="$vuetify.breakpoint.mobile && type=='main'">
        <v-btn
          dark
          class="text-capitalize font-weight-regular"
          text
          router
          to="/netflix/app/movies"
        >TV Shows</v-btn>
        <v-spacer></v-spacer>
        <v-btn
          dark
          class="text-capitalize font-weight-regular"
          text
          router
          to="/netflix/app/movies"
        >Movies</v-btn>
        <v-spacer></v-spacer>
        <v-btn
          dark
          class="text-capitalize font-weight-regular"
          text
          router
          to="/netflix/my-list"
        >My List</v-btn>
      </template>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  props: ['type', 'title'],
  data() {
    return {}
  }
}
</script>