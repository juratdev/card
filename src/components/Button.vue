<template>
  <div>
    <div
      class="bg-gradient-to-r from-gradient-primary to-gradient-secondary w-[80px] h-[38px] rounded-lg relative"
    >
      <div
        :class="[variants[variant], styles]"
        class="flex items-center cursor-pointer justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 transition"
      >
        <slot name="prefix" />
        <button class="font-medium">
          {{ title }}
        </button>
        <slot name="suffix" />
      </div>
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
    "text-white rounded-lg border-0 bg-black font-medium text-sm outline-none py-2 px-5",
};
</script>
