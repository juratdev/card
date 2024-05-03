<script setup>
import { ref } from "vue";
import Button from "./components/Button.vue";
import Graph from "./components/Graph.vue";
import Table from "./components/Table.vue";

const headers = ref([
  { title: "Trading pair", key: "trading_pair" },
  { title: "Ask price", key: "ask_price" },
  { title: "Bid price", key: "bid_price" },
  { title: "Spread", key: "spread" },
  { title: "Market", key: "market" },
  { title: "Action", key: "action" },
]);

const data = ref([
  {
    title: "EUR/USD",
    percentage: {
      increase: true,
      value: 0.5,
    },
    icon: "/rise.svg",
    num1: "1.4451",
    num2: "1.4458",
    num3: "2",
  },
  {
    title: "EUR/USD",
    percentage: {
      increase: false,
      value: 0.04,
    },
    icon: "/down.svg",
    num1: "49.6758",
    num2: "49.6758",
    num3: "2",
  },
  {
    title: "EUR/USD",
    percentage: {
      increase: false,
      value: 0.04,
    },
    icon: "/down.svg",
    num1: "49.6758",
    num2: "49.6758",
    num3: "2",
  },
  {
    title: "EUR/USD",
    percentage: {
      increase: true,
      value: 0.5,
    },
    icon: "/rise.svg",
    num1: "1.4451",
    num2: "1.4458",
    num3: "2",
  },
]);

function getPercentageLabel(value) {
  return value >= 0.05 ? `+ ${value} %` : `- ${value} %`;
}
</script>

<template>
  <div class="w-full h-screen bg-black">
    <div class="container px-4 mx-auto pt-10">
      <Table class="statistic-table" :headings="headers" :data="data">
        <template #trading_pair="{ data }">
          <span class="inline-flex flex-col">
            <span>{{ data.title }}</span>
            <span class="inline-flex items-center gap-1">
              <span>{{ getPercentageLabel(data.percentage.value) }}</span>
              <img v-if="data.icon" :src="data.icon" alt="image" />
            </span>
          </span>
        </template>
        <template #ask_price="{ data }">
          <span
            :class="{
              'text-primary': data.num1 <= '1.4451',
              'text-red-500': data.num1 >= '49.6758',
            }"
            >{{ data.num2 }}</span
          >
        </template>
        <template #bid_price="{ data }">
          <span
            :class="{
              'text-primary': data.num1 <= '1.4451',
              'text-red-500': data.num1 >= '49.6758',
            }"
            >{{ data.num1 }}</span
          >
        </template>
        <template #spread="{ data }">
          <span>{{ data.num3 }}</span>
        </template>
        <template #market="{ data }">
          <Graph
            :data="[20, 700, 200, 400, 800, 50, 79, 400]"
            :percentage="data.percentage"
          />
        </template>
        <template #action="{ data }">
          <Button variant="default" title="Trade" />
        </template>
      </Table>
    </div>
  </div>
</template>

<style>
.table_head {
  padding: 32px 32px 0 32px;
}

.table_data {
  padding: 0 32px;
}

.statistic-table tbody tr:last-child td {
  padding-bottom: 14px;
}
</style>
