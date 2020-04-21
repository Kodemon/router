import React from "react";
import { router, Route } from "router";

const Home: React.FC = () => {
  return (
    <div>
      <div>You are now on the home screen!</div>
      <button
        onClick={() => {
          router.goTo("/about");
        }}
      >
        Go to About
      </button>
    </div>
  );
};

router.register([
  new Route(Home, {
    id: "home",
    path: "/",
  }),
]);
