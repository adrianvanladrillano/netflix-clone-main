<template>
  <div style="background:black;color: white">
    <netflix-player :video-id="$route.params.id"></netflix-player>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  mounted() {}
}
</script>
