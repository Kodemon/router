import React from "react";
import { Text, View } from "react-native";
import { router } from "router";
import { useRouter } from "router-react";

/*
 |--------------------------------------------------------------------------------
 | Screens
 |--------------------------------------------------------------------------------
 |
 | Import screens we want made available to the application. In this 
 | implementation the screen components register themselves with the router
 | directly so all we have to do is import them individually.
 |
 | Another approach is to have a index.ts file in the root of your ./Screens
 | folder and register all your routes there. Then simply import ./Screens here
 | instead of each individual screen.
 |
 */

import "./Screens/Home";
import "./Screens/About";

/*
 |--------------------------------------------------------------------------------
 | Application Wrapper
 |--------------------------------------------------------------------------------
 |
 | This is where your application starts. The router provides the requested view
 | when a route is triggered.
 |
 */

export const App: React.FC = () => {
  const view = useRouter(router, preload, error);
  if (!view) {
    return (
      <View>
        <Text>Loading App</Text>
      </View>
    );
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
    <View>
      <Text>Application error! {JSON.stringify(err, null, 2)}</Text>
    </View>
  );
}
