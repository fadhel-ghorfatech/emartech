const crypto = require("crypto");
const db = require("../models");
const EmailService = require("../helpers/email");
const passport = require("passport");
const { getEncryptedPassword } = require("./common/TenantController");
const User = db.user;
const PasswordResetToken = db.resetPasswordToken;

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
    // Create the user in the database
    const newUser = await User.create({
      ...payload,
      password: (
        await getEncryptedPassword(payload.password)
      ).encryptedPassword,
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

exports.forgotPassword = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { email: req.body.email },
    });
    if (user) {
      const token = crypto.randomBytes(20).toString("hex");

      // Calculate expiry timestamp (e.g., 1 hour from now)
      const expiresAt = new Date();
      expiresAt.setHours(expiresAt.getHours() + 1); // Expires in 1 hour

      // Store the token and expiry timestamp in the database
      await PasswordResetToken.create({
        email: user.email,
        token: token,
        expires_at: expiresAt,
      });

      const resetLink = `${process.env.API_BASE_URL}/reset-password?token=${token}`;

      // Send the email with the password reset link
      EmailService.sendForgotPasswordEmail({
        email: user.email,
        resetLink,
      });

      res
        .status(200)
        .send({ message: "Password reset email sent successfully" });
    } else {
      // Need to handle user not found;
    }
  } catch (err) {
    // Need to handle error
  }
};

exports.resetPassword = async (req, res) => {
  const { token } = req.query;
  try {
    // Find the token in the database
    const resetToken = await PasswordResetToken.findOne({
      where: {
        token,
      },
    });

    // Check if token is found and not expired
    if (!resetToken || resetToken.expires_at < new Date()) {
      return res.status(400).send("Invalid or expired token");
    }

    // Render a password reset form (you might want to use a template engine like Handlebars or EJS for this)
    res.redirect(`${process.env.CLIENT_BASE_URL}/resetPassword?token=${token}`);
  } catch (error) {
    console.error("Error handling password reset token:", error);
    res.status(500).send("Error handling password reset token");
  }
};

exports.updatePassword = async (req, res) => {
  // Route to handle password reset form submission
  const { token, newPassword } = req.body;

  try {
    // Find the token in the database
    const resetToken = await PasswordResetToken.findOne({
      where: {
        token: token,
      },
    });

    // Check if token is found and not expired
    if (!resetToken || resetToken.expires_at < new Date()) {
      return res.status(400).send("Invalid or expired token");
    }

    // Update the user's password with the new password
    const user = await User.findOne({
      where: {
        email: resetToken.email,
      },
    });

    const x = await getEncryptedPassword(newPassword);
    user.password = (await getEncryptedPassword(newPassword)).encryptedPassword;
    await user.save();

    // Delete the reset token from the database
    await resetToken.destroy();

    res.status(200).send("Password reset successfully");
  } catch (error) {
    console.error("Error resetting password:", error);
    res.status(500).send("Error resetting password");
  }
};
