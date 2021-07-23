<template>
  <div style="background: black;color: white;">
    <netflix-nav type="back" title="Profiles & More" />

    <v-container class="px-5">
      <v-row>
        <v-col cols="3" v-for="i in 4" :key="i" align="center">
          <v-card>
            <v-img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"></v-img>
          </v-card>
          <span style="font-size: .7em" class="grey--text lighten-2">name</span>
        </v-col>
      </v-row>

      <v-btn block class="text-capitalize font-weight-regular" text dark>
        <v-icon left>mdi-pencil</v-icon>Manage Profile
      </v-btn>
    </v-container>

    <v-card dark style>
      <v-card-title class="font-weight-medium">
        <v-icon left>mdi-message</v-icon>Tell friends about Netflix.
      </v-card-title>
      <v-card-text style="font-size: .7em;">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum perspiciatis aut architecto debitis.
        <br />
        <a>Terms & Conditions</a>
        <v-text-field outlined dense value="asdasd"></v-text-field>
        <v-row dense>
          <v-col align="center">
            <v-btn icon>
              <v-icon>mdi-facebook-messenger</v-icon>
            </v-btn>
            <span>Messenger</span>
          </v-col>
          <v-col align="center">
            <v-btn icon>
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
            <span>Facebook</span>
          </v-col>
          <v-col align="center">
            <v-btn icon>
              <v-icon>mdi-gmail</v-icon>
            </v-btn>
            <span class="px-5">Gmail</span>
          </v-col>
          <v-col align="center">
            <v-btn icon>
              <v-icon>mdi-dots-horizontal</v-icon>
            </v-btn>
            <span class="px-5">More</span>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <v-list color="black" dark>
      <v-list-item link router to="/netflix/my-list">
        <v-list-item-content>
          <v-list-item-title class="grey--text lighten-2 body-2">
            <v-icon left>mdi-check</v-icon>My List
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>

      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="grey--text lighten-2 body-2">App Settings</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="grey--text lighten-2 body-2">Account</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="grey--text lighten-2 body-2">Help</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="grey--text lighten-2 body-2">Sign-out</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

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