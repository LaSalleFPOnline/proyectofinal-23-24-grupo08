const User = require("../entity/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/config");
// const { registerValidator, loginValidator } = require("../utils/validators");


const signupUser = async (req, res) => {
  const { username, password } = req.body;
  // const { errors, valid } = registerValidator(username, password);

  if (!valid) {
    // return res.status(400).send({ message: Object.values(errors)[0] });
    return res.status(400).send({ message: "Invalid input." });
  }

  const existingUser = await User.findOne({
    where: `"username" ILIKE '${username}'`,
  });

  if (existingUser) {
    return res
      .status(401)
      .send({ message: `Username '${username}' is already taken.` });
  }

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const user = User.create({ username, passwordHash });
  await user.save();

  const token = jwt.sign(
    {
      id: user.id,
      username: user.username,
    },
    JWT_SECRET
  );

  return res.status(201).json({
    id: user.id,
    username: user.username,
    token,
  });
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  // const { errors, valid } = loginValidator(username, password);

  if (!valid) {
    // return res.status(400).send({ message: Object.values(errors)[0] });
    return res.status(400).send({ message: "Invalid input." });
  }

  const user = await User.findOne({
    where: `"username" ILIKE '${username}'`,
  });

  if (!user) {
    return res.status(401).send({ message: `User: '${username}' not found.` });
  }

  const credentialsValid = await bcrypt.compare(password, user.passwordHash);

  if (!credentialsValid) {
    return res.status(401).send({ message: "Invalid credentials." });
  }

  const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET);
  return res.status(201).json({
    id: user.id,
    username: user.username,
    token,
  });
};

module.exports = { signupUser, loginUser };
