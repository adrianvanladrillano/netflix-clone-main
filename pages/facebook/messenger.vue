<template>
  <div>
    <v-navigation-drawer app permanent width="20vw">
      <v-app-bar dense color="white" height="84" flat>
        <v-list-item class="px-0">
          <v-list-item-avatar>
            <v-img
              src="https://scontent.fmnl17-3.fna.fbcdn.net/v/t1.15752-9/214612817_159893452779045_4007780964298017931_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeFGdz3VEWqrNuL9CAeNhx447x0QITjLVCzvHRAhOMtULN4tJ-_yr4R3_zijZ0wujyS_7k5FNzITfHCJzolLfdbY&_nc_ohc=qpIZQf7wHC4AX9xdVp1&_nc_ht=scontent.fmnl17-3.fna&oh=e66bbc0da8e4013bb8224f3e25735f03&oe=60FCAA06"
            ></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="font-weight-bold text-h5">Chats</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-menu top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              fab
              small
              elevation="0"
              color="grey lighten-4"
              class="mx-1"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>mdi-dots-horizontal</v-icon>
            </v-btn>
          </template>

          <v-card width="350">
            <v-divider></v-divider>
            <v-list class="px-2" dense>
              <v-list-item link>
                <v-list-item-title style="font-size: .9em" class="font-weight-medium">
                  <v-icon small left color="black">mdi-cog</v-icon>Preferences
                </v-list-item-title>
              </v-list-item>

              <v-divider></v-divider>

              <v-list-item link v-for="option in options_chat" :key="option">
                <v-list-item-title style="font-size: .9em" class="font-weight-medium">
                  <v-icon small left color="black">mdi-cog</v-icon>
                  {{option.title}}
                </v-list-item-title>
              </v-list-item>

              <v-divider></v-divider>

              <v-list-item link v-for="option in options_chat" :key="option">
                <v-list-item-title style="font-size: .9em" class="font-weight-medium">
                  <v-icon small left color="black">mdi-cog</v-icon>
                  {{option.title}}
                </v-list-item-title>
              </v-list-item>

              <v-divider></v-divider>

              <v-list-item link v-for="option in options_chat" :key="option">
                <v-list-item-title style="font-size: .9em" class="font-weight-medium">
                  <v-icon small left color="black">mdi-cog</v-icon>
                  {{option.title}}
                </v-list-item-title>
              </v-list-item>

              <v-divider></v-divider>

              <v-list-item link router to="/facebook">
                <v-list-item-title style="font-size: .9em" class="font-weight-medium">
                  <v-icon small left color="black">mdi-cog</v-icon>Logout
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>
        </v-menu>

        <v-btn fab small elevation="0" color="grey lighten-4" class="mx-1">
          <v-icon>mdi-video-plus</v-icon>
        </v-btn>

        <v-btn fab small elevation="0" color="grey lighten-4" class="mx-1">
          <v-icon>mdi-square-edit-outline</v-icon>
        </v-btn>
        <template v-slot:extension>
          <v-text-field
            dense
            rounded
            solo
            flat
            prepend-inner-icon="mdi-magnify"
            label="Search Messenger"
            background-color="grey lighten-4"
          ></v-text-field>
        </template>
      </v-app-bar>

      <v-list-item two-line v-for="i in 24" :key="i" @click>
        <v-list-item-avatar width="60" height="60">
          <v-img
            src="https://scontent.fmnl17-3.fna.fbcdn.net/v/t1.15752-9/214612817_159893452779045_4007780964298017931_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeFGdz3VEWqrNuL9CAeNhx447x0QITjLVCzvHRAhOMtULN4tJ-_yr4R3_zijZ0wujyS_7k5FNzITfHCJzolLfdbY&_nc_ohc=qpIZQf7wHC4AX9xdVp1&_nc_ht=scontent.fmnl17-3.fna&oh=e66bbc0da8e4013bb8224f3e25735f03&oe=60FCAA06"
          ></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title style="font-size: .9em">Adrian Van</v-list-item-title>
          <v-list-item-subtitle
            style="font-size: .7em"
          >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque laboriosam iste minus, exercitationem totam consequatur. Dolorem eius nisi quisquam, obcaecati cupiditate veniam tenetur minima? Omnis earum quaerat voluptatem iure nesciunt.</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-actions>
          <v-icon small color="grey lighten-1">mdi-check-circle</v-icon>
        </v-list-item-actions>
      </v-list-item>
    </v-navigation-drawer>
    <v-app-bar dense color="white" app height="64" elevation="1" style="border: 1px solid #e1e1e1">
      <v-list-item class="py-5 px-0 mx-0s">
        <v-list-item-avatar>
          <v-img src="https://i.pinimg.com/originals/7d/e1/0b/7de10be8df846f5531abcceeb448ef8c.jpg"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="font-weight-medium title">Bea Alonzo</v-list-item-title>
        </v-list-item-content>
        <v-list-item-actions class="d-flex">
          <v-btn icon color="light-blue darken-1">
            <v-icon>mdi-phone</v-icon>
          </v-btn>
          <v-btn icon color="light-blue darken-1">
            <v-icon>mdi-video</v-icon>
          </v-btn>
          <v-btn icon color="light-blue darken-1" @click="right_drawer = !right_drawer">
            <v-icon>mdi-dots-horizontal-circle</v-icon>
          </v-btn>
        </v-list-item-actions>
      </v-list-item>
    </v-app-bar>
    <v-row v-for="i in 16" :key="i">
      <v-col cols="12">
        <v-card
          flat
          style="border-radius: 20px;font-size: .9em"
          width="500"
          :color="i % 2 == 0 ? 'grey lighten-4' : 'light-blue darken-1'"
          :class="i % 2 == 0 ? 'float-left pa-2 mx-4' : 'float-right pa-2 mx-4'"
          :dark="i % 2 == 0 ? false : true"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit.</v-card>
      </v-col>
    </v-row>

    <v-navigation-drawer v-model="right_drawer" app right width="20vw" class="py-5">
      <div align="center">
        <v-avatar width="100" height="100">
          <v-img
            src="https://scontent.fmnl17-3.fna.fbcdn.net/v/t1.15752-9/214612817_159893452779045_4007780964298017931_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeFGdz3VEWqrNuL9CAeNhx447x0QITjLVCzvHRAhOMtULN4tJ-_yr4R3_zijZ0wujyS_7k5FNzITfHCJzolLfdbY&_nc_ohc=qpIZQf7wHC4AX9xdVp1&_nc_ht=scontent.fmnl17-3.fna&oh=e66bbc0da8e4013bb8224f3e25735f03&oe=60FCAA06"
          ></v-img>
        </v-avatar>
        <h4 class="mt-2">Bea Alonzo</h4>
      </div>

      <v-expansion-panels flat class="px-0 mt-7">
        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-medium">Customize Chat</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-list-item class="px-1" link>
              <v-list-item-title style="font-size: .9em" class="font-weight-medium">
                <v-icon left color="black">mdi-record-circle</v-icon>Change Theme
              </v-list-item-title>
            </v-list-item>

            <v-list-item class="px-1" link>
              <v-list-item-title style="font-size: .9em" class="font-weight-medium">
                <v-icon left color="black">mdi-thumb-up</v-icon>Change Emoji
              </v-list-item-title>
            </v-list-item>

            <v-list-item class="px-1" link>
              <v-list-item-title style="font-size: .9em" class="font-weight-medium">
                <v-icon left color="black">mdi-format-letter-case</v-icon>Edit Nicknames
              </v-list-item-title>
            </v-list-item>

            <v-list-item class="px-1" link>
              <v-list-item-title style="font-size: .9em" class="font-weight-medium">
                <v-icon left color="black">mdi-magnify</v-icon>Search in Conversation
              </v-list-item-title>
            </v-list-item>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-medium">Privacy & Support</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-list-item class="px-1" link v-for="option in options_chat" :key="option">
              <v-list-item-title style="font-size: .9em" class="font-weight-medium">
                <v-icon small left color="black">mdi-cog</v-icon>
                {{option.title}}
              </v-list-item-title>
            </v-list-item>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header class="font-weight-medium">Shared Media</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row dense>
              <v-col cols="4" v-for="i in 24" :key="i">
                <v-img
                  src="https://scontent.fmnl17-4.fna.fbcdn.net/v/t1.15752-9/217392525_156038679842701_7114407714795668963_n.png?_nc_cat=105&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeG1-ZQR6vF2yyOP0waJ1hT-HxAxf3cOgscfEDF_dw6Cx0PI8XRNBo9Qc4MHGHwTFv3f2Faw8-b-5wp-_wCsu0fR&_nc_ohc=mkkpZkWuXScAX8Yiu9A&_nc_ht=scontent.fmnl17-4.fna&oh=726bf6836f65993cab4a9c922560912d&oe=60FB6BAD"
                ></v-img>
              </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // Left options
      options: [
        { title: 'Click Me', icon: 'mdi-tune' },
        { title: 'Click Me', icon: 'mdi-tune' },
        { title: 'Click Me', icon: 'mdi-tune' },
        { title: 'Click Me 2', icon: 'mdi-tune' }
      ],

      options_chat: [
        { title: 'Active Contacts', icon: 'mdi-tune' },
        { title: 'Message Requests', icon: 'mdi-tune' },
        { title: 'Archived Chats', icon: 'mdi-tune' }
      ],
      sheet: true,
      right_drawer: true
    }
  }
}
</script>