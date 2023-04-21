import { defineConfig } from 'cypress';
import { SERVER_FULL_URL } from './src/server.env';
import coverage from '@cypress/code-coverage/task';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      coverage(on, config);
      return config;
    },
    baseUrl: SERVER_FULL_URL,
  },
});
