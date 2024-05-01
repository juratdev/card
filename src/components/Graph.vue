<script setup>
import ApexCharts from "apexcharts";

const series =  [{
  name: "Sample Data",
  data: [20,700,200, 400, 800, 50,79, 400]
}]


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