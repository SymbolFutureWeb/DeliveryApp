const { alterUser } = require("../services");
const mongoose = require("mongoose");

const alterUsers = (req, res) => {
  const { user } = req.body;
  console.log(user);
  const query = {
      _id: mongoose.Types.ObjectId(user._id),
    },
    update = user,
    options = {
      upsert: true,
      new: true,
    };
  alterUser(query, update, options);
  return res.status(200).json({ message: "Done !" });
};

const authenticate = (req, res) => {
  const { user } = req.body;
  const query = {
    _id: mongoose.Types.ObjectId(user._id),
  };
  console.log("req", req.body);
  User.findOne({ Email: req.body.Email }, function (err, user) {
    console.log("second step", user);
    if (!user) {
      console.log("verifie email");
      return res
        .status(401)
        .send({ success: false, msg: " email  is incorrect" });
    }
    if (user.Source === "Local") {
      console.log("got in");
      if (!user) {
        console.log("verifie email");
        return res
          .status(401)
          .send({ success: false, msg: " email  is incorrect" });
      }

      if (!user.validPassword(req.body.Password)) {
        console.log("verified");
        return res
          .status(403)
          .send({ success: false, msg: " password is incorrect." });
      }
      console.log("parsing user");
      var userData = {
        _id: user._id,
        name: user.name,
        sex: user.sex,
        tel: user.tel,
        mail: user.mail,
        role: user.role,
        interest: user.interest,
        source: user.source,
        address: {
          numero: user.address.numero,
          avenue: user.address.avenue,
          ville: user.address.ville,
          codePostale: user.address.codePostale,
        },
      };
      console.log("sending  token");
      var token = jwt.sign(userData, config.secret.value, {
        expiresIn: 60,
      });
      UserTokenData = { token: token };

      console.log(UserTokenData);

      return res.json(UserTokenData);
    } else {
      return res
        .status(401)
        .send({ success: false, msg: " email  is already used" });
    }
  });
};

module.exports = { alterUsers, authenticate };
