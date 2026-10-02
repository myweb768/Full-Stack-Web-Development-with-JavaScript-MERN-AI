const User = require("../models/user.model");
const { EncodedToken } = require("../utility/token.helper");
const { serverError } = require("../utility/server.error");

// Register
exports.register = async (req, res) => {
  try {
    const { name, email, password, phoneNumber } = req.body;

    if (!name || !email || !password || !phoneNumber) {
      return res.status(400).json({
        success: false,
        message: "name, email, password and phoneNumber are required",
      });
    }

    const exists = await User.findOne({ email: email.toLowerCase() });
    if (exists) {
      return res.status(409).json({ success: false, message: "Email already registered" });
    }

    // password hash হবে model-এর pre("save") hook-এ
    const user = await User.create({ name, email, password, phoneNumber });

    res.status(201).json({
      success: true,
      message: "Registration successful",
      data: {
        _id: user._id,
        name: user.name,
        email: user.email,
        phoneNumber: user.phoneNumber,
      },
    });
  } catch (error) {
    serverError(res, error);
  }
};

// Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: "email and password are required" });
    }

    const user = await User.findOne({ email: email.toLowerCase() }).select("+password");
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }

    const token = EncodedToken(user.email, user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({ success: true, message: "Login successful", token });
  } catch (error) {
    serverError(res, error);
  }
};


// Get logged-in user profile
exports.getProfile = async (req, res) => {
  try {
    // req.user middleware থেকে আসছে (password ছাড়া)
    res.status(200).json({ success: true, data: req.user });
  } catch (error) {
    serverError(res, error);
  }
};

// Update profile (শুধু name ও phoneNumber)
exports.updateProfile = async (req, res) => {
  try {
    const updates = {};
    if (req.body.name) updates.name = req.body.name;
    if (req.body.phoneNumber) updates.phoneNumber = req.body.phoneNumber;

    if (Object.keys(updates).length === 0) {
      return res.status(400).json({
        success: false,
        message: "Provide name or phoneNumber to update",
      });
    }

    const user = await User.findByIdAndUpdate(req.user._id, updates, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({ success: true, message: "Profile updated", data: user });
  } catch (error) {
    serverError(res, error);
  }
};

// Logout
exports.logout = async (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({ success: true, message: "Logged out successfully" });
  } catch (error) {
    serverError(res, error);
  }
};