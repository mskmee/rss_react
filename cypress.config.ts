import { defineConfig } from 'cypress';
import { SERVER_FULL_URL } from './src/server.env';

export default defineConfig({
  e2e: {
    baseUrl: SERVER_FULL_URL,
  },
});
