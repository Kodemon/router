/// <reference types="react" />
/**
 * Sets up a route listener.
 *
 * @param preload - Preload function run before initial route is executed.
 * @param onError - Error handler function.
 *
 * @returns react view
 */
export declare function useRouter(preload: () => Promise<void>, onError: (err: any) => JSX.Element | undefined): JSX.Element | null;
