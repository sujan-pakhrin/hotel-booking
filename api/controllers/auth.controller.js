import User from '../models/User.js';
import bcryptjs from 'bcryptjs';
import { createError } from "../utils/error.js";
import jwt from 'jsonwebtoken';

export const register = async (req, res, next) => {
    try {
        const hashPassword = bcryptjs.hashSync(req.body.password, 10);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashPassword,
        })
        await newUser.save()
        res.status(200).send("user Has been creates!")
    } catch (err) {
        next(err);
    }
}
export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) return next(createError(404, "User not found!"))
        const isPasswordCorrect = await bcryptjs.compare(req.body.password, user.password)
        if (!isPasswordCorrect) return next(createError(400, "Password incorrect!"))
        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT)
        const { password, isAdmin, ...rest } = user._doc;
        res.cookie("access_token", token, {
            httpOnly: true,
        })
            .status(200).send(rest)
    } catch (err) {
        next(err);
    }
}