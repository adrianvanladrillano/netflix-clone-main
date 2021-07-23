<template>
  <div>
    <v-app-bar dense color="white" style="padding: 0px 25vw 0px 25vw;">
      <v-img
        width="20"
        height="30"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
      ></v-img>

      <v-spacer></v-spacer>

      <v-text-field class="mt-5" placeholder="Search" solo flat background-color="grey lighten-4"></v-text-field>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-facebook-messenger</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-compass</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-avatar>
        <v-img
          width="35"
          height="35"
          src="https://scontent.fmnl17-3.fna.fbcdn.net/v/t1.15752-9/211708921_956648264906405_1806000120927429051_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeHyweR5IaPLKsZhpis0f1X4c1ppZR2Hqp5zWmllHYeqnlOf2oNTAv-CzoKuxYJSsxx0Gpn0aV226K37cu4h6Pai&_nc_ohc=F3dj3ODIA1IAX-L4UR9&tn=A_jImjnRBytZNOk1&_nc_ht=scontent.fmnl17-3.fna&oh=1904988018f6d5755bfd0b2fce75d88a&oe=60FCC5F4"
        ></v-img>
      </v-avatar>
    </v-app-bar>

    <v-row dense style="padding: 0px 25vw 0px 25vw;" class="mt-7">
      <v-col cols="8">
        <v-row>
          <v-col>
            <v-card outlined>
              <v-slide-group multiple>
                <v-slide-item v-for="n in 25" :key="n" v-slot="{ active, toggle }">
                  <div>
                    <v-avatar width="54" height="54" class="mx-4 my-2">
                      <v-img
                        src="https://scontent.fmnl17-3.fna.fbcdn.net/v/t1.15752-9/211708921_956648264906405_1806000120927429051_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeHyweR5IaPLKsZhpis0f1X4c1ppZR2Hqp5zWmllHYeqnlOf2oNTAv-CzoKuxYJSsxx0Gpn0aV226K37cu4h6Pai&_nc_ohc=F3dj3ODIA1IAX-L4UR9&tn=A_jImjnRBytZNOk1&_nc_ht=scontent.fmnl17-3.fna&oh=1904988018f6d5755bfd0b2fce75d88a&oe=60FCC5F4"
                      ></v-img>
                    </v-avatar>
                    <p class="body-2 text--secondary">adriavnalad</p>
                  </div>
                </v-slide-item>
              </v-slide-group>
            </v-card>
          </v-col>
        </v-row>

        <!-- Posts -->
        <v-row v-for="i in 15" :key="i">
          <v-col>
            <v-card flat>
              <v-window v-model="onboarding" show-arrows>
                <v-window-item v-for="n in length" :key="`card-${n}`">
                  <v-card outlined>
                    <v-list-item>
                      <v-list-item-avatar>
                        <v-img src="https://pbs.twimg.com/media/EX0li02U4AYYL_n.jpg"></v-img>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title class="body-2 font-weight-medium">jennierubyjane</v-list-item-title>
                        <v-list-item-subtitle style="font-size: .7em">Tomas Morato</v-list-item-subtitle>
                      </v-list-item-content>

                      <v-list-item-action>
                        <v-btn icon>
                          <v-icon>mdi-dots-horizontal</v-icon>
                        </v-btn>
                      </v-list-item-action>
                    </v-list-item>
                    <v-img
                      src="https://64.media.tumblr.com/e1e7b97e99ffcc14dd3434bc8c9cee3f/7fd92ab732fe63b2-eb/s640x960/0b1bffd757d482ec2af5a9785260fffc38910350.jpg"
                    ></v-img>
                    <v-row>
                      <v-col>
                        <v-btn icon class="mx-2 mt-2">
                          <v-icon large>mdi-heart-outline</v-icon>
                        </v-btn>
                        <v-btn icon class="mx-2 mt-2">
                          <v-icon large>mdi-message-outline</v-icon>
                        </v-btn>
                        <v-btn icon class="mx-2 mt-2">
                          <v-icon large>mdi-heart</v-icon>
                        </v-btn>
                      </v-col>
                      <v-col>
                        <v-item-group v-model="onboarding" class="text-center" mandatory>
                          <v-item v-for="n in length" :key="`btn-${n}`" v-slot="{ active, toggle }">
                            <v-btn x-small :input-value="active" icon @click="toggle">
                              <v-icon>mdi-record</v-icon>
                            </v-btn>
                          </v-item>
                        </v-item-group>
                      </v-col>
                      <v-col>
                        <v-btn icon large>
                          <v-icon>mdi-bookmark</v-icon>
                        </v-btn>
                      </v-col>
                    </v-row>

                    <v-row class="px-2">
                      <v-col>
                        <p class="font-weight-medium">20 Likes</p>
                        <p class="font-weight-medium">
                          adrianvanladrillano
                          <span class="font-weight-regular">"sadasdsadasd"</span>
                        </p>

                        <p class="font-weight-medium grey--text">View all 2 comments</p>

                        <p class="caption">3 HOURS AGO</p>
                      </v-col>
                    </v-row>
                    <v-divider></v-divider>
                    <v-card-actions>
                      <v-btn icon>
                        <v-icon>mdi-emoticon-happy-outline</v-icon>
                      </v-btn>
                      <v-text-field
                        v-model="comment"
                        class="mt-5"
                        solo
                        dense
                        flat
                        placeholder="Add a comment.."
                      ></v-text-field>
                      <v-btn :disabled="comment == '' ? true : false" text color="primary">POST</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="4">
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://pbs.twimg.com/media/EX0li02U4AYYL_n.jpg"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>vanladrillano</v-list-item-title>
            <v-list-item-subtitle>Adrian Van</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <a style="font-size: .7em">Switch</a>
          </v-list-item-action>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="body-2 font-weight-medium">Suggestions for you</v-list-item-title>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn depressed small style="text-transform: none">See All</v-btn>
          </v-list-item-action>
        </v-list-item>

        <v-list-item v-for="i in 5" :key="i">
          <v-list-item-avatar>
            <v-img src="https://pbs.twimg.com/media/EX0li02U4AYYL_n.jpg"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="body-2 font-weight-medium">jennierubyjane</v-list-item-title>
            <v-list-item-subtitle style="font-size: .7em">Followed by asdasdasdasdasdasd</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <a style="font-size: .7em">Follow</a>
          </v-list-item-action>
        </v-list-item>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      length: 3,
      onboarding: 0
    }
  },
  computed: {
    ...mapState({
      people: state => {
        return state.people
      }
    })
  },
  methods: {}
}
</script>
<style>
.v-slide-group__prev {
  background-color: rgba(255, 255, 255, 0.5);
  width: 1px;
}
.v-slide-group__next {
  background-color: rgba(255, 255, 255, 0.5);
  background: transparent !important;
}
</style>