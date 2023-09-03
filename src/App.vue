<template>
  <div class="main">
    <SiteNavigation />
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import SiteNavigation from "./components/SiteNavigation.vue";
</script>

<style lang="scss" scoped>
.main {
  @apply min-h-screen font-Roboto bg-main-green-li;
}
</style>
