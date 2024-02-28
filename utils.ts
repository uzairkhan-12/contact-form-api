import { check } from 'express-validator';

export const validateContactForm = [
    check('name').notEmpty().withMessage('Name is required'),
    check('whatsappNumber').notEmpty().withMessage('Whatsapp number is required'),
    check('tags').isArray().withMessage('Tags must be an array'),
    check('source').notEmpty().withMessage('Source is required'),
    check('attributes.company').notEmpty().withMessage('Company is required'),
    check('attributes.designation').notEmpty().withMessage('Designation is required'),
    check('attributes.website').notEmpty().withMessage('Website is required').isURL().withMessage('Invalid website URL'),
  ];