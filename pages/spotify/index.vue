<template>
  <div>
    <v-app-bar height="80" color="white">
      <v-spacer></v-spacer>
      <v-img
        contain
        max-height="80"
        max-width="150"
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png"
      ></v-img>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" xl="3">
          <div class="mt-7">
            <v-btn dark rounded block large class="my-2" depressed color="indigo darken-3">
              <v-icon left>mdi-facebook</v-icon>Continue with Facebook
            </v-btn>

            <v-btn dark color="black" rounded block large class="my-4" depressed>
              <v-icon left>mdi-apple</v-icon>Continue with Apple
            </v-btn>

            <v-btn color rounded outlined block large class="my-2" depressed>
              <v-icon left>mdi-google</v-icon>Continue with Google
            </v-btn>
          </div>

          <div class="separator my-5">OR</div>

          <label class="font-weight-bold">Email address or username</label>
          <v-text-field outlined dense placeholder="Email address or username" class="mt-1"></v-text-field>

          <label class="font-weight-bold">Password</label>
          <v-text-field outlined dense placeholder="Password" class="mt-1"></v-text-field>

          <a class="success--text">Forgot your password?</a>
          <v-row class="mt-5 mb-1">
            <v-col>
              <v-checkbox color="success darken-1" class="pa-0 ma-0" label="Remember me"></v-checkbox>
            </v-col>

            <v-col>
              <v-btn color="success darken-1" block rounded>Log-in</v-btn>
            </v-col>
          </v-row>

          <v-divider></v-divider>

          <h3 class="text-center my-5 font-weight-bold">Don't have an account?</h3>

          <v-btn color rounded outlined block large class="my-2" depressed>
            <v-icon left>mdi-spotify</v-icon>SIGN UP FOR SPOTIFY
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
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
.light-outlined .v-label {
  opacity: 1;
  font-size: 0.8em;
}

.separator {
  display: flex;
  align-items: center;
  text-align: center;
  color: #111111;
  font-weight: 700;
  opacity: 1;
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