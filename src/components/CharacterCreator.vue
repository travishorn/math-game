<template>
  <div>
    <form @submit.prevent="submit">
      <input placeholder="Name" v-model="name">
      <button>Go</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "CharacterCreator",
  data() {
    return {
      name: ""
    };
  },
  methods: {
    ...mapActions([
      "createCharacter"
    ]),
    async submit() {
      await this.createCharacter({
        name: this.name
      });

      this.$emit("characterCreated");
    }
  }
};
</script>

<style scoped>
  button {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    margin-left: 1rem;
  }
</style>
