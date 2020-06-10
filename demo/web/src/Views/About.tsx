import React from "react";
import { router, Route } from "router";

import { Link } from "../Components/Link";

const About: React.FC = () => {
  return (
    <div>
      <div>You are now on the about screen!</div>
      <Link to="/">Go to Home</Link>
    </div>
  );
};

router.register([
  new Route(About, {
    id: "about",
    path: "/about",
  }),
]);
