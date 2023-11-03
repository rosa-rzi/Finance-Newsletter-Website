module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  admin: {
    path: '/admin',
    build: {
      backend: env('ADMIN_BUILD_BACKEND', 'https://competent-books-316ac5d638.strapiapp.com/admin')
    }
  }
});
