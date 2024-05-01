<script setup>
import { ref } from "vue";
import ApexCharts from "apexcharts";
import Button from "./components/Button.vue";

function generateDayWiseTimeSeries(s, count) {
  let values = [
    [4, 3, 10, 9, 29, 19, 25, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
    [2, 3, 8, 7, 22, 16, 23, 7, 11, 5, 12, 5, 10, 4, 15, 2, 6, 2],
  ];
  let i = 0;
  let series = [];
  let x = new Date("11 Nov 2012").getTime();
  while (i < count) {
    series.push([x, values[s][i]]);
    x += 86400000;
    i++;
  }
  return series;
}

const series = ref([
  {
    name: "XYZ MOTORS",
    data: [
      {
        name: "Series A",
        data: generateDayWiseTimeSeries(1, 18),
      },
      {
        name: "Series B",
        data: generateDayWiseTimeSeries(1, 18),
      },
    ],
  },
]);
const options = {
  chart: {
    type: "area",
    stacked: false,
    height: 350,
    zoom: {
      type: "x",
      enabled: true,
      autoScaleYaxis: true,
    },
    toolbar: {
      autoSelected: "zoom",
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 0,
  },
  title: {
    text: "Stock Price Movement",
    align: "left",
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.5,
      opacityTo: 0,
      stops: [0, 90, 100],
    },
  },
  yaxis: {
    labels: {
      formatter: function (val) {
        return (val / 1000000).toFixed(0);
      },
    },
    title: {
      text: "Price",
    },
  },
  xaxis: {
    type: "datetime",
  },
  tooltip: {
    shared: false,
    y: {
      formatter: function (val) {
        return (val / 1000000).toFixed(0);
      },
    },
  },
};
</script>

<template>
  <div class="container px-4 mx-auto mt-10">
    <div class="w-[790px] bg-black p-8 rounded-[20px]">
      <table class="text-left text-white">
        <thead>
          <tr class="text-sm font-medium whitespace-nowrap text-white-rgba">
            <td class="pr-[52px]">Trading pair</td>
            <td class="pr-[52px]">Ask price</td>
            <td class="pr-[52px]">Bid price</td>
            <td class="pr-[52px]">Spread</td>
            <td class="pr-[52px]">Market</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="flex flex-col">
                <span class="font-medium">EUR/USD</span>
                <div class="flex items-center gap-1">
                  <span class="text-xs text-primary">+0.05%</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                  >
                    <path
                      d="M4.9958 0.820007C5.42205 0.820007 5.81664 1.03709 6.04247 1.38626L6.08539 1.45792L9.04372 6.56209L9.06955 6.61459C9.14346 6.79737 9.17308 6.99503 9.156 7.19144C9.13893 7.38785 9.07563 7.57744 8.97129 7.74472C8.86695 7.912 8.72452 8.05222 8.55564 8.15394C8.38676 8.25566 8.19621 8.31599 7.99955 8.33001L7.91664 8.33334H2.0833L2.06289 8.33209L2.01622 8.33292C1.83064 8.32337 1.64952 8.27257 1.48605 8.1842C1.32257 8.09583 1.18086 7.97213 1.07122 7.82209L1.0258 7.75542C0.92657 7.59952 0.863143 7.42355 0.840088 7.24018C0.817032 7.05682 0.834922 6.87063 0.892468 6.69501L0.922468 6.61417L0.947468 6.56209L3.90247 1.46501C4.01055 1.2696 4.169 1.10672 4.36135 0.993286C4.55369 0.879856 4.77292 0.820023 4.99622 0.820007H4.9958Z"
                      fill="#49D39F"
                    />
                  </svg>
                </div>
              </div>
            </td>
            <td class="text-primary">1.4451</td>
            <td class="text-primary">1.4458</td>
            <td>2</td>
            <td>graph</td>
            <td>
              <Button title="Trade" variant="default" />
            </td>
          </tr>
          <tr>
            <td class="">
              <div class="flex flex-col">
                <span class="font-medium">EUR/USD</span>
                <div class="flex items-center gap-1">
                  <span class="text-xs text-secondary">+0.05%</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                  >
                    <path
                      d="M5.0042 9.17999C4.57795 9.17999 4.18336 8.96291 3.95753 8.61374L3.91461 8.54208L0.956282 3.43791L0.930448 3.38541C0.856543 3.20263 0.82692 3.00497 0.843996 2.80856C0.861073 2.61215 0.924367 2.42256 1.02871 2.25528C1.13305 2.088 1.27548 1.94778 1.44436 1.84606C1.61324 1.74434 1.80379 1.68401 2.00045 1.66999L2.08336 1.66666L7.9167 1.66666L7.93711 1.66791L7.98378 1.66708C8.16936 1.67663 8.35048 1.72743 8.51395 1.8158C8.67743 1.90417 8.81914 2.02787 8.92878 2.17791L8.9742 2.24458C9.07343 2.40048 9.13686 2.57645 9.15991 2.75982C9.18297 2.94318 9.16508 3.12937 9.10753 3.30499L9.07753 3.38583L9.05253 3.43791L6.09753 8.53499C5.98945 8.7304 5.831 8.89328 5.63865 9.00671C5.44631 9.12014 5.22708 9.17998 5.00378 9.17999H5.0042Z"
                      fill="#E03528"
                    />
                  </svg>
                </div>
              </div>
            </td>
            <td class="text-secondary">1.4451</td>
            <td class="text-secondary">1.4458</td>
            <td class="">2</td>
            <td>graph</td>
            <td><Button title="Trade" variant="default" /></td>
          </tr>
          <tr>
            <td class="">
              <div class="flex flex-col">
                <span class="font-medium">EUR/USD</span>
                <div class="flex items-center gap-1">
                  <span class="text-xs text-primary">+0.05%</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                  >
                    <path
                      d="M4.9958 0.820007C5.42205 0.820007 5.81664 1.03709 6.04247 1.38626L6.08539 1.45792L9.04372 6.56209L9.06955 6.61459C9.14346 6.79737 9.17308 6.99503 9.156 7.19144C9.13893 7.38785 9.07563 7.57744 8.97129 7.74472C8.86695 7.912 8.72452 8.05222 8.55564 8.15394C8.38676 8.25566 8.19621 8.31599 7.99955 8.33001L7.91664 8.33334H2.0833L2.06289 8.33209L2.01622 8.33292C1.83064 8.32337 1.64952 8.27257 1.48605 8.1842C1.32257 8.09583 1.18086 7.97213 1.07122 7.82209L1.0258 7.75542C0.92657 7.59952 0.863143 7.42355 0.840088 7.24018C0.817032 7.05682 0.834922 6.87063 0.892468 6.69501L0.922468 6.61417L0.947468 6.56209L3.90247 1.46501C4.01055 1.2696 4.169 1.10672 4.36135 0.993286C4.55369 0.879856 4.77292 0.820023 4.99622 0.820007H4.9958Z"
                      fill="#49D39F"
                    />
                  </svg>
                </div>
              </div>
            </td>
            <td class="text-primary">1.4451</td>
            <td class="text-primary">1.4458</td>
            <td class="">2</td>
            <td>graph</td>
            <td>
              <Button title="Trade" variant="default" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div id="chart">
      <apexchart
        type="area"
        height="350"
        :options="options"
        :series="series"
      ></apexchart>
    </div>
  </div>
</template>

<style scoped></style>
