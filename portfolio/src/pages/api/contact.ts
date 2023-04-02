import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SEND_GRID_API_KEY as string);

export default function sendEmail(req: any, res: any) {
  sendgrid
    .send({
      to: "trevorichi@gmail.com", // Your email where you'll receive emails
      from: "trevor.santoli.portfolio.website@gmail.com", // your website email address here
      subject: `Email from ${req.body.email}! Subject:${req.body.subject}`,
      text: req.body.message,
    })
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });

  return res.status(200).json({ error: "" });
}
