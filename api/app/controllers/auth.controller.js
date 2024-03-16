const db = require("../models");
const passport = require("passport");
const User = db.user;

const bcrypt = require("bcryptjs");
const consts = require("../consts");

exports.signup = (req, res) => {
  // Save User to Database
  console.info("------------req.body-----------", req.body);
  User.create({
    ...req.body,
    password: bcrypt.hashSync(req.body.password, 8),
  })
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

// Middleware to check if user is authenticated
exports.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next(); // User is authenticated, proceed to next middleware/router
  }
  // If user is not authenticated, return an error
  res.status(401).json({ message: "Unauthorized" });
};

exports.signin = (req, res) => {
  try {
    passport.authenticate("local", { session: true }, (err, user) => {
      if (err) {
        return res.status(403).send(err);
      }
      req.logIn(user, (err) => {
        if (err) return res.error(err);
        else req.session.save(() => res.send(user));
      });
    })(req, res);
  } catch (error) {
    return res.status(500).send(error);
  }
};

exports.signup = async (req, res) => {
  const payload = req.body;
  try {
    // Hash the password
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const encryptedPassword = await bcrypt.hash(payload.password, salt);

    // Create the user in the database
    const newUser = await User.create({
      ...payload,
      password: encryptedPassword,
      salt,
      role: payload.role ?? "USER",
    });

    // Send response with user data
    res.status(200).send({
      _id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
    });
  } catch (err) {
    // Handle errors
    if (
      err.name === "SequelizeUniqueConstraintError" &&
      err.errors[0].path === "email"
    ) {
      return res.status(500).send({ message: consts.EMAIL_EXISTS });
    } else {
      return res.status(500).send(err);
    }
  }
};
