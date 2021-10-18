import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import config from "../config";
import User from "../models/user";
import UserService from "../services/UserService";

describe("User CRUD", () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await mongoose.connect(config.mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: false, // save network load
    });

    db = connection.connection.db;

    await User.deleteMany({ deptID: "test_deptID" });
  });

  test.only("User SignUp", async () => {
    const deptID = "test_deptID";
    const password = "test_password";
    const role = "inmate";

    await UserService.signUp({ deptID, password, role }).then((user) => {
      expect(user.deptID).toBe("test_deptID");
      expect(bcrypt.compare(password, user.passwordHash)).toBeTruthy();
    });
  });

  test("User LogIn", async () => {
    const deptID = "test_deptID";
    const password = "test_password";

    await UserService.logIn({ deptID, password }).then((user) => {
      // TODO: token
    });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });
});
