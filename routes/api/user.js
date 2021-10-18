import { Router } from "express";
import UserService from "../../services/UserService";

const router = Router();

router.post("/signup", (req, res) => {
  console.log(req.body);

  const { deptID, password, role } = req.body;

  UserService.signUp({ deptID, password, role = "inmate" }).then((user) => {
    console.log("User signed up:", user);
    res.status(200); // TODO: token
  }).catch((err) => {
    console.log(err);
    res.status(401).send(err);
  })
});

router.post("/login", (req, res) => {
  console.log(req.body);

  const { deptID, password } = req.body;

  UserService.logIn({deptID, password}).then((user) => {
    console.log("User logged in:", user);
    res.status(200); // TODO: token
  }).catch((err) => {
    console.log(err);
    res.status(401).send(err);
  })
})
