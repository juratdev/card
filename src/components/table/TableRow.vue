<script setup>
import { defineProps } from "vue";

defineProps({
  variant: String,
  title: String,
  styles: String,
});
const variants = {
  primary:
      "text-sm font-medium whitespace-nowrap text-white-rgba",
  default:
      "",
};
</script>

<template>
  <tr :class="[variants[variant], styles]">
    <slot name="prefix" />
    <slot/>
    <slot name="suffix" />
  </tr>
</template>

<style scoped>

</style>