import bcrypt from "bcryptjs";
import User from "../../models/user";

const UserLogin = async (
  parent,
  { deptId, password, role },
  { db, pubsub },
  info
) => {
  const user = await User.findOne({ deptId });
  if (!user) throw new Error("USER_NOT_EXISTS");

  if (!(await bcrypt.compare(password, user.passwordHash)))
    throw new Error("INCORRECT_PASSWORD");

  return deptId;
};

export default UserLogin;
