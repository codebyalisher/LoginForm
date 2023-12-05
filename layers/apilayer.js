const express = require('express');
const router = express.Router();
const authenticate = require('./middlewarelayer'); // Assuming middlewarelayer.js is in the layers folder
const businessLogic = require('./businesslogiclayer'); // Assuming businesslogiclayer.js is in the layers folder

// Use middleware to parse the request body
router.use(express.json()); // Assuming you are sending JSON data
router.use(express.urlencoded({ extended: true })); // Assuming you are sending form data

router.post('/login', authenticate, (req, res) => {
    // Implement actual login logic using business logic
    const { username, password } = req.body;
    businessLogic.processLogin(username, password);
    res.send(`Logging in with: ${username}, ${password}`);
});

router.post('/submit', authenticate, (req, res) => {
    // Implement form submission logic using business logic
    const { name, email } = req.body;
    businessLogic.processFormSubmission(name, email);
    res.send(`Submitting form with: ${name}, ${email}`);
});

module.exports = router;
