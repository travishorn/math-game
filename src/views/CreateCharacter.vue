<template>
  <div>
    <CharacterCreator @characterCreated="selectCharacter" />

    <router-link :to="{ name: 'selectCharacter' }"
                 tag="button">
      Cancel
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import CharacterCreator from "@/components/CharacterCreator.vue";

export default {
  name: "createCharacter",
  components: {
    CharacterCreator
  },
  methods: {
    selectCharacter() {
      this.$router.push({ name: "selectCharacter" });
    }
  }
};
</script>
