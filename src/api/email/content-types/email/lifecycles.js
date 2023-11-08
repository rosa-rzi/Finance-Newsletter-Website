const sanitizeHtml = require('sanitize-html')
// This file contains  the email content
module.exports = {
    async afterCreate(event) {
        const {result} = event;
        const title = result.title;
        const description = result.description;
        const body = result.body;
        const formattedBody = body.split('\n\n').map(paragraph => `<p class="body">${sanitizeHtml(paragraph)}</p>`).join('');
        const imageUrl = result.splash[0].url;
        const emails = await strapi.entityService.findMany('api::subscriber.subscriber', {
            fields: [`subscriber_email`],
        });
        const logoUrl = "https://res.cloudinary.com/dfbgn4spk/image/upload/v1697612263/logo_raven_22ae3cedce.png";
        const twitterIcon= "https://res.cloudinary.com/dfbgn4spk/image/upload/v1699386345/twitter_1_d2b142262c.png";
        const articleUrl = `https://wallstraven.com/posts/${result.slug}`;
        emails.forEach( async email => {
            try {
                await strapi.plugins['email'].services.email.send(
                    {to: `${email.subscriber_email}`,
                    from: `${process.env.FROM_EMAIL}`,
                    subject: `${title}`,
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
                            .description {
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
                            .image {
                                max-width: 100%;
                                height: auto;
                                border-radius: 20px;
                            }
                            .logo {
                                width: 50px;
                                height: 50px;
                                border-radius: 50%;
                                margin-bottom: 10px;
                            }
                            .twitterIcon {
                                width: 25px;
                                height: 25px;
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
                                width: 100%;
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
                            <a href="${articleUrl}" target="_blank"
                                <p>Read Online</p>
                            </a>
                            <div class="title">${title}</div>
                            <div class="description">${description}</div>
                            <img class="image" src="${imageUrl}" alt="Newsletter Image">
                            <div class="body">${formattedBody}</div>
                            <a href="https://wallstraven.com/articles" class="button">Keep reading</a>
                            <div class="footer"> You are subscribed to receiving emails from The WallStreet Raven - 
                                <a href="/unsubscribe">
                                Unsubscribe
                                </a>
                          </div>
                        </div>
                    </body>
                    </html>`}
                )
            } catch (e) {
                console.log("Error sending email: " + e);
            }
        }
        )
        }   
    }