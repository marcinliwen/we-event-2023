const process = require("process");
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event, context) => {
  console.log("event: ", event);
  console.log("context", context);
  const { data } = JSON.parse(event.body).payload;

  console.log(data["form-name"]);

  const msg = {
    to: data.email,
    from: process.env.SENDER_EMAIL, // Change to your verified sender
    subject: "Thank you for submitting your application",
    text: "The organizer will be in touch with you shortly",
    template_id: "d-2497f4e79b5941ca9bd6a626cf94441d",
    dynamicTemplateData: {
      name: data.contact_person,
    },
  };
  console.log(`Received a submission: ${data.email}`);
  await sgMail.send(msg);
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Email sent" }),
  };
};
