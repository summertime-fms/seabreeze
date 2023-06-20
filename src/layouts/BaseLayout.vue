<template>
  <div class="app-wrapper">
    <Navbar />

    <Sidebar />

    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/app/Navbar.vue';
import Sidebar from '@/components/app/Sidebar.vue';

export default {
  name: 'base-layout',
  components: {
    Navbar,
    Sidebar
  }
}
</script>

<style lang="scss">
html {
  box-sizing: border-box;
}

.app-wrapper {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 35px;
  padding-top: 20px;
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-template-rows: 100px auto;
  gap: 20px;
}
</style>
