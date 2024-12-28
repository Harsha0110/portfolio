// contact.js - Backend Model for Contact Form

const mongoose = require('mongoose');

// Define the schema for the contact form
const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        match: /.+\@.+\..+/, // Basic email validation regex
    },
    message: {
        type: String,
        required: true,
        trim: true,
        minlength: 10,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Create and export the Contact model
module.exports = mongoose.model('Contact', contactSchema);
