<template>
  <div>
    <v-row
      :align="$vuetify.breakpoint.mobile ? '' : 'center'"
      justify="center"
      style="height: 98vh"
    >
      <v-col cols="12" xl="3">
        <v-card
          class="pa-12"
          :flat="$vuetify.breakpoint.mobile ? true : false"
          :outlined="$vuetify.breakpoint.mobile ? false : true"
        >
          <div align="center">
            <v-img
              width="20%"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
            ></v-img>
          </div>

          <div class="text-center my-5">
            <h2 class="font-weight-regular">Sign in</h2>
            <p class="text-center">User your Google Account</p>
          </div>

          <v-text-field
            hide-details
            outlined
            label="Email or phone"
            clearable
            v-model="username"
            required
            class="mb-2"
          ></v-text-field>

          <a class="font-weight-medium" style="font-size: .9em;">Forgot email?</a>

          <p class="my-10" style="font-size: .9em;">
            Not your computer? Use Guest mode to sign in privately.
            <span
              class="primary--text"
            >Learn more.</span>
          </p>

          <v-row class="d-flex justify-space-between mb-7">
            <v-btn text color="primary" style="text-transform: none">Create Account</v-btn>

            <v-btn color="primary" style="text-transform: none" class="px-7">Next</v-btn>
          </v-row>
        </v-card>

        <v-card-actions v-if="!$vuetify.breakpoint.mobile">
          <v-row class="mt-5">
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  small
                  text
                  v-bind="attrs"
                  v-on="on"
                  style="text-transform: none"
                  class="text--secondary"
                >
                  English (United states)
                  <v-icon>mdi-chevron-down</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item v-for="(item, index) in items" :key="index">
                  <v-list-item-title>{{ item }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>

            <v-spacer></v-spacer>

            <v-btn small text style="text-transform: none">Help</v-btn>
            <v-btn small text style="text-transform: none">Privacy</v-btn>
            <v-btn small text style="text-transform: none">Terms</v-btn>
          </v-row>
        </v-card-actions>
      </v-col>
    </v-row>
    <v-footer>asd</v-footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showpass: false,
      errors: [],
      username: null,
      password: null,
      loader: false
    }
  },
  methods: {
    validate() {
      this.errors = []
      this.loader = true

      if (!this.username) {
        this.errors.push('Username is required.')
      } else if (!this.password) {
        this.errors.push('Password is required.')
      } else if (this.username.length < 5 || this.password.length < 5) {
        this.errors.push('Username/Password must be atleast 5 characters.')
      }
      this.loader = false
    },
    submit() {
      this.$v.$touch()
    },
    clear() {
      this.$v.$reset()
      this.name = ''
      this.username = ''
      this.select = null
      this.checkbox = false
    }
  }
}
</script>

<style>
</style>