import bcrypt from "bcryptjs";
import User from "../../models/user";

const UserSignUp = async (
  parent,
  { deptID, password, role },
  { db, pubsub },
  info
) => {
  const existedUser = await User.findOne({ deptID });
  if (existedUser) throw new Error("ACCOUNT_ALREADY_EXISTS");

  const passwordHash = await bcrypt.hash(password, 10);
  await User.create({
    deptID,
    passwordHash,
    role,
  });

  return deptID;
};

export default UserSignUp;
