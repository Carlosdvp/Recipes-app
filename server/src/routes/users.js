import express from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { UserModel } from '../models/Users.js';

const userRouter = express.Router();

userRouter.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username })

  if (user) {
    return res.json({ message: "User already exists."});
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  // Add a new user to the DB with mongoose
  const newUser = new UserModel({
    username: username,
    password: hashedPassword
  })
  await newUser.save();

  res.json(newUser);
})

userRouter.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username })

  if (!user) {
    return res.json({ message: 'User not found' });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.json({ message: 'Incorrect Username or Password' })
  }

  const token = jwt.sign({ id: user._id }, process.env.SECRET);

  res.json({token, userId: user._id});
});

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    jwt.verify(authHeader, "secret", (err) => {
      if (err) {
        return res.sendStatus(403);
      }
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

export { userRouter, verifyToken }
