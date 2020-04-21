import React from "react";
import { router, Route } from "router";

const About: React.FC = () => {
  return (
    <div>
      <div>You are now on the about screen!</div>
      <button
        onClick={() => {
          router.goTo("/");
        }}
      >
        Go to Home
      </button>
    </div>
  );
};

router.register([
  new Route(About, {
    id: "about",
    path: "/about",
  }),
]);
