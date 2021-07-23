<template>
  <div>
    <v-container style="height: 100vh">
      <Navbar v-if="$vuetify.breakpoint.mobile" />
      <v-row
        dense
        align="center"
        justify="center"
        :class="$vuetify.breakpoint.mobile ? '' : ' mt-15'"
      >
        <v-col cols="3" v-if="!$vuetify.breakpoint.mobile">
          <v-img height="70vh" contain src="ig.jpeg"></v-img>
        </v-col>
        <v-col
          cols="9"
          xl="3"
          justify="center"
          align="center"
          :class="!$vuetify.breakpoint.mobile ? 'pa-7' : ''"
        >
          <v-card
            :class="!$vuetify.breakpoint.mobile ? 'pa-7' : ''"
            :outlined="!$vuetify.breakpoint.mobile ? true : false"
            :flat="!$vuetify.breakpoint.mobile ? false : true"
          >
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-img
                class="mb-8"
                width="70%"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
              ></v-img>

              <v-btn
                small
                dark
                depressed
                color="light-blue accent-4"
                block
                style="text-transform: none"
              >
                <v-icon left>mdi-facebook</v-icon>Continue with Facebook
              </v-btn>

              <div class="separator my-5">OR</div>

              <v-text-field
                hide-details
                class="light-outlined"
                outlined
                label="Phone number, username, or email"
                clearable
                v-model="username"
                dense
                required
              ></v-text-field>
              <v-text-field
                hide-details
                class="light-outlined mt-3"
                outlined
                label="Password"
                dense
                v-model="password"
                :type="showpass ? 'text' : 'password'"
                :append-icon="showpass ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showpass = !showpass"
              ></v-text-field>

              <p class="mt-3 float-right light-blue--text" style="font-size: .9em">Forgot password?</p>

              <v-btn
                small
                class="white--text"
                block
                depressed
                color="light-blue accent-4"
                style="text-transform: none"
                @click="validate"
                :loading="loader"
              >Log In</v-btn>

              <div class="mt-5">
                <p
                  class="error--text"
                  style="font-size: .9em"
                  v-for="error in errors"
                  :key="error"
                >{{ error }}</p>
              </div>

              <p class="text-center text--secondary mt-5" style="font-size: .9em">
                Don't have an account?
                <span class="light-blue--text font-weight-medium">Sign-up</span>
              </p>
            </v-form>
          </v-card>

          <p class="my-5 text--secondary" style="font-size: .9em">Get the app.</p>

          <download />
        </v-col>
      </v-row>
    </v-container>
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
      } else {
        this.$router.push('instagram/app')
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
.light-outlined .v-label {
  opacity: 0.8;
  font-size: 0.8em;
}

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