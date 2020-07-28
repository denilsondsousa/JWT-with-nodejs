import "dotenv/config";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/User";

class SessionController {
  async store(req, res) {
    const { user, password } = req.body;
    const userD = await User.findOne({ user });

    if (!userD) return res.status(404).send("User not found");

    const isPasswordCorrect = await bcrypt.compare(
      password,
      userD.passwordHash
    );

    if (!isPasswordCorrect) return res.status(401).send("Wrong Password");

    return res.json({
      token: jwt.sign({ userId: userD._id }, process.env.APP_SECRET, {
        expiresIn: "7d",
      }),
    });
  }
}

export default new SessionController();
