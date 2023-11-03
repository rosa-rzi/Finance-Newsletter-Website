module.exports = ({ env }) => ({
  // ...
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
        defaultFrom: 'rosa.rezaei17@gmail.com',
        defaultReplyTo: 'rosa.rezaei17@gmail.com',
      },
    },
  },
  // ...
});