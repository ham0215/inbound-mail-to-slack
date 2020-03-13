"use strict";

const functions = require("firebase-functions");
const rp = require("request-promise");

/**
 * Webhook that will be called each time received a new message in sendgrid and will post a message to Slack.
 */
exports.sendgridWebhook = functions.https.onRequest(
  async (req: any, res: any) => {
    console.log(req);
    console.log(res);
    try {
      await postToSlack("hoge");
      return res.end();
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send("Something went wrong while posting the message to Slack.");
    }
  }
);

/**
 * Post a message to Slack about the new GitHub commit.
 */
function postToSlack(message: string) {
  return rp({
    method: "POST",
    uri: functions.config().slack.webhook_url,
    body: {
      text: message,
      chanel: "#sendgrid"
    },
    json: true
  });
}
