import Vue from "vue";
import Router from "vue-router";
import SelectCharacter from "./views/SelectCharacter.vue";
import CreateCharacter from "./views/CreateCharacter.vue";
import Game from "./views/Game.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      redirect: { name: "selectCharacter" }
    },
    {
      path: "/select-character",
      name: "selectCharacter",
      component: SelectCharacter
    },
    {
      path: "/create-character",
      name: "createCharacter",
      component: CreateCharacter
    },
    {
      path: "/game",
      name: "game",
      component: Game
    }
  ]
});
