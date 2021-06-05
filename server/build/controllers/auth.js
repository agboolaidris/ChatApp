"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const apollo_server_express_1 = require("apollo-server-express");
const config_1 = require("../config");
const user_1 = require("../schema/user");
const register = (_, args) => __awaiter(void 0, void 0, void 0, function* () {
    let { username, email, password, password2 } = args;
    const error = {};
    try {
        console.log("valiadat");
        //validate input field
        if (username.trim() === "")
            error.username = "field is required";
        if (email.trim() === "")
            error.email = "field is required";
        if (password.trim() === "")
            error.password = "field is required";
        if (password2.trim() === "")
            error.password2 = "field is required";
        if (Object.keys(error).length > 0)
            throw error;
        //check password length
        if (password.length < 6)
            error.password = "most be greater than 6 characters";
        //check password matches
        if (password !== password2)
            error.password2 = "password not match";
        //check if username or email already exist
        const userEmail = yield user_1.User.findOne({ email });
        if (userEmail)
            error.email = "email already exist";
        const userUsername = yield user_1.User.findOne({ username });
        if (userUsername)
            error.username = "username already exist";
        if (Object.keys(error).length > 0)
            throw error;
        //hash password
        password = yield bcrypt_1.default.hash(password, 10);
        //create user
        const user = new user_1.User({ username, email, password });
        yield user.save();
        return user;
    }
    catch (err) {
        throw new apollo_server_express_1.UserInputError("bad Input", { error: err });
    }
});
exports.register = register;
const login = (_, args) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = args;
    const error = {};
    try {
        //validate input field
        if (username.trim() === "")
            error.username = "username field is required";
        if (password.trim() === "")
            error.password = "password field is required";
        if (Object.keys(error).length > 0)
            throw new apollo_server_express_1.UserInputError("input error", error);
        //check if username exist
        const user = yield user_1.User.findOne({ username });
        if (!user)
            throw new apollo_server_express_1.UserInputError("input error", {
                username: "user not found",
            });
        //compare password
        const confirmedPassword = yield bcrypt_1.default.compare(password, user.password);
        if (!confirmedPassword)
            throw new apollo_server_express_1.UserInputError("input error", {
                password: "password not match",
            });
        //generate a token
        const token = jsonwebtoken_1.default.sign({ _id: user._id }, config_1.ENV.JWT_SECRET, {
            expiresIn: "24hr",
        });
        return Object.assign(Object.assign({}, user.toJSON()), { createdAt: user.createdAt.toISOString(), updatedAt: user.updatedAt.toISOString(), token });
    }
    catch (error) {
        throw new apollo_server_express_1.UserInputError("Invalid Input", { error: error });
    }
});
exports.login = login;
//# sourceMappingURL=auth.js.map