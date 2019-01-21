function userMiddleware () {
  return function (req, res, next) {
    if (req.isAuthenticated()) {
      console.log("Authenticated");
      return next()
    }
    res.redirect('/')
  }
}
module.exports = userMiddleware;