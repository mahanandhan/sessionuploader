import mongoose from 'mongoose';

const DataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    videoUrl: {
        type: String,
    },
    videoImageUrl: {
        type: String,
        default: 'https://www.freeiconspng.com/uploads/no-image-icon-4.png'
    },
    description: {
        type: String,
        required: true
    },
    pdfUrl: {
        type: String,
        required: true
    },
    pdfImageUrl: {
        type: String,
        default: 'https://example.com/default-pdf-image.jpg'
    }
}, { timestamps: true });

const Data = mongoose.model('Data', DataSchema);

export default Data