<template>
  <div class="apps">
    <GameBlock
      v-for="app in apps"
      :id="app.id"
      :title="app.name"
      :imageDesktop="app.imageDesktop"
      :imageMobile="app.imageMobile"
    />
  </div>
</template>

<script>
import GameBlock from "../components/small/GameBlock.vue";

import square_banner_desktop from "../assets/img/square_banner_desktop.png";
import square_banner_mobile from "../assets/img/square_banner_mobile.png";

export default {
  name: "AppsView",

  components: {
    GameBlock,
  },

  data() {
    return {
      apps: [
        {
          id: "squarehardestgame",
          name: "Square - Hardest Game",
          imageDesktop: square_banner_desktop,
          imageMobile: square_banner_mobile,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.apps {
  @apply max-w-7xl mx-auto flex flex-col items-center;
}
</style>
