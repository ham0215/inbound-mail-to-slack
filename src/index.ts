//import rp = require("request-promise");

/**
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
exports.sendgridWebhook = (req: any, res: any) => {
  console.log(req);
  /**
  const options = {
    uri: process.env.WEBHOOK,
    method: "POST",
    body: {
      text: 'hogehoge',
      chanel: "#sendgrid"
    },
    json: true
  }
  rp(options).then(function (repos: any) {
    console.error(repos);
  }).error(function (err: any) {
    console.error(err);
  })
  */
};