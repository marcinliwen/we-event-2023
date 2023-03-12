/* const process = require("process");
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const handler = async (event) => {
  console.log("event: ", event);
  try {
    const { data } = JSON.parse(event.body).payload;

    const msg = {
      to: "test@example.com", // Change to your recipient
      from: process.env.SENDER_EMAIL, // Change to your verified sender
      subject: "Sending with SendGrid is Fun",
      text: "and easy to do anywhere, even with Node.js",
      html: "<strong>and easy to do anywhere, even with Node.js</strong>",
    };
    console.log(`Received a submission: ${data.email}`);
    await sgMail
      .send(msg)
      .then(() => {
        console.log("Email sent");
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    return { statusCode: 422, body: String(error) };
  }
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Email sent" }),
  };
};

module.exports = { handler };
 */
