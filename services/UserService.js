import bcrypt from "bcryptjs";
import User from "../models/user";

class UserService {
  static async signUp({ deptID, password, role }) {
    const existed = await User.findOne({ deptID });
    if (existed) throw new Error("ACCOUNT_ALREADY_EXISTS");

    const passwordHash = await bcrypt.hash(password, 10);
    const user = await User.create({
      deptID,
      passwordHash,
      role,
    });

    return user;
  }

  static async logIn({ deptID, password }) {
    const user = await User.findOne({ deptID });
    if (!user) throw new Error("ACCOUNT_NOT_EXISTS");

    if (!(await bcrypt.compare(password, user.passwordHash)))
      throw new Error("INCORRECT_PASSWORD");

    return user;
  }
}

export default UserService;
