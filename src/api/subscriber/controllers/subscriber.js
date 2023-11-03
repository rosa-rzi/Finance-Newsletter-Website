'use strict';

/**
 * subscriber controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::subscriber.subscriber', ({ strapi }) => ({
    // wrap create to keep core logic in place (ie. create subscriber as normal plus send confirmation email)
    async create(ctx) {
        // default core action
        const { data, meta } = await super.create(ctx);
        const newSubscriberEmail = data.attributes.subscriber_email;

        const subject = "Welcome to The Wall St Raven Newsletter"
        const logoUrl = "https://res.cloudinary.com/dfbgn4spk/image/upload/v1697612263/logo_raven_22ae3cedce.png";
        const websiteUrl = 'www.WallStRaven.com/articles';
        const title = "Thank you for subscribing.";
        const body = "Welcome to the Wall St Raven! A digestible coverage of stocks, economics, investing, and trade ideas for everyday people and professionals. We aim to provide interesting stories while having the highest possible signal to noise ratio. We hope to be a delightful addition to your daily routine.";
        const closing = "The Wall St Raven"
  
      // Sends confirmation email using another service
        await strapi.service('api::email.email').sendConfirmationEmail({
          to: `${newSubscriberEmail}`,
          from: 'rosa.rezaei17@gmail.com',
          subject: 'Thank you for Subscribing to The Wall St Raven',
          html: `<!DOCTYPE html>
          <html>
          <head>
              <style>
                  body {
                      margin: 0;
                      padding: 0;
                      background-color: #ffffff;
                  }
                  .container {
                      width: 60%;
                      margin: 0 auto;
                      padding: 5px;
                  }
                  .header {
                      background-color: #ffffff;
                      display: flex;
                      border-bottom: 1px solid #ccc;
                      margin-top: 20px;
                      margin-bottom: 20px;
                  }
                  .name {
                      font-size: 18px;
                      margin: 10px;
                      color: #373840;
                  }
                  .title {
                      font-weight: 700;
                      font-size: 48px;
                  }
                  .closing {
                      font-size: 18px;
                      margin-top: 10px;
                      margin-bottom: 20px;
                  }
                  .body {
                      font-family: "Open Sans";
                      font-size: 18px;
                      margin-top: 20px;
                      margin-bottom: 20px;
                  }
                  .logo {
                      width: 50px;
                      height: 50px;
                      border-radius: 50%;
                      margin-bottom: 10px;
                  }
                  .button {
                      background-color: #000000;
                      border-radius: 8px;
                      color: #ffffff;
                      text-align: center;
                      text-decoration: none;
                      cursor: pointer;
                      display: inline-block;
                      font-size: 18px;
                      align-self: center;
                      line-height: 57px;
                      width: 60%;
                      margin-bottom: 40px;
                  }
                  .footer {
                      border-top: 1px solid #ccc;
                      text-align: center;
                      font-family: "Open Sans";
                      font-weight: 400;
                      color: rgb(123, 123, 138);
                      font-size: 15px;
                    }

                  @media (max-width: 700px) {
                      .container {
                        margin: 0 auto;
                        width: 100%;
                      }
                  }
              </style>
          </head>
          <body>
              <div class="container">
                  <div class="header">
                      <img class="logo" src="${logoUrl}" alt="Logo">
                      <div class="name">The WallStreet Raven</div>
                  </div>
                  <div class="title">${title}</div>
                  <div class="body">${body}</div>
                  <div class="closing">${closing}</div>
              </div>
          </body>
          </html>`,
        });
      
  
      return { data, meta};
    },
  }));
