<template>
  <div>
    <p>Select a character</p>

    <div class="characterList">
      <div class="characterTile"
           v-for="character in characters"
          :key="character.id">
        <button @click="selectCharacter(character)">
          {{ character.name }}
          <span class="badge">Lvl {{ character.level }}</span>
        </button>
        <button @click="deleteCharacter(character)">&times;</button>
      </div>
      <div class="characterTile">
        <button @click="newCharacter">New character</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "CharacterSelector",
  computed: {
    ...mapGetters([
      "characters"
    ])
  },
  methods: {
    ...mapActions([
      "setActiveCharacter",
      "deleteCharacter"
    ]),
    async selectCharacter(character) {
      await this.setActiveCharacter(character);
      this.$emit("characterSelected");
    },
    newCharacter() {
      this.$router.push({ name: "createCharacter" })
    }
  }
};
</script>

<style scoped>
  .characterTile {
    width: 300px;
    display: grid;
    grid-template-columns: auto 35px;
    grid-gap: 0.5rem;
  }

  button {
    width: 100%;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
</style>
