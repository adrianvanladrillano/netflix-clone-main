<template>
  <div style="background:black;color: white">
    <netflix-nav type="back" title="My list" />

    <v-container>
      <v-row dense>
        <v-col v-for="i in 12" :key="i" cols="4" xl="2">
          <netflix-vertical />
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