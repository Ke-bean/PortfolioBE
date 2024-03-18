import express from 'express';
import { UserInquiry, validateUserInquiry } from '../models/userInquiry';

const router = express.Router();

router.post('/', async (req, res) => {
    const { error } = validateUserInquiry(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const userInquiry = new UserInquiry({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message,
            createdAt: new Date()
        });

        await userInquiry.save();

        res.status(201).json("User inquiry sent successfully!");
    } catch (error) {
        console.error("Error sending user inquiry:", error);
        res.status(500).send("Internal Server Error");
    }
});

router.get('/', async (req, res) => {
    try {
        const userInquiries = await UserInquiry.find().select('-_id name email message createdAt');
        res.status(200).json(userInquiries);
    } catch (error) {
        console.error("Error fetching user inquiries:", error);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;
