const authenticate = (req, res, next) => {
    // Authentication logic
    console.log('Authentication logic');
    // Call the next middleware or route handler
    next();
};

module.exports = authenticate;
