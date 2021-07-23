<template>
  <div
    :style="$vuetify.breakpoint.mobile ? '': 'padding-left: 35vh;padding-right: 35vh;padding-top: 2vh'"
  >
    <v-container>
      <v-app-bar color="white" flat>
        <v-img
          max-width="48"
          max-height="48"
          src="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=399&h=399"
        ></v-img>
        <v-spacer></v-spacer>

        <v-btn text style="text-transform: none" v-for="link in links" :key="link">{{link.title}}</v-btn>
      </v-app-bar>

      <v-row align="center" :class="$vuetify.breakpoint.mobile ? 'mt-10' : ' mt-15'">
        <v-col cols="12" xl="12">
          <v-row class="d-flex justify-space-between">
            <v-col cols="12" xl="5">
              <v-card class="pa-5" flat>
                <h1
                  class="font-weight-medium"
                  :style="$vuetify.breakpoint.mobile ? 'font-size: 3.5em;background: #4564FF;background: -webkit-linear-gradient(to right, #4564FF 0%, #B03AEC 20%, #FF5D88 45%);background: -moz-linear-gradient(to right, #4564FF 0%, #B03AEC 20%, #FF5D88 45%);background: linear-gradient(to right, #4564FF 0%, #B03AEC 20%, #FF5D88 45%);-webkit-background-clip: text;-webkit-text-fill-color: transparent;letter-spacing: -2px;line-height : 60px': 'font-size: 5em;background: #4564FF;background: -webkit-linear-gradient(to right, #4564FF 0%, #B03AEC 20%, #FF5D88 45%);background: -moz-linear-gradient(to right, #4564FF 0%, #B03AEC 20%, #FF5D88 45%);background: linear-gradient(to right, #4564FF 0%, #B03AEC 20%, #FF5D88 45%);-webkit-background-clip: text;-webkit-text-fill-color: transparent;letter-spacing: -2px;line-height : 90px'"
                >
                  Hang out
                  <br />anytime.
                  <br />anywhere
                </h1>
                <p :class="$vuetify.breakpoint.mobile ? 'mt-5 body-1': 'mt-5 body-1'">
                  Messenger makes it easy and fun to stay close to your
                  favorite people.
                </p>

                <v-row>
                  <v-col>
                    <v-text-field
                      solo
                      flat
                      dense
                      :style="$vuetify.breakpoint.mobile ? 'width: 100%;border-radius: 10px' : 'width: 70%;border-radius: 12px'"
                      hide-details
                      placeholder="Email or phone number"
                      background-color="#F5F5F5"
                    ></v-text-field>
                    <v-text-field
                      solo
                      flat
                      dense
                      type="password"
                      :style="$vuetify.breakpoint.mobile ? 'width: 100%;border-radius: 10px' : 'width: 70%;border-radius: 12px'"
                      hide-details
                      class="mt-3"
                      placeholder="Password"
                      background-color="#F5F5F5"
                    ></v-text-field>

                    <v-row class="mt-5" align="center">
                      <v-col cols="3">
                        <v-btn
                          depressed
                          rounded
                          large
                          color="primary"
                          style="text-transform: none"
                          router
                          to="/facebook/messenger"
                        >Log in</v-btn>
                      </v-col>

                      <v-col>
                        <p class="mt-4 primary--text" style="font-size: .8em;">Forgot your password?</p>
                      </v-col>
                    </v-row>

                    <v-checkbox label="Keep me signed in"></v-checkbox>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12" xl="8">
                    <Download />
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
            <v-col cols="12" xl="6">
              <v-card class="py-10" flat>
                <v-img
                  src="https://scontent.fmnl17-2.fna.fbcdn.net/v/t39.8562-6/120973513_338186077283942_8148888802958728934_n.png?_nc_cat=1&ccb=1-3&_nc_sid=6825c5&_nc_ohc=f86F9ZbeiRMAX83N6ja&_nc_ht=scontent.fmnl17-2.fna&oh=b79ce5e66b8e08fce206be8f3bb895f9&oe=60FBA027"
                ></v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-footer
        fixed
        app
        justify="center"
        :style="$vuetify.breakpoint.mobile ? '': 'padding-left: 35vh;padding-right: 35vh;height: 10vh'"
      >
        <span class="caption">
          <span class="font-weight-bold">© Facebook 2021.</span>
          The Apple and Google Play logos are trademarks of their respective owners.
        </span>

        <v-spacer></v-spacer>

        <v-btn
          text
          style="font-size: .8em;text-transform: none;"
          class="mx-1 font-weight-regular"
        >Data Privacy</v-btn>

        <v-btn
          text
          style="font-size: .8em;text-transform: none;"
          class="mx-1 font-weight-regular"
        >Terms</v-btn>

        <v-btn
          text
          style="font-size: .8em;text-transform: none;"
          class="mx-1 font-weight-regular"
        >English (US)</v-btn>
        <v-img
          style="max-width: 120px"
          src="https://scontent.fmnl17-2.fna.fbcdn.net/v/t39.8562-6/120094295_380944946407105_7528018231246737285_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=6825c5&_nc_ohc=CAFfi6LdWH8AX_kaUTr&_nc_oc=AQk7vJUkrDqYzOrdpuSth_Yl2pcqsT6MPtw6sMDn-WCnn5Gkx9aVo24JfthgVMpmyvk&_nc_ht=scontent.fmnl17-2.fna&oh=92a5b1cf818b15737e6e8d9716b5aaa9&oe=60FBD82C"
        ></v-img>
      </v-footer>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      links: [
        { title: 'Rooms' },
        { title: 'Features' },
        { title: 'Privacy & Safety' },
        { title: 'For Developers' }
      ]
    }
  }
}
</script>