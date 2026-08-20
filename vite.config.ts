import shisoConfig from './node_modules/@umami/shiso/vite.config.ts';
import { defineConfig, type ConfigEnv, type Plugin, type UserConfig } from 'vite';

function docsRootRedirect(): Plugin {
  return {
    name: 'docs-root-redirect',
    configureServer(server) {
      server.middlewares.use((request, response, next) => {
        const url = new URL(request.url || '/', 'http://localhost');

        if (url.pathname !== '/docs') {
          next();
          return;
        }

        response.statusCode = 307;
        response.setHeader('Location', `/docs/${url.search}`);
        response.end();
      });
    },
  };
}

export default defineConfig(async (environment: ConfigEnv) => {
  const resolveShisoConfig = shisoConfig as (environment: ConfigEnv) => Promise<UserConfig>;
  const config = await resolveShisoConfig(environment);

  return {
    ...config,
    plugins: [docsRootRedirect(), ...(config.plugins || [])],
  };
});
