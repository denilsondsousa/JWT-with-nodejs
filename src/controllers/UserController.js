import User from "../models/User";

import User from "../models/User";

class UserController {
  async store(req, res) {
    const { user, password } = req.body;

    const userD = await User.create({ user, password });

    const { _id } = userD;

    return res.json({ _id });
  }
}

export default new UserController();
