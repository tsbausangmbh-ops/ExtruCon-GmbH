declare module "prerender-node" {
  interface PrerenderMiddleware {
    set(key: string, value: string): PrerenderMiddleware;
    (req: any, res: any, next: any): void;
  }
  const prerender: PrerenderMiddleware;
  export default prerender;
}
