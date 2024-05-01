<template>
  <div class="pt-5">
    <div
      :class="[variants[variant], styles]"
      class="flex items-center cursor-pointer justify-center transition rounded-md"
    >
      <slot name="prefix" />
      <button class="font-medium">
        {{ title }}
      </button>
      <slot name="suffix" />
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";

defineProps({
  variant: String,
  title: String,
  styles: String,
});

const variants = {
  medium:
    "bg-blue-500 text-white hover:bg-blue-800 transition duration-300 px-4 py-2",
  default:
    "text-white rounded-lg border bg-transparent font-medium border-lime-600 text-sm outline-none py-2 px-5",
};
</script>
