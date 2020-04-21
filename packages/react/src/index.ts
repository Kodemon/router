import React, { useState, useEffect } from "react";

/**
 * Sets up a route listener with the given router.
 *
 * @remarks
 * This hook provides support for both the web and native based cmdo router.
 * Simply pass in the instance of the router being used in your environment.
 *
 * Go to https://github.com/cmdo/router for more details.
 *
 * @param router  - Router instance to use with this hook.
 * @param preload - Preload function run before initial route is executed.
 * @param onError - Error handler function.
 *
 * @returns react view
 */
export function useRouter(
  router: any,
  preload: () => Promise<void>,
  onError: (err: any) => JSX.Element | undefined
): JSX.Element | null {
  const [view, setView] = useState<JSX.Element | null>(null);

  useEffect(() => {
    const { pathname, search, state } = router.history.location;
    preload().then(() => {
      router.listen({
        render: async (route: any) => {
          let props: any = {};
          if (route.before) {
            props = await route.before();
          }
          setView(createReactElement([...route.components], props));
          if (route.after) {
            route.after();
          }
        },
        error: (err: any) => {
          const component = onError(err);
          if (component) {
            setView(component);
          }
        },
      });
      router.goTo(`${pathname}${search}`, state);
    });
  }, [preload, onError]);

  return view;
}

/*
 |--------------------------------------------------------------------------------
 | Utilities
 |--------------------------------------------------------------------------------
 */

/**
 * Get a compiled react element from a possible multiple route components.
 *
 * @param list - List of route components to compile.
 * @param props - The root properties to pass down.
 *
 * @returns react element
 */
function createReactElement(list: any[], props: any = {}): any {
  const Component = list.shift();
  if (list.length > 0) {
    return React.createElement(Component, props, createReactElement(list, props));
  }
  return React.createElement(Component, props);
}
