<template>
  <v-app-bar color="white" flat dense fixed app>
    <v-btn icon router to="/">
      <v-icon>mdi-dots-horizontal</v-icon>
    </v-btn>

    <v-spacer></v-spacer>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          text
          v-bind="attrs"
          v-on="on"
          style="text-transform: none"
          class="text--secondary font-weight-regular"
          small
        >
          English
          <v-icon>mdi-chevron-down</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index">
          <v-list-item-title>{{ item }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon color="white">mdi-dots-horizontal</v-icon>
    </v-btn>
  </v-app-bar>
</template>
<script>
export default {
  data() {
    return {
      items: ['English', 'Filipino', 'Chinese']
    }
  }
}
</script>