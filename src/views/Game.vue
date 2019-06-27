<template>
  <div>
    <MultiplicationQuiz @rightAnswer="rightAnswer" />

    <StepDisplay class="my-5" />

    <CharacterInfo class="text-center" />
  </div>
</template>

<script>
import MultiplicationQuiz from "@/components/MultiplicationQuiz.vue";
import StepDisplay from "@/components/StepDisplay.vue";
import CharacterInfo from "@/components/CharacterInfo.vue";
import { mapGetters, mapActions } from "vuex";

import store from "../store.js";

export default {
  name: "game",
  components: {
    MultiplicationQuiz,
    StepDisplay,
    CharacterInfo
  },
  computed: {
    ...mapGetters([
      "activeCharacter",
      "step"
    ])
  },
  methods: {
    ...mapActions([
      "levelUp",
      "setActiveCharacter",
      "stepUp"
    ]),
    async rightAnswer() {
      if (this.step < 9) {
        await this.stepUp();
      } else if (this.step === 9) {
        await this.levelUp();
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    if (store.getters.activeCharacter === null) {
      next({ name: "selectCharacter" });
    } else {
      next();
    }
  }
};
</script>
