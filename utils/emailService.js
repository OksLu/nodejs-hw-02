const { createTransport } = require("nodemailer");
require("dotenv").config();

const { BREVO_EMAIL, BREVO_KEY, BASE_URL } = process.env;

class Email {
  constructor(user) {
    this.to = user.email;
    this.from = `Admin ${BREVO_EMAIL}`;
    this.verificationCode = user.verificationCode;
  }

  initTransport() {
    return createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      auth: {
        user: BREVO_EMAIL,
        pass: BREVO_KEY,
      },
    });
  }

  async send(subject) {
    const mailConfig = {
      from: this.from,
      to: this.to,
      subject,
      html: `<a target="_blank" href="${BASE_URL}/api/users/verify/${this.verificationCode}">Click verify email</a>`,
    };

    await this.initTransport().sendMail(mailConfig);
  }
}

module.exports = Email;
