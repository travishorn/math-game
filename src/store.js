import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    step: 0,
    activeCharacter: null,
    characters: []
  },
  getters: {
    step: state => state.step,
    activeCharacter: state => state.activeCharacter,
    characters: state => state.characters
  },
  actions: {
    createCharacter({ commit, getters }, character) {
      const largestId = getters.characters.reduce((acc, cur) => {
        if (cur.id > acc) acc = cur.id;
        return acc;
      }, 0);

      return new Promise(resolve => {
        commit("PUSH_CHARACTER", {
          id: largestId + 1,
          name: character.name,
          created: new Date(),
          level: 1
        });
        resolve();
      });
    },
    setActiveCharacter({ commit }, character) {
      return new Promise(resolve => {
        commit("SET_ACTIVE_CHARACTER", character);
        resolve();
      });
    },
    deleteCharacter({ commit }, character) {
      return new Promise(resolve => {
        commit("DELETE_CHARACTER", character);
        resolve();
      });
    },
    levelUp({ commit, getters }) {
      return new Promise(resolve => {
        commit("SET_ACTIVE_CHARACTER_LEVEL", getters.activeCharacter.level + 1);
        commit("SET_STEP", 0);
        resolve();
      });
    },
    stepUp({ commit, getters }) {
      return new Promise(resolve => {
        commit("SET_STEP", getters.step + 1);
        resolve();
      });
    }
  },
  mutations: {
    INITIALIZE_STORE(state) {
      if (localStorage.getItem("math-game-characters")) {
        state.characters = JSON.parse(
          localStorage.getItem("math-game-characters")
        );
      }
    },
    PUSH_CHARACTER(state, character) {
      state.characters.push(character);
    },
    SET_ACTIVE_CHARACTER(state, character) {
      state.activeCharacter = character;
    },
    DELETE_CHARACTER(state, characterToDelete) {
      state.characters = state.characters.filter(character => {
        return character.id !== characterToDelete.id;
      });
    },
    SET_ACTIVE_CHARACTER_LEVEL(state, level) {
      state.activeCharacter.level = level;
    },
    SET_STEP(state, step) {
      state.step = step;
    }
  }
});
