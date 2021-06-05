"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avater: { type: String },
}, { timestamps: true });
exports.User = mongoose_1.model("User", schema);
//# sourceMappingURL=user.js.map