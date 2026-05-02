import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import mysql from 'mysql2';

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 3000);

app.use(cors({ origin: 'http://localhost:8080' }));
app.use(express.json());

const db = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || 'portfolio',
  port: Number(process.env.DB_PORT || 3306),
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

app.post('/contact', (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  const sql = 'INSERT INTO contacts (name, email, phone, subject, message) VALUES (?, ?, ?, ?, ?)';

  db.query(sql, [name, email, phone || '', subject || '', message || ''], (err) => {
    if (err) {
      console.error('DB Error:', err);
      return res.status(500).send('DB Error');
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New contact form submission: ${subject || 'No subject'}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nSubject: ${subject || 'N/A'}\nMessage: ${message || 'N/A'}`,
    };

    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        console.error('Email Error:', error);
        return res.status(500).send('Email Error');
      }

      res.send('Form submitted ✅');
    });
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port} 🚀`);
});
