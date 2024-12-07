import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Users from "../models/user.js";

export const addUser = async (req, res) => {
  const { username, email, password } = req.body;
  const secret = process.env.JWT_KEY;

  const findUser = await Users.find({ email: email });
  if (findUser.length === 1) {
    res.status(409).json({
      message: "USER ALREADY EXISTS",
    });
  } else {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new Users({
      username,
      email,
      password: hashedPassword,
    });
    const token = await jwt.sign({ user: email, userId: user._id }, secret, {
      expiresIn: "1h",
    });
    console.log(req.body);
    await user.save();
    res.status(201).json({
      message: "REGISTRATION SUCCESSFULL",
      user,
      token,
    });
  }
};
export const login = async (req, res) => {
  const loginfind = await Users.findOne({ email: email });
  if (!loginfind) {
    res.status(404).json({
      message: "USER NOT FOUND",
    });
  } else {
    const pass = await bcrypt.compare(password, loginfind.password);
    if (!pass) {
      res.status(401).json({
        message: "AUTH FAILED",
      });
    }
    const token = await jwt.sign(
      { user: email, userId: loginfind._id },
      secret,
      {
        expiresIn: "1h",
      }
    );
    res.status(200).json({
      loginfind,
      token,
    });
  }
};
// export const allUsers = async (req, res) => {
//   const getallusers = await Users.find();
//   res.json(getallusers);
// };
// export const userId = async (req, res) => {
//   const particularUser = await Users.findById(req.params.id);
//   res.json(particularUser);
// };
