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
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const typeDefs_1 = __importDefault(require("./graphql/typeDefs"));
const resolvers_1 = __importDefault(require("./graphql/resolvers"));
const config_1 = require("./config");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const app = express_1.default();
    const PORT = process.env.PORT || 5000;
    app.use(cors_1.default());
    try {
        yield mongoose_1.default.connect(config_1.ENV.NODE_ENV === "dev" ? "mongodb://localhost/chatapp" : config_1.ENV.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });
        const server = new apollo_server_express_1.ApolloServer({
            typeDefs: typeDefs_1.default,
            resolvers: resolvers_1.default,
            context: (ctx) => ctx,
            playground: true,
        });
        yield server.start();
        server.applyMiddleware({ app });
        app.listen(PORT, () => {
            console.log(`app is listen on port ${PORT}!`);
        });
    }
    catch (error) {
        console.log(error.message);
    }
});
main();
//# sourceMappingURL=server.js.map