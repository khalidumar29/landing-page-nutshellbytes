import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json({ message: "API is working", success: true });
  }

  if (req.method === "POST") {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !phone || !subject || !message) {
      return res
        .status(400)
        .json({ error: "All fields are required", success: false });
    }

    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: subject,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
      };

      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent: " + info.response);

      return res
        .status(200)
        .json({ message: "Email sent successfully", success: true });
    } catch (error) {
      console.error("Error sending email:", error);
      return res
        .status(500)
        .json({ error: "Internal Server Error", success: false });
    }
  }

  return res.status(405).json({ error: "Method Not Allowed", success: false });
}
