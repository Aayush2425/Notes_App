import User from "../Models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { errorHandler } from "../utils/error.js";
export const SignUp = async (req, res, next) => {
  const { email, name, password } = req.body;
  const hashPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ email, name, password: hashPassword });
  try {
    await newUser.save();
    res.status(201).json({ id: newUser._id });
  } catch (error) {
    next(error);
  }
};

export const SignIn = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(404, "User not found"));
    }
    const isValidPassword = bcryptjs.compareSync(password, validUser.password);
    if (!isValidPassword) {
      return next(errorHandler(401, "Invalid Password"));
    }
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validUser._doc;
    res
      .cookie("access token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
