const process = require("process");
const sgMail = require("@sendgrid/mail");

const myEmail = process.env.SENDER_EMAIL;
console.log(myEmail);
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event) => {
  const { data } = JSON.parse(event.body).payload;
  console.log(`Received a submission: ${data.email}`);
  console.log("target: ", data["form-name"]);
  console.log("data", data);

  const is_contact = data.referrer.match(/(\/contact)/);
  const msg = {
    to: data.email,
    from: process.env.SENDER_EMAIL, // Change to your verified sender
    subject: is_contact
      ? "Thank you for contact us"
      : "Thank you for submitting your application",
    text: "The organizer will be in touch with you shortly",
    template_id: is_contact
      ? "d-f8c24a04d6314ea9a6e035933de4d34f"
      : "d-2497f4e79b5941ca9bd6a626cf94441d",
    dynamicTemplateData: {
      name: data.contact_person,
    },
  };

  console.log("msg", msg);

  await sgMail.send(msg);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Email sent" }),
  };
};
