import mongoose from 'mongoose';

const EmailSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
});

const EmailModel =
    mongoose.models.email || mongoose.model('email', EmailSchema);

export default EmailModel;
