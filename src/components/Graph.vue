<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  data: Array,
  percentage: Object,
});

const series =  [{
  name: "Sample Data",
  data: props.data
}]

const color = props.percentage.increase ? '#49D39F' : '#F44336';

const chartOptions = {
  chart: {
    background: 'transparent',
    type: 'line',
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false,
    }
  },
  dataLabels: {
    enabled: false
  },
  options: {
    chart: {
      background: 'none',
    }
  },
  tooltip: {
    enabled: false,
  },
  grid: {
    show: false,
  },
  xaxis: {
    show: false,
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    labels: {
      show: false,
    }
  },
  stroke: {
    curve: 'smooth',
    width: 3,
    colors: [color]
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'none',
      type: "horizontal",
      shadeIntensity: 0.5,
      gradientToColors: undefined,
      inverseColors: false,
      opacityFrom: 0,
      opacityTo: 0,
    }
  }

};
</script>

<template>
  <div id="chart">
    <apexchart type="area" width="109px" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<style scoped>

</style>