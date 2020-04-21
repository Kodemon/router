import { createMemoryHistory } from "history";

import { Router } from "./Router";

/*
 |--------------------------------------------------------------------------------
 | Exports
 |--------------------------------------------------------------------------------
 */

export * from "./Policy";
export * from "./Route";

export const router = new Router(createMemoryHistory());

/*
 |--------------------------------------------------------------------------------
 | Development Debug
 |--------------------------------------------------------------------------------
 |
 | When router is not running production, we attach it to the native global
 | object for debugging purposes. Allowing us to view its current instanced state
 | without having to console log in code.
 |
 */

if (process.env.NODE_ENV !== "production") {
  (global as any).router = router;
}
