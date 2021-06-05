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
const auth_1 = require("../controllers/auth");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const apollo_server_errors_1 = require("apollo-server-errors");
const user_1 = require("../schema/user");
const resolvers = {
    Query: {
        getAllUsers: (_, args, ctx) => __awaiter(void 0, void 0, void 0, function* () {
            let userID = null;
            try {
                if (ctx.req && ctx.req.headers.authorization) {
                    const token = ctx.req.headers.authorization.split(" ")[1];
                    const secret = process.env.JWT_SECRET ? process.env.JWT_SECRET : "";
                    jsonwebtoken_1.default.verify(token, secret, (error, decoded) => {
                        if (error) {
                            throw new apollo_server_errors_1.AuthenticationError("UnAuthorize");
                        }
                        userID = decoded._id;
                    });
                }
                return user_1.User.find({ _id: { $ne: userID } });
            }
            catch (error) {
                throw error;
            }
        }),
        login: auth_1.login,
    },
    Mutation: {
        register: auth_1.register,
    },
};
exports.default = resolvers;
//# sourceMappingURL=resolvers.js.map