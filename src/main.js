import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

store.subscribe((mutation, state) => {
  localStorage.setItem(
    "math-game-characters",
    JSON.stringify(state.characters)
  );
});

new Vue({
  router,
  store,
  beforeCreate() {
    this.$store.commit("INITIALIZE_STORE")
  },
  render: h => h(App)
}).$mount("#app");
