<template>
  <div class="widget">
    <h2>{{name}}</h2>

    <component :is="chartType" :data="data" :options="options"></component>
  </div>
</template>

<script>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

import { Bar, Doughnut} from 'vue-chartjs';
import {colors} from "@/colors";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend)
ChartJS.defaults.backgroundColor = colors.baseColor;
ChartJS.defaults.borderColor = colors.accentColor;
ChartJS.defaults.color = colors.textBaseColor;

export default {
  components: {
    Bar,
    Doughnut
  },
  props: ['name', 'chartType', 'data', 'options'],
}
</script>

<style lang="scss" scoped>
  .widget {
    padding: 25px;
    background-color: #273156;
    border-radius: var(--radius);
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);

    h2 {
      margin: 0;
      margin-bottom: 15px;
      font-size: 26px;
      font-weight: 500;
      letter-spacing: -0.01em;
      //text-transform: uppercase;
      color: #f2f2f2;
    }

     canvas {
       width: 100%;
     }
  }
</style>
