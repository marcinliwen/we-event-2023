const process = require("process");
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const handler = async (event, context) => {
  console.log("event: ", event);
  console.log("context", context);
  try {
    const { data } = JSON.parse(event.body).payload;

    console.log(data["form-name"]);
    let msg = {};
    switch (data["form-name"]) {
      case "contact":
        msg = {
          to: data.email, // Change to your recipient
          from: process.env.SENDER_EMAIL, // Change to your verified sender
          subject: "Thank you for contakt us!",
          text: "Thank you for contakt us!",
          name: data.name,
          template_id: "d-f8c24a04d6314ea9a6e035933de4d34f ",
        };
      case "stand_application_form":
        msg = {
          to: data.email, // Change to your recipient
          from: process.env.SENDER_EMAIL, // Change to your verified sender
          subject: "Thank you for submitting your application",
          text: "The organizer will be in touch with you shortly",
          name: data.name,
          template_id: "d-2497f4e79b5941ca9bd6a626cf94441d",
        };
    }

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
