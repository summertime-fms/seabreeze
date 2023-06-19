<template>
  <div class="wrapper charts">
    <Widget name='Продажи' chart-type="Doughnut" />
  </div>
</template>

<script>
import Widget from "@/components/Widget.vue";
export default {
  name: 'HomeView',
  components: {
    Widget,
  }
}
</script>

<style lang="scss">
  .charts {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
  }
</style>
