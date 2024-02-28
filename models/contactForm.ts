import mongoose, { Schema, Document } from 'mongoose';


interface IContactForm extends Document {
  name: string;
  whatsappNumber: number;
  tags: string[];
  source: string;
  attributes: {
    company: string;
    designation: string;
    website: string;
  };
}

const contactFormSchema: Schema = new Schema({
  name: { type: String, required: true },
  whatsappNumber: { type: String, required: true },
  tags: { type: [String], required: true },
  source: { type: String, required: true },
  attributes: {
    company: { type: String, required: true },
    designation: { type: String, required: true },
    website: { type: String, required: true },
  },
});

const ContactForm = mongoose.model<IContactForm>('ContactForm', contactFormSchema);

export default ContactForm;