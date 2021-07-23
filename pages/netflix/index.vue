<template>
  <div>
    <div
      style="background-image: linear-gradient(rgb(0, 0, 0, 0.5),rgb(0, 0, 0, 0.5)), url('https://assets.nflxext.com/ffe/siteui/vlv3/b8e09d9c-d1e7-4800-afd9-810e41ace684/76604e6d-7996-4834-bda0-bbae48357f02/PH-en-20210607-popsignuptwoweeks-perspective_alpha_website_large.jpg');width: 100vw;"
    >
      <v-app-bar color="transparent" flat>
        <v-spacer></v-spacer>
        <v-img
          contain
          max-height="80"
          max-width="170"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
        ></v-img>
        <v-spacer></v-spacer>
      </v-app-bar>

      <v-container>
        <v-row
          justify="center"
          style="height: 100vh;"
          :class="$vuetify.breakpoint.mobile ? '': 'mt-10'"
        >
          <v-col cols="12" xl="3">
            <v-card
              dark
              class="pa-15"
              style="background-color: rgba(0, 0, 0, 0.75); /* Transparent Yellow */"
            >
              <h1 class="mb-5">Sign in</h1>
              <v-text-field
                background-color="grey darken-3"
                outlined
                placeholder="Email or phone number"
              ></v-text-field>
              <v-text-field background-color="grey  darken-3" outlined placeholder="Password"></v-text-field>
              <v-btn color="red accent-4" block large router to="/netflix/app">Sign in</v-btn>

              <div class="my-5" style="font-size: .9em">
                <span class="float-right">Need help?</span>
                <v-checkbox class="pa-0 ma-0" label="Remember me"></v-checkbox>
              </div>

              <v-btn small dark depressed block style="text-transform: none">
                <v-icon left>mdi-facebook</v-icon>Continue with Facebook
              </v-btn>

              <div class="mt-5">
                <p style="font-size: 1em;opacity: 1">
                  <span style="opacity: .4">New to Netflix?</span>
                  Sign up now
                </p>
                <p style="font-size: .9em;opacity: 1;" class="primary--text">
                  <span
                    style="opacity: .4;color: white"
                  >This page is protected by Google reCAPTCHA to ensure you're not a bot.</span> Learn more.
                </p>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  async fetch({ store }) {
    await store.dispatch('get_netflix')
  },
  data() {
    return {}
  }
}
</script>