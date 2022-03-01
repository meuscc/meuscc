import { Router } from "@vaadin/router";
import "./pages/index/index";
import "./pages/about";
import "./pages/sound/index";

const outlet = document.getElementById("root");
export const router = new Router(outlet);

router
  .setRoutes([
    {
      path: "/",
      component: "page-index",
      children: [
        { path: "/about", component: "page-about" },
        { path: "/sound", component: "page-sound" },
      ],
    },
  ])
  .then();
