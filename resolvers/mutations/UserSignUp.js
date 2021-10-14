import bcrypt from "bcryptjs";
import User from "../../models/user";

const UserSignUp = async (
  parent,
  { deptId, password, role },
  { db, pubsub },
  info
) => {
  const existedUser = await User.findOne({ deptId });
  if (existedUser) throw new Error("ACCOUNT_ALREADY_EXISTS");

  const passwordHash = await bcrypt.hash(password, 10);
  await User.create({
    deptId,
    passwordHash,
    role,
  });

  return deptId;
};

export default UserSignUp;
