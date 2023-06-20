<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<style lang="scss">
@import "~materialize-css/dist/css/materialize.min.css";
@font-face {
  font-family: "Inter";
  font-weight: 400;
  font-display: swap;
  src: local("Inter"),
  url('../public/fonts/Inter-Regular.woff2') format("woff2");
}

:root {
  --card_width: 250px;
  --row_increment: 10px;
  --card_border_radius: 16px;
  --card_small: 26;
  --card_med: 33;
  --card_large: 45;
}

@font-face {
  font-family: "Inter";
  font-weight: 500;
  font-display: swap;
  src: local("Inter"),
  url('../public/fonts/Inter-Medium.woff2') format("woff2");
}

@font-face {
  font-family: "Inter";
  font-weight: 600;
  font-display: swap;
  src: local("Inter"),
  url('../public/fonts/Inter-SemiBold.woff2') format("woff2");
}

@font-face {
  font-family: "Inter";
  font-weight: 700;
  font-display: swap;
  src: local("Inter"),
  url('../public/fonts/Inter-Bold.woff2') format("woff2");
}


</style>

<script>
import BaseLayout from "@/layouts/BaseLayout.vue";
import EmptyLayout from "@/layouts/EmptyLayout.vue";
export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || 'empty') + 'Layout'
    }
  },
  components: {
    BaseLayout,
    EmptyLayout
  }
}
</script>


