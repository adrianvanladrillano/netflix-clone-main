<template>
  <div>
    <v-container class="px-5">
      <v-row align="center" justify="center">
        <v-col cols="12" xl="3">
          <v-icon size="54" color="light-blue darken-1" class="py-5">mdi-twitter</v-icon>

          <v-card flat>
            <h1 class="text-h4 font-weight-bold my-7">Log in to Twitter</h1>
            <v-text-field outlined label="Phone, email, or username"></v-text-field>
            <v-text-field outlined label="Password"></v-text-field>

            <v-btn
              class="mt-2"
              color="light-blue darken-1"
              style="text-transform: none"
              dark
              block
              x-large
              rounded
            >Log In</v-btn>

            <div class="mt-10 text-center">
              <a>Forgot Password</a>
              <a class="px-2">•</a>
              <a>Sign up for twitter</a>
            </div>
          </v-card>
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