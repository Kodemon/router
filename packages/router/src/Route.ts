import { Policy } from "./Policy";
import { pathToRegexp } from "./Utils";

export class Route {
  public readonly components: any[] = [];

  public readonly id: string;
  public readonly path: string;
  public readonly regExp: RegExp;
  public readonly params: RouteParameter[];
  public readonly policies: Policy[];

  public readonly before?: () => Promise<any>;
  public readonly after?: () => void;

  /**
   * Creates a new Route instance.
   *
   * @param components - Components to render when route is executed.
   * @param options - Routing options.
   */
  constructor(components: any | any[], options: RouteOptions) {
    this.components = Array.isArray(components) ? components : [components];

    this.id = options.id;
    this.path = options.path;
    this.regExp = pathToRegexp(options.path);
    this.params = parseParams(options.path);
    this.policies = options.policies || [];
    this.before = options.before;
    this.after = options.after;
  }

  /**
   * Matches the route against provided path.
   *
   * @param path - Path to match against.
   *
   * @returns matched regex path with params
   */
  public match(path: string): any {
    return this.regExp.exec(path);
  }
}

/*
 |--------------------------------------------------------------------------------
 | Helper Functions
 |--------------------------------------------------------------------------------
*/

/**
 * Parse parameters for the provided path.
 *
 * @param path - Path to extract routing parameters from.
 *
 * @returns route parameters
 */
function parseParams(path: string): RouteParameter[] {
  return path.split("/").reduce((list: RouteParameter[], next: string) => {
    if (next.match(/:/)) {
      list.push({
        name: next.replace(":", ""),
        value: undefined
      });
    }
    return list;
  }, []);
}

/*
 |--------------------------------------------------------------------------------
 | TypeScript Definitions
 |--------------------------------------------------------------------------------
 */

type RouteOptions = {
  /**
   * Identifier, useful for determine active route in app components.
   */
  id: string;

  /**
   * Raw routing path, eg. /users/:slug
   */
  path: string;

  /**
   * Policies to run before executing the route.
   */
  policies?: Policy[];

  /**
   * Executes before the route is rendered.
   */
  before?(...args: any[]): Promise<any>;

  /**
   * Executes after the routed has been rendered.
   */
  after?(...args: any[]): void;
};

/**
 * Key/Value parameter definition.
 */
export type RouteParameter = {
  name: string;
  value?: string;
};
