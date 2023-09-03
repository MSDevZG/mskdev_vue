<template>
  <div class="app">
    <div class="title">{{ game.name }}</div>
    <div class="privacy" v-html="game.policy_privacy" />
  </div>
</template>

<script>
import GAME_DATA from "../assets/data/games.js";

export default {
  name: "AppView",

  data() {
    return {
      game: {},
    };
  },

  mounted() {
    this.game = GAME_DATA.GAMES.find((game) => game.id == this.$route.query.id);
  },
};
</script>

<style lang="scss" scoped>
.app {
  @apply max-w-7xl mx-auto flex flex-col;

  .privacy {
    @apply p-5 text-white;

    &:deep(h1) {
      @apply font-bold text-4xl py-2;
    }

    &:deep(h2) {
      @apply text-2xl mt-2 font-bold;
    }

    &:deep(p) {
      @apply text-xl py-2;
    }
  }
}
</style>
