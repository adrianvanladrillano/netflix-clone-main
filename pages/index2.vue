<template>
  <div>
    <v-app-bar color="transparent" absolute>
      <h1 class="white--text">
        AVPL
        <span class="red--text">.</span>
      </h1>

      <v-spacer></v-spacer>
      <v-btn class="mx-2" text dark>Home</v-btn>
      <v-btn class="mx-2" text dark>About</v-btn>
      <v-btn class="mx-2" text dark>Portfolio</v-btn>
      <v-btn class="mx-2" text dark>Contact</v-btn>
    </v-app-bar>

    <v-row>
      <v-col v-for="nav in navs" :key="nav.route">
        <v-card>
          
        </v-card>
      </v-col>
    </v-row>
    <!-- <v-carousel v-model="model" height="100vh">
      <v-carousel-item v-for="i in 6" :key="i">
        <v-card dark height="100vh" style="background: black">
          <v-row style="height: 100vh" align="center" class="pa-15">
            <v-col>
              <h1 class="display-4 font-weight-bold">
                <span class="red--text">Hello,</span>
                I'm
                <br />Adrian Van
              </h1>
              <p
                class="my-10"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias natus nulla beatae qui saepe consectetur cumque corrupti nostrum a, recusandae quo optio nihil distinctio suscipit eligendi veritatis architecto cupiditate dolor!</p>
              <v-btn color="red" text large>View Works</v-btn>
              <v-btn color="red" large rounded>Download Resume</v-btn>
            </v-col>
            <v-col>
              <v-img
                src="https://bashooka.com/wp-content/uploads/2018/07/dark-background-web-ui-47.jpg"
              ></v-img>
            </v-col>
          </v-row>
        </v-card>
      </v-carousel-item>
    </v-carousel>-->
  </div>
</template>
<script>
export default {
  data() {
    return {
      navs: [{ title: 'Netflix', route: '/netflix' }]
    }
  }
}
</script>
