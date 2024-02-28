import express, { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { validateContactForm } from '../utils';
import ContactForm from '../models/contactForm';

const router = express.Router();
router.post(
  '/contact-form',
  validateContactForm,
  async (req: Request, res: Response) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { name, whatsappNumber, tags, source, attributes } = req.body;

      const existingContact = await ContactForm.findOne({ whatsappNumber });
      if (existingContact) {
        return res.status(400).json({ error: 'Contact with this WhatsApp number already exists' });
      }

      const newContactForm = new ContactForm({
        name,
        whatsappNumber,
        tags,
        source,
        attributes,
      });

      await newContactForm.save();

      res.status(201).json({ message: 'Contact form submitted successfully' });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);

export default router;
