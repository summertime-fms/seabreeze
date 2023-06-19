<template>
  <div class="wrapper">
    <router-view />
  </div>
</template>

<style lang="scss">
html {
  box-sizing: border-box;
}

body {
  margin: 0;
  background-color: #040B23;
  font-family: 'Inter', 'Arial', sans-serif;
}

.wrapper {
  max-width: 1440px;
  margin: 0 auto;
  margin-top: 5rem;
  padding: 0 45px;
}
</style>
