<template>
  <div style="background:black;color: white">
    <netflix-nav type="sub" title="Downloads" />
    <v-container>
      <v-row dense cols="4" xl="2">
        <v-col>
          <v-card color="black" dark class="px-2" height="100vh">
            <p class="font-weight-bold title">Introducing Downloads for You</p>
            <p
              style="font-size: .6em"
              class="grey--text lighten-2"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur explicabo, quaerat ex expedita, architecto ullam perferendis accusamus.</p>
            <v-img src></v-img>
            <div align="center" class="px-15 my-10">
              <v-row style="position: relative">
                <v-img
                  style="transform: rotate(-30deg);"
                  width="33%"
                  src="https://static2.showtimes.com/poster/660x980/the-prom-netflix-149579.jpg"
                ></v-img>

                <v-img
                  style="z-index: 99"
                  width="33%"
                  src="https://1.bp.blogspot.com/-nvwyTswILtg/X8iZh6rABXI/AAAAAAAAJw4/Cj4Y4hc_6HwIo_hczXxUD-pGjRrrftpBQCLcBGAsYHQ/s2048/Sweet%2BHome_Vertical_Main_Trio_RGB_EN-GB_APAC_PRE.jpg"
                ></v-img>

                <v-img
                  style="transform: rotate(30deg);"
                  width="33%"
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e63aa1100068709.5f00aa5e73d4a.jpg"
                ></v-img>
              </v-row>
            </div>
            <v-row align="center" justify="center" class="px-10">
              <v-btn class="text-capitalize my-5" block color="primary">SET UP</v-btn>
              <v-btn class="text-capitalize my-5 px-10" dark>Find more to download</v-btn>
            </v-row>
          </v-card>
          <!-- <v-card color="black" dark class>
          <iframe
            style="width: 100%;height: 25vh"
            src="https://www.youtube.com/embed/6ZfuNTqbHE8?autoplay=1&mute=1&controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <v-container>
            <v-row align="center" justify="space-between" no-gutters>
              <v-col cols="6">
                <v-img
                  src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersinfinitywar_lob_log_03.png"
                ></v-img>
              </v-col>

              <v-col cols="2" align="center">
                <v-btn icon @click="dialogView = true">
                  <v-icon color="white">mdi-bell</v-icon>
                </v-btn>
                <p style="font-size: .5em;">Remind me</p>
              </v-col>

              <v-col cols="2" align="center">
                <v-btn icon router to="/netflix/watch">
                  <v-icon color="white">mdi-information-outline</v-icon>
                </v-btn>
                <p style="font-size: .5em;">Info</p>
              </v-col>
            </v-row>
            <v-list-item two-line class="px-0">
              <v-list-item-content>
                <v-list-item-subtitle style="font-size: .7em">
                  <span class="mr-2">Coming Friday</span>
                </v-list-item-subtitle>
                <v-list-item-title class="font-weight-bold">Avengers: Infinity War</v-list-item-title>
              </v-list-item-content>

              <v-list-item-action>
                <v-btn fab small @click="dialogView = false">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>

            <p
              style="font-size: .7em"
              class="grey--text lighten-2"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur explicabo, quaerat ex expedita, architecto ullam perferendis accusamus.</p>
            <p style="font-size: .7em">
              <span>
                Gruesome
                <span class="green--text px-1">•</span>
              </span>
              <span>
                Gory
                <span class="green--text px-1">•</span>
              </span>
              <span>
                Violent
                <span class="green--text px-1">•</span>
              </span>
              <span>
                Thriller
                <span class="green--text px-1">•</span>
              </span>
              <span>
                Horror
                <span class="green--text px-1">•</span>
              </span>
              <span>Suspense</span>
            </p>
          </v-container>
          </v-card>-->
        </v-col>
      </v-row>
    </v-container>

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
<style>
.spread {
  width: 350px;
  height: 250px;
  position: relative;
}

.spread > .card-download {
  position: absolute;
  top: 0;
  left: 0;
  -webkit-transition: top 0.3s ease, left 0.3s ease;
  -moz-transition: top 0.3s ease, left 0.3s ease;
  -o-transition: top 0.3s ease, left 0.3s ease;
  -ms-transition: top 0.3s ease, left 0.3s ease;
  transition: top 0.3s ease, left 0.3s ease;
}
.spread:hover .suitdiamonds {
  -webkit-transform: rotate(-10deg);
  -moz-transform: rotate(-10deg);
  -o-transform: rotate(-10deg);
  -ms-transform: rotate(-10deg);
  transform: rotate(-10deg);
}

.spread:hover .suithearts {
  left: 30px;
  top: 0px;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  -ms-transform: rotate(0deg);
  transform: rotate(0deg);
}

.spread:hover .suitclubs {
  left: 60px;
  top: 5px;
  -webkit-transform: rotate(10deg);
  -moz-transform: rotate(10deg);
  -o-transform: rotate(10deg);
  -ms-transform: rotate(10deg);
  transform: rotate(10deg);
}

.spread:hover .suitspades {
  left: 80px;
  top: 10px;
  -webkit-transform: rotate(20deg);
  -moz-transform: rotate(20deg);
  -o-transform: rotate(20deg);
  -ms-transform: rotate(20deg);
  transform: rotate(20deg);
}
</style>