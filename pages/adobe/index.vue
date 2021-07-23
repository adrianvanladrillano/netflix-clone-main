<template>
  <div>
    <div
      style="background-image: linear-gradient(rgb(0, 0, 0, 0.5),rgb(0, 0, 0, 0.5)), url('https://picsum.photos/1920/1080');width: 100vw;"
    >
      <v-row align="center" justify="center" style="height: 101vh">
        <v-col cols="12" xl="3" v-if="!$vuetify.breakpoint.mobile">
          <v-img width="40%" src="https://auth.services.adobe.com/img/generic/adobe_logo_white.svg"></v-img>
          <p class="white--text mt-2">Sign in or create an account</p>
        </v-col>
        <v-col cols="12" xl="3">
          <v-card flat class="pa-12">
            <div v-if="$vuetify.breakpoint.mobile">
              <v-img
                width="40%"
                src="https://auth.services.adobe.com/img/generic/adobe_logo_black.svg"
              ></v-img>
              <p class="mt-2">Sign in or create an account</p>
            </div>
            <h1 class="text-h4 font-weight-bold">Sign in</h1>
            <p class="my-4">
              New user?
              <a href>Create an account</a>
            </p>
            <v-text-field class="my-5" label="Email address/ Adobe ID"></v-text-field>

            <div class="d-flex">
              <v-spacer></v-spacer>
              <v-btn
                small
                color="primary"
                style="text-transform: none"
                dark
                rounded
                depressed
              >Continue</v-btn>
            </div>
            <div class="separator my-5">OR</div>

            <div>
              <v-btn
                style="text-transform: none"
                rounded
                outlined
                block
                large
                class="my-2"
                depressed
              >
                <v-icon left>mdi-google</v-icon>Continue with Google
              </v-btn>

              <v-btn
                style="text-transform: none"
                dark
                rounded
                block
                large
                class="my-4"
                depressed
                color="indigo darken-3"
              >
                <v-icon left>mdi-facebook</v-icon>Continue with Facebook
              </v-btn>

              <v-btn
                style="text-transform: none"
                dark
                color="black"
                rounded
                block
                large
                class="my-2"
                depressed
              >
                <v-icon left>mdi-apple</v-icon>Continue with Apple
              </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>
<style>
.separator {
  display: flex;
  align-items: center;
  text-align: center;
  color: #111111;
  font-weight: 700;
  opacity: 0.6;
  font-size: 0.8em;
}

.separator::before,
.separator::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid #e1e1e1;
}

.separator:not(:empty)::before {
  margin-right: 0.25em;
}

.separator:not(:empty)::after {
  margin-left: 0.25em;
}
</style>