const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  let { authorization } = req.headers;
  if (authorization) {
    jwt.verify(authorization, process.env.SECRET, function (err, decoded) {
      if (err) {
        res.json({ message: err.message });
      }
      if (decoded) {
        req.userName = decoded.userName;
        req.userID = decoded.userID;
        next();
      } else {
        res.end();
      }
    });
  } else {
    res.end();
  }
}

module.exports = { auth };
