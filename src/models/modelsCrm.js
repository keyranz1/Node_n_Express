import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter your First Name'
    },
    lastName: {
        type: String,
        required: 'Enter your Last Name'
    },
    email: {
        type: String,
        required: 'Enter your email'
    },
    company: {
        type: String,
    },
    address: {
        type: String
    },
    phoneNumber: {
        type: Number
    },
    created_date: {
        type: Date,
        default: Date.now
    }

});