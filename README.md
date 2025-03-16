````markdown
# 📧 Contact API Documentation

## 📌 Overview

This API handles form submissions by sending an email using Gmail's SMTP service. It supports **POST** requests to send emails and **GET** requests to check if the API is running.

## 📌 Endpoint:

### `POST /api/contact`

## 🛠 Supported Methods:

| Method | Description                                      |
| ------ | ------------------------------------------------ |
| `GET`  | Returns a message to verify the API is running   |
| `POST` | Sends an email with the provided contact details |

## 📝 Request Headers:

- `Content-Type: application/json`

## 📥 Request Body:

```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "phone": "+1234567890",
  "subject": "Inquiry about services",
  "message": "I would like to know more about your services."
}
```
````

## 📤 Response:

### ✅ Success (200 OK)

```json
{
  "message": "Email sent successfully",
  "success": true
}
```

### ⚠️ Bad Request (400) - Missing Fields

```json
{
  "error": "All fields are required",
  "success": false
}
```

### ❌ Internal Server Error (500)

```json
{
  "error": "Internal Server Error",
  "success": false
}
```

### ⛔ Method Not Allowed (405)

```json
{
  "error": "Method Not Allowed",
  "success": false
}
```

## 🎯 Example Usage (cURL):

```bash
curl -X POST https://yourdomain.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john.doe@example.com",
    "phone": "+1234567890",
    "subject": "Inquiry about services",
    "message": "I would like to know more about your services."
  }'
```

## 🛠 Implementation Code (Next.js API Route)

```javascript
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
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
```

## 🛡️ Error Handling:

- If any required fields are missing, the API returns a `400` status code.
- If there is an issue sending the email, the API returns a `500` status code.
- If an unsupported method (e.g., `PUT`, `DELETE`) is used, a `405` status code is returned.

## 📌 Notes:

- Ensure that the **Gmail credentials** are set in environment variables (`EMAIL` and `PASSWORD`).
- The API currently supports **only Gmail SMTP**.
- Keep your **email credentials secure** and do not expose them in client-side applications.

```

```
