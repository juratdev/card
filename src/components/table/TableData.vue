<script setup>
import { defineProps } from "vue";

defineProps({
  variant: String,
  title: String,
  styles: String,
});
const variants = {
  primary:
      "pr-[48px]",
  secondary:
      "text-secondary",
  default:
      "text-primary",
};
</script>

<template>
  <td :class="[variants[variant], styles]">
    <slot name="prefix" />
    {{title}}
    <slot/>
    <slot name="suffix" />
  </td>
</template>

<style scoped>

</style>