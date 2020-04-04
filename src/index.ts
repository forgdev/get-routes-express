import { Express } from 'express';

export interface Route {
  method: string;
  route: string;
}

export function getRoutes(app: Express): Route[] {
  return app._router.stack
    .map((stack: any) => {
      // resfactored by @Carlillo
      const routes = stack.route ? Object.keys(stack.route.methods) : [];
      return routes.map(key => ({
        method: key.toUpperCase(),
        path: stack.route.path,
      }));
    })
    .reduce((arr: any[], paths: any[]) => arr.concat(paths), [])
    .filter((stack: any) => stack);
}
