<template>
  <div
    class="w-fit bg-black overflow-x-auto border border-black-rgba rounded-[20px]"
  >
    <table class="text-left text-white">
      <thead>
        <tr class="text-sm font-medium whitespace-nowrap text-white-rgba">
          <th v-for="head in headings" :key="head.title" class="table_head">
            {{ head.title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="item.title">
          <td v-for="head in headings" :key="head.title" class="table_data">
            <slot :name="head.key" :data="item" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  headings: Array,
  data: Array,
});
</script>

<style></style>
