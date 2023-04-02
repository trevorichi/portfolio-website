import sendgrid from "@sendgrid/mail";
import { Elsie_Swash_Caps } from "next/font/google";
import { FaExclamationCircle } from "react-icons/fa";

sendgrid.setApiKey(process.env.SEND_GRID_API_KEY as string);

export default function sendEmail(req: any, res: any) {
 let emailFailure:string = "";
 sendgrid
    .send({
      to: "trevorichi@gmail.com", // Your email where you'll receive emails
      from: "trevor.santoli.portfolio.website@gmail.com", // your website email address here
      subject: `Email from ${req.body.email}! Subject:${req.body.subject}`,
      text: req.body.message,
    })
    .then(() => {
      emailFailure = "Email sent";
      console.log(emailFailure);
      return res.status(201).json({ error: "" });
    })
    .catch((error) => {
      emailFailure = "Email failed to send";
      console.error(error);
      return res.status(400).json({ error: "Failed to send email" });
    });
}
