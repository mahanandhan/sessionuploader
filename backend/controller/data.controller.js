import Data from "../models/data.model.js";

export const postData = async (req, res) => {
    try {
        const { name, videoUrl, videoImageUrl, description, pdfUrl, pdfImageUrl } = req.body;
        if (!name || !description) {
            return res.status(400).json({ message: 'Name and description are required' });
        }
        const newData = new Data({
            name,
            videoUrl,
            videoImageUrl: videoImageUrl || 'https://www.freeiconspng.com/uploads/no-image-icon-4.png',
            description,
            pdfUrl,
            pdfImageUrl: pdfImageUrl || 'https://www.freeiconspng.com/uploads/no-image-icon-4.png'
        });
        await newData.save();
        res.json({ success: true, data: newData });
    } catch (error) {
        console.error('Error posting data:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
}

export const getData = async (req, res) => {
    try {
        const data = await Data.find({});
        res.json({ success: true, data });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
}