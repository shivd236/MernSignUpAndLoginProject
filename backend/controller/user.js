const User = require("../modals/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

//-> create/sinup
const createUser = async (req, res) => {
  const user = req.body;
  const newUser = new User(user);
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(user.password, salt);
  newUser.password = hashPassword;

  try {
    const existEmail = await User.findOne({
      email: user.email,
    });
    if (existEmail) {
      return res.status(400).json({
        message: "This email is already exists please try new email !",
        code: 400,
        error: true,
      });
    }

    await newUser.save();
    return res.status(201).json({
      message: "User Created Successfully.",
      code: 201,
      error: false,
      result: newUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      code: 500,
      error: true,
    });
  }
};

// -----> Login;
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({
      email: email,
    });
    if (!user) {
      return res.status(404).json({
        message: "User not Found !",
        code: 404,
        error: true,
      });
    }

    const passwordIsCorrect = await bcrypt.compare(password, user.password);

    if (!passwordIsCorrect) {
      return res.status(400).json({
        message: "Invalid Password !",
        code: 400,
        error: true,
      });
    }

    const playload = { user };
    const token = await jwt.sign(playload, process.env.SECRET_KEY);

    return res.status(200).json({
      message: "User Successfully Login.",
      code: 200,
      error: false,
      token: token,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      code: 500,
      error: true,
    });
  }
};

module.exports = {
  createUser,
  login,
};
