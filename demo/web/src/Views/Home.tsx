import React from "react";
import { router, Route } from "router";

import { Link } from "../Components/Link";

const Home: React.FC = () => {
  return (
    <div>
      <div>You are now on the home screen!</div>
      <Link to="/about">Go to About</Link>
    </div>
  );
};

router.register([
  new Route(Home, {
    id: "home",
    path: "/",
  }),
]);
