import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import BoardList from "@/components/BoardList";
import ShowBoard from "@/components/ShowBoard";
import AddBoard from "@/components/AddBoard";
import EditBoard from "@/components/EditBoard";

export default new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "BoardList",
      component: BoardList
    },
    {
      path: "/show-board/:id",
      name: "ShowBoard",
      component: ShowBoard
    },
    {
      path: "/add-board",
      name: "AddBoard",
      component: AddBoard
    },
    {
      path: "/edit-board/:id",
      name: "EditBoard",
      component: EditBoard
    }
  ]
});
