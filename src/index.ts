import { Router } from "@vaadin/router";
import "./layouts/main_layout";
import "./pages/index/index";
import "./pages/sound/index";

const outlet = document.getElementById("root");
export const router = new Router(outlet);

router
  .setRoutes([
    {
      path: "/",
      component: "layout-main",
      children: [
        { path: "/", component: "page-index" },
        { path: "/sound", component: "page-sound" },
        { path: "/about", component: "page-about" },
      ],
    },
  ])
  .then();
