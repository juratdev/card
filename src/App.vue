<script setup>
import { ref } from 'vue';
import Button from "./components/Button.vue";
import Graph from "./components/Graph.vue";
import TableData from "./components/table/TableData.vue";

const items = ref([

  {name: 'Trading pair',},
  {name: 'Ask price',},
  {name: 'Bid price',},
  {name: 'Spread',},
  {name: 'Market',},
  {name: 'Action'},
  ]);

const headers = ref([
  {
    title: 'EUR/USD',
    percentage: {
      increase: true,
      value: 0.5
    },
    icon: './public/rise.svg',
    num1: '1.4451',
    num2: '1.4458',
    num3: '2',
  },
  {
    title: 'EUR/USD',
    percentage: {
      increase: false,
      value: 0.04
    },
    icon: './public/down.svg',
    num1: '49.6758',
    num2: '49.6758',
    num3: '2',
  },
  {
    title: 'EUR/USD',
    percentage: {
      increase: false,
      value: 0.04
    },
    icon: './public/down.svg',
    num1: '49.6758',
    num2: '49.6758',
    num3: '2',
  },
  {
    title: 'EUR/USD',
    percentage: {
      increase: true,
      value: 0.5
    },
    icon: './public/rise.svg',
    num1: '1.4451',
    num2: '1.4458',
    num3: '2',
  }
]);

function getPercentageLabel(value) {
  return value >= 0.05 ? `+ ${ value } %` : `- ${value} %`
}
</script>

<template>
  <div class="container px-4 mx-auto mt-10">
    <div class="w-fit bg-black p-8 rounded-[20px]">
      <table class="text-left text-white">
        <thead>
          <tr class="text-sm font-medium whitespace-nowrap text-white-rgba">
            <td v-for="(item, index) in items" :key="index" class="pr-12 table_data">
              {{ item.name }}
            </td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in headers" :key="index">
            <TableData>
              <template #title>
                <span>{{ item.title }}</span>
              </template>
              <template #content>
                  <div class="flex items-center gap-1">
                    <span :class="{'text-primary': item.percentage.increase, 'text-red-500': !item.percentage.increase }" v-if="item.percentage.value">{{ getPercentageLabel(item.percentage.value) }}</span>
                    <img v-if="item.icon" :src="item.icon" alt="image">
                  </div>
              </template>
            </TableData>
            <td :class="{'text-primary': item.num1 <= '1.4451', 'text-red-500': item.num1 >= '49.6758' }">
              {{ item.num1 }}
            </td>
            <td :class="{'text-primary': item.num1 <= '1.4451', 'text-red-500': item.num1 >= '49.6758' }">
              {{ item.num2 }}
            </td>
            <td>
              {{ item.num3 }}
            </td>
            <td>
              <Graph :data="[20,700,200, 400, 800, 50,79, 400]" :percentage="item.percentage" />
            </td>
            <td class="pl-10">
              <Button variant="default" title="Trade" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>


  </div>
</template>

<style >
.table_data:last-child {
  padding-left: 40px;
}
</style>
