import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";

const registerController = async (req, res) => {
  try {
    const { username, password, email } = req.body;

    const userCheck = await User.findOne({ email: "email" });

    if (userCheck) {
      return res.status(500).json({ msg: "kullanıcı mevcut" });
    }

    const passwordHash = await bcrypt.hash(password, 12);

    const newUser = User.create({ username, email, password: passwordHash });
    console.log("first", userCheck);
    const token = await jwt.sign(
      { userId: newUser._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(201).json({ status: "OK", newUser, token });
  } catch (error) {
    return res.status(500).json({ msg: error.msg });
  }
};

const loginController = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const userCheck = await User.findOne(email);
    if (!userCheck) {
      return res.status(500).json({ msg: "kullanıcı bulunamadı" });
    }

    const passwordCompare = await bcrypt.compare(password, userCheck.password);
    if (!passwordCompare) {
      return res.status(500).json({ msg: "Şifre Yanlış" });
    }
    const token = await jwt.sign(
      { userId: userCheck._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({ status: "OK", userCheck, token });
  } catch (error) {
    return res.status(500).json({ msg: error.msg });
  }
};

export { registerController, loginController };
