<template>
  <div class="navbar">
    <p class="logo">MSKDev</p>
    <div class="menu">
      <RouterLink :to="{ name: 'home' }" class="title">
        <i class="icon fa-solid fa-house fa-2xl"></i>
        <p class="text">HOME</p>
      </RouterLink>
      <RouterLink :to="{ name: 'apps' }" class="title">
        <i class="icon fa-solid fa-mobile-screen fa-2xl"></i>
        <p class="text">APPS</p>
      </RouterLink>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
</script>

<style lang="scss" scoped>
.navbar {
  @apply h-24 bg-main-green-dk shadow-lg flex justify-between;

  .logo {
    @apply flex items-center text-white text-3xl px-4 font-bold;
  }
  .menu {
    @apply flex;
  }

  .title {
    @apply flex items-center text-white px-4;

    &:hover {
      @apply text-black transition-colors;
    }
  }

  .icon {
    @apply mr-4;
  }

  .text {
    @apply text-2xl uppercase;
  }
}
</style>
