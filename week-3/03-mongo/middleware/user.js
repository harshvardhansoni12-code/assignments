function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
const username = req.headers.username;
  const password = req.headers.password;

  const user = userMiddleware
    .findOne({ username: username, password: password })
    .then(function (value) {
      if (value) {
        res.send("valid user");
        next();
      } else {
        res.status(400).send("invalid user");
      }
    });


}

module.exports = userMiddleware;
