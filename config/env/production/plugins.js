module.exports = ({ env }) => ({
    graphql: {
      config: {
        endpoint: '/graphql',
        shadowCRUD: true,
        playgroundAlways: true,
        depthLimit: 10,
        amountLimit: 100,
        apolloServer: {
          tracing: false,
          introspection: true,
        },
      },
    },
    upload: {
        config: {
          provider: 'cloudinary',
          providerOptions: {
            cloud_name: env('CLOUDINARY_NAME'),
            api_key: env('CLOUDINARY_KEY'),
            api_secret: env('CLOUDINARY_SECRET'),
          },
          actionOptions: {
            upload: {},
            uploadStream: {},
            delete: {},
          },
        },
      },
      email: {
        config: {
          provider: 'strapi-provider-email-brevo',
          providerOptions: {
            apiKey: env('BREVO_API_KEY'),
          },
          settings: {
            defaultFrom: env('FROM_EMAIL'),
            defaultReplyTo: env('FROM_EMAIL'),
          },
        },
      },
});