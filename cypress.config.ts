import { defineConfig } from 'cypress'

export default defineConfig({
  viewportHeight: 740,
  viewportWidth: 360,
  env: {
    BASE_URL: 'http://localhost:4200',
  },
  e2e: {
    'baseUrl': 'http://localhost:4200',
  },
})
