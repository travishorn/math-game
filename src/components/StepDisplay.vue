<template>
  <div>
    <svg viewBox="0 0 1000 100">
      <rect width="95" height="5" transform="translate(0 95)" />
      <rect width="95" height="5" transform="translate(100 95)" />
      <rect width="95" height="5" transform="translate(200 95)" />
      <rect width="95" height="5" transform="translate(300 95)" />
      <rect width="95" height="5" transform="translate(400 95)" />
      <rect width="95" height="5" transform="translate(500 95)" />
      <rect width="95" height="5" transform="translate(600 95)" />
      <rect width="95" height="5" transform="translate(700 95)" />
      <rect width="95" height="5" transform="translate(800 95)" />
      <rect width="95" height="5" transform="translate(900 95)" />
      <circle cy="47.5" r="42.5" :style="spriteStyle" />
    </svg>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "StepDisplay",
  computed: {
    ...mapGetters([
      "step"
    ]),
    stepScale() {
      return ((this.step * 100) + 47.5);
    },
    spriteStyle() {
      return {
        transform: `translate(${this.stepScale}px, 0)`
      };
    }
  }
};
</script>

<style scoped>
  circle {
    transition: transform 1s;
    fill: #D9491D;
  }

  rect { fill: #525F7F; }
</style>
