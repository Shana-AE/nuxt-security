import { defineNuxtConfig } from 'nuxt/config'
import NuxtSecurity from '../src/module'

export default defineNuxtConfig({
  modules: [NuxtSecurity],

  // Per route configuration
  routeRules: {
    'secret': {
      security: {
        rateLimiter: {
          tokensPerInterval: 2,
          interval: 'hour',
        }
      },
      headers: {
        xXSSProtection: '1'
      },
    },
  },

  // Global configuration
  security: {
    headers: {
      xXSSProtection: '0'
    },
    rateLimiter: {
      tokensPerInterval: 3,
      interval: 'day'
    }
  },
})
