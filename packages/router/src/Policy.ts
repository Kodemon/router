import { Route } from "./Route";
import { Query } from "./Query";
import { ValueStore } from "./ValueStore";

export const policyOptions: PolicyResponses = {
  /**
   * Generates a policy accept response.
   *
   * @returns accept response
   */
  accept(): PolicyResponse {
    return {
      status: "accept",
      data: {}
    };
  },

  /**
   * Generates a policy reject response.
   *
   * @param message - Message detailing the rejection.
   * @param data - Additional rejection data.
   *
   * @returns reject response
   */
  reject(message: string, data: any): PolicyResponse {
    return {
      status: "reject",
      data: {
        message,
        data
      }
    };
  },

  /**
   * Generates a policy redirect response.
   *
   * @param path - Redirect path.
   * @param isExternal - Should the redirect go to a 3rd party resource?
   *
   * @returns redirect response
   */
  redirect(path: string, isExternal = false): PolicyResponse {
    return {
      status: "redirect",
      data: {
        path,
        isExternal
      }
    };
  }
};

/*
 |--------------------------------------------------------------------------------
 | TypeScript Definitions
 |--------------------------------------------------------------------------------
 */

/**
 * Route policy executed before a route is committed to the router.
 *
 * @param policy - A list of policy responses.
 * @param state - Routers next state containing router, query, params and state.
 *
 * @returns policy response
 */
export type Policy = (policy: PolicyResponses, state: RouterState) => Promise<PolicyResponse>;

/**
 * Router state containing the route, query, params and history state.
 */
type RouterState = {
  route: Route;
  query: Query;
  params: ValueStore;
  state: ValueStore;
};

/**
 * List of methods that returns a valid policy response.
 */
type PolicyResponses = {
  accept(): PolicyResponse;
  reject(message: string, data: any): PolicyResponse;
  redirect(path: string, isExternal?: boolean): PolicyResponse;
};

/**
 * Policy response object.
 */
type PolicyResponse = {
  status: "accept" | "reject" | "redirect";
  data: any;
};
