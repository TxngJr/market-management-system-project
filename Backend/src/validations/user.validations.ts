import { check, ValidationChain } from "express-validator";

const usernameCheck: ValidationChain[] = [
  check("username")
    .isLength({ min: 3 })
    .withMessage("Username must be at least 3 characters"),
];

const passwordCheck: ValidationChain[] = [
  check("password")
    .isLength({ min: 8 })
    .withMessage("Password not strong enough"),
];

export default {
  usernameCheck,
  passwordCheck,
};
