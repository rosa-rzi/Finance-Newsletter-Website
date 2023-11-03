'use strict';

/**
 * email service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::email.email', ({ strapi }) => ({
    async sendConfirmationEmail({ to, from, subject, html }) {
      await strapi.plugins['email'].services.email.send({
        to,
        subject,
        html,
        from
      });
    },
  }));