<template>
  <div style="background: #FFF;">
    <v-app-bar color="transparent" absolute>
      <h1 class="black--text">
        AVPL
        <span class="red--text">.</span>
      </h1>

      <v-spacer></v-spacer>
      <v-btn class="mx-2" text dark>Home</v-btn>
      <v-btn class="mx-2" text dark>About</v-btn>
      <v-btn class="mx-2" text dark>Portfolio</v-btn>
      <v-btn class="mx-2" text dark>Contact</v-btn>
    </v-app-bar>

    <!-- <v-card height="100vh" flat>
      <v-row style="height: 100vh" align="center" class="pa-15" justify="center">
        <v-col cols="12" xl="4">
          <h1 class="display-4 font-weight-bold text-center">
            <span class="red--text">My works</span>
            <br />Adrian Van
          </h1>
          <p
            class="my-10 text-center"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias natus nulla beatae qui saepe consectetur cumque corrupti nostrum a, recusandae quo optio nihil distinctio suscipit eligendi veritatis architecto cupiditate dolor!</p>
        </v-col>
      </v-row>
    </v-card>-->
    <div style="width: 100vw;background: #EFF0F5">
      <v-row class="d-flex mt-15 mx-15" align="center" v-for="(item, index) in items" :key="index">
        <v-col cols="12" xl="6">
          <v-col cols="12" xl="6" class="mt-10">
            <v-card
              width="100%"
              class="items pa-5"
              style="border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;"
            >
              <v-img contain :src="item.image"></v-img>
            </v-card>
          </v-col>
          <div class="py-10">
            <!-- <v-img
              width="100"
              height="100"
              contain
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png"
            ></v-img>-->
            <h1 class="title">{{item.title}}</h1>
            <p
              class="body-2 text--secondary"
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, iste doloribus eum corrupti consectetur nisi ea quis quod minima, cum ad? Necessitatibus perferendis ut laborum blanditiis, deleniti doloremque aspernatur perspiciatis!</p>

            <v-btn color="primary" router :to="item.route">View Project</v-btn>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { title: 'Netflix Clone', image: '/fb1.jpg', route: '/netflix' },
        { title: 'Facebook Clone', image: '/fb1.jpg', route: '/facebook' },
        { title: 'Instagram Clone', image: '/ig1.jpg', route: '/instagram' },
        { title: 'Instagram Login Page', image: '/ig1.jpg' },
        { title: 'Instagram Login Page', image: '/ig1.jpg' },
        { title: 'Instagram Login Page', image: '/ig1.jpg' },
        { title: 'Instagram Login Page', image: '/ig1.jpg' },
        { title: 'Instagram Login Page', image: '/ig1.jpg' }
      ]
    }
  }
}
</script>
<style>
.items {
  transform: perspective(1920px) rotateY(-25deg) scale(0.9) rotateX(10deg);
  transition: 0.6s ease all;
}
.items:hover {
  transform: rotate(0deg) scale(1) translateY(10px);
}
</style>