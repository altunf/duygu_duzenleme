import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import { SignJWT } from "jose";

const registerController = async (req, res) => {
  try {
    const { name, surname, username, password, email } = req.body;

    // Kullanıcı var mı kontrolü
    const userCheck = await User.findOne({ email });

    if (userCheck) {
      return res.status(400).json({ msg: "Kullanıcı mevcut" });
    }

    // Şifreyi hash'leme
    const passwordHash = await bcrypt.hash(password, 12);

    // Yeni kullanıcıyı oluşturma
    const newUser = await User.create({
      name,
      surname,
      username,
      email,
      password: passwordHash,
    });

    // JWT oluşturma
    const secretKey = process.env.JWT_SECRET;
    const secret = new TextEncoder().encode(secretKey);

    const token = await new SignJWT({ userId: newUser._id })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("1h")
      .sign(secret);

    res.status(201).json({ status: "OK", newUser, token });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const loginController = async (req, res) => {
  try {
    const { username, password, email } = req.body;

    // Kullanıcı kontrolü
    const userCheck = await User.findOne({ email });

    if (!userCheck) {
      return res.status(404).json({ msg: "Kullanıcı bulunamadı" });
    }

    // Şifre kontrolü
    const passwordCompare = await bcrypt.compare(password, userCheck.password);

    if (!passwordCompare) {
      return res.status(400).json({ msg: "Şifre yanlış" });
    }

    // JWT oluşturma
    const secretKey = process.env.JWT_SECRET;
    const secret = new TextEncoder().encode(secretKey);

    let token;

    if (userCheck.name === "admin" && userCheck.password === "adminPassword") {
      token = await new SignJWT({ userId: userCheck._id, role: "admin" })
        .setProtectedHeader({ alg: "HS256" })
        .setExpirationTime("1h")
        .sign(secret);
    } else {
      token = await new SignJWT({
        userId: userCheck._id,
        username: userCheck.username,
        name: userCheck.name,
        surname: userCheck.surname,
      })
        .setProtectedHeader({ alg: "HS256" })
        .setExpirationTime("2d")
        .sign(secret);
    }

    res.cookie("token", token, {
      path: "/",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });

    // res.status(200).json({ status: "OK", userCheck, token });

    res.status(200).json({ status: "OK", userCheck, token });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const getAllUsersController = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Kullanıcılar getirilirken hata oluştu", error });
  }
};

export { registerController, loginController, getAllUsersController };
