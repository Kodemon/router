import React from "react";
import { router } from "router";
import { useRouter } from "router-react";

/*
 |--------------------------------------------------------------------------------
 | App
 |--------------------------------------------------------------------------------
 */

export const App: React.FC = () => {
  const view = useRouter(router, preload, error);
  if (!view) {
    return <div>Loading App</div>;
  }
  return view;
};

/*
 |--------------------------------------------------------------------------------
 | Preload
 |--------------------------------------------------------------------------------
 |
 | Preloader enables us to perform a set of operations before the initial route
 | is loaded. This is useful if you want to call back end services, or prepare
 | application code before launching the app.
 |
 | The app will be presented in loading state until this function is resolved.
 |
 */

async function preload(): Promise<void> {
  // preload ...
}

/*
 |--------------------------------------------------------------------------------
 | Error
 |--------------------------------------------------------------------------------
 |
 | When an error occurs during the routing process, they are sent to the error
 | handler method. This allows us to handle the error and report a result.
 |
 */

function error(err: any) {
  return (
    <div>
      Application error! <pre>{JSON.stringify(err, null, 2)}</pre>
    </div>
  );
}
