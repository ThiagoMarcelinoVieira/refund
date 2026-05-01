"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAuthenticated = ensureAuthenticated;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_1 = require("@/configs/auth");
const AppError_1 = require("@/utils/AppError");
function ensureAuthenticated(request, response, next) {
    try {
        const AuthHeader = request.headers.authorization;
        if (!AuthHeader) {
            throw new AppError_1.AppError("JWT token not found", 401);
        }
        const [, token] = AuthHeader.split(" ");
        const { role, sub: user_id } = jsonwebtoken_1.default.verify(token, auth_1.authConfig.jwt.secret);
        request.user = {
            id: user_id,
            role,
        };
        return next();
    }
    catch (error) {
        throw new AppError_1.AppError("Invalid JWT token", 401);
    }
}
