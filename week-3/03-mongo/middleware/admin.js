// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const admin = req.headers.admin;
    const username = req.headers.username;
    user.findOne(
        admin:"admin",
        username:"username"
    )
    .then(if user(value){
        res.send("valid users")
        next();
    }
    else{
        res.status(404).send(
            "invalid users"
        )
    })
}

module.exports = adminMiddleware;
