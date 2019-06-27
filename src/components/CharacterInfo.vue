<template>
  <div>
    {{ activeCharacter.name }}
    <span class="badge">Lvl {{ activeCharacter.level }}</span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CharacterInfo",
  computed: {
    ...mapGetters([
      "activeCharacter"
    ])
  },
};
</script>
