import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

export default async function handler(req, res) {
  console.log(req.body.name);
  const { name, degree, year, specialization, email, cvFile } = req.body;

  try {
    // Send email using Nodemailer
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: "Future Techies Internship Application ",
      text: `
          Name: ${name}
          Degree & Branch: ${degree}
          Year of Study: ${year}
          Specialization: ${specialization}
          Email: ${email}
        `,
      attachments: [
        {
          filename: cvFile.name,
          content: cvFile.data,
        },
      ],
    });

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }

  //   res.status(200).json({ message: "Email sent successfully" });
}
