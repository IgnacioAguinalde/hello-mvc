// controllers/index.js
exports.search = (req, res) => {
    let result = null;
    User.findOne({ id: req.query.id }).exec((err, user) => {
      if (user != null) {
        user.age = Math.trunc((new Date() - user.birthday) / 31536000000);
        result = [user];
      }
      res.render('index', { users: result });
    })
  }