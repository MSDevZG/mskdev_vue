<template>
  <RouterLink :to="{ name: 'app', query: { id: id } }" class="game-block">
    <p class="title">{{ title }}</p>
    <div class="picture">
      <picture>
        <source media="(min-width:769px)" :srcset="imageDesktop" />
        <img class="img" :src="imageMobile" alt="game-block" />
      </picture>
    </div>
  </RouterLink>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  name: "GameBlock",
  props: {
    id: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },
    imageDesktop: {
      type: String,
      required: true,
    },
    imageMobile: {
      type: String,
      required: true,
    },
  },
  components: { RouterLink },
};
</script>

<style lang="scss" scoped>
.game-block {
  @apply p-4;

  &:hover {
    .title {
      @apply text-black;
    }

    .img {
      @apply scale-110;
    }
  }
  .title {
    @apply text-white mb-5 text-6xl font-bold transition duration-300 ease-in-out;
  }

  .picture {
    @apply overflow-hidden w-full h-full shadow-2xl rounded-lg;
  }

  .img {
    @apply transition duration-300 ease-in-out cursor-pointer;
  }
}
</style>
