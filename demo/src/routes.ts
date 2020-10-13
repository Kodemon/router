import About from "./About.svelte";
import Home from "./Home.svelte";
import { Route, router } from "./router";

router.register([
  new Route(Home, {
    id: "home",
    path: "/"
  }),
  new Route(About, {
    id: "about",
    path: "/about"
  })
]);
