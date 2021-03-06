"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const web_api_1 = require("@slack/web-api");
/**
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
exports.sendgridWebhook = (req, res) => {
    console.log('start sendgrid webhook');
    console.log(req.body);
    const web = new web_api_1.WebClient(process.env.SLACK_TOKEN);
    try {
        // Use the `chat.postMessage` method to send a message from this app
        web.chat.postMessage({
            channel: '#sendgrid',
            text: `hogehoge`,
        });
    }
    catch (error) {
        console.log(error);
    }
    console.log('end sendgrid webhook');
    res.status(200).send('ok');
};
//# sourceMappingURL=index.js.map