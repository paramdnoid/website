<script lang="ts" setup>
import {definePageMeta} from "#imports";

definePageMeta({
  middleware: ['guest']
})
</script>

<template>
  <div>
    Page: guest
  </div>
</template>

<style scoped></style>