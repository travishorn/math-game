<template>
  <div>
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <CharacterSelector @characterSelected="startGame" />
  </div>
</template>

<script>
// @ is an alias to /src
import CharacterSelector from "@/components/CharacterSelector.vue";

export default {
  name: "selectCharacter",
  components: {
    CharacterSelector
  },
  methods: {
    startGame() {
      this.$router.push({ name: "game" });
    }
  }
};
</script>
