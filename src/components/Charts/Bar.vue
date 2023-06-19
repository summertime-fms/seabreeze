<template>
  <Bar :data="data" :options="options" />
</template>

<script>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

import { Bar } from 'vue-chartjs';
import {colors} from "@/colors";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
ChartJS.defaults.backgroundColor = colors.baseColor;
ChartJS.defaults.borderColor = colors.accentColor;
ChartJS.defaults.color = colors.textBaseColor;
export default {
  components: {
    Bar
  },
  data() {
    return {
      data: {
        labels: ['January', 'February', 'March'],
        datasets: [{ data: [40, 20, 12] }]
      },
      options: {
        responsive: false
      }
    }
  }
}
</script>

<style lang="scss">
  canvas {
    width: 100%;
  }
</style>
