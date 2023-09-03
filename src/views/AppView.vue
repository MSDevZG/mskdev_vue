<template>
  <div class="xx">{{ this.game.name }}</div>
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

<style lang="scss" scoped></style>
