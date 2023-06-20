<template>
  <div class="wrapper charts">
    <Widget
        name='Продажи'
        :data="salesData.data"
        :options="salesData.options"
        chart-type="Doughnut"
    />

    <Widget
        name="Строительство юнитов"
        :data="unitsBuildingData.data"
        :options="unitsBuildingData.options"
        chart-type="Bar"
    />

    <Widget
        name="Прочие расходы проекта"
        :data="otherCostsData.data"
        :options="otherCostsData.options"
        chart-type="Bar"
    />

    <Widget
        name="Баланс финансирования"
        :data="partnersData.data"
        :options="partnersData.options"
        chart-type="Bar"
        style="grid-column: 2/5;margin-top: -190px;"
    />
  </div>
</template>

<script>
import Widget from "@/components/Widget.vue";
export default {
  name: 'HomeView',
  components: {
    Widget,
  },
  data() {
    return {
      baseChartConfig: {
        animations: {
          delay: 1000
        }
      },

      salesData: {
        data: {
          labels: ['Поступило', 'Дебиторская задолженность', 'Остаток к продаже'],
          datasets: [
            {
              data: [40, 20, 12],
              backgroundColor: [
                '#44D3F1',
                '#34829D',
                '#225266'
              ],
            }
          ]
        },
        options: {
          responsive: false,
          align: 'start',
          borderWidth: 1,
          offset: 1
        }
      },
      unitsBuildingData: {
        data: {
          labels: ['Оплачено', 'Остаток к оплате '],
          datasets: [
            {
              label: 'Только стройка',
              data: [10000, 4000],
              backgroundColor: [
                '#44D3F1',
                '#34829D',
              ],
            }
          ]
        },
        options: {
          ...this.baseChartConfig,
          responsive: false,
          borderWidth: 1,
          offset: 1
        }
      },
      otherCostsData: {
        data: {
          labels: ['Оплачено', 'Остаток к оплате'],
          datasets: [
            {
              label: 'Все кроме стройки',
              data: [15000, 3000],
              backgroundColor: [
                '#44D3F1',
                '#34829D',
              ],
            }
          ]
        },
        options: {
          responsive: false,
          borderWidth: 1,
          offset: 1
        }
      },
      partnersData: {
        data: {
          labels: ['Партнер 1', 'Партнер 2', 'Партнер 3', 'Партнер 4'],
          datasets: [
            {
              label: 'Внесено',
              data: [40, 50, 15, 89],
              // backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
            },
            {
              label: 'Остаток к финансированию',
              data: [20, 30, 50, 25],
              backgroundColor: '#34829D'
            }
          ]
        },
        options: {
          indexAxis: 'y',
          elements: {
            bar: {
              borderWidth: 2,
            }
          },
          responsive: true,
          plugins: {
            legend: {
              position: 'right',
            },
            title: {
              display: true,
              text: 'Для партнёрских проектов'
            }
          }
        },
      }
    }
  }
}
</script>

<style lang="scss">
  .charts {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: start;
    gap: 25px;
  }
</style>
