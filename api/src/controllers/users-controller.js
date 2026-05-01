"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const client_1 = require("@prisma/client");
const prisma_1 = require("@/database/prisma");
const AppError_1 = require("@/utils/AppError");
const bcrypt_1 = require("bcrypt");
const zod_1 = require("zod");
class UsersController {
    async create(request, response) {
        const bodySchema = zod_1.z.object({
            name: zod_1.z.string().trim().min(2, { message: "Nome é obrigatório" }),
            email: zod_1.z
                .string()
                .trim()
                .email({ message: "E-mail inválido" })
                .toLowerCase(),
            password: zod_1.z
                .string()
                .min(6, { message: "A senha deve ter pelo menos 6 digitos" }),
            role: zod_1.z
                .enum([client_1.UserRole.employee, client_1.UserRole.manager])
                .default(client_1.UserRole.employee),
        });
        const { name, email, password, role } = bodySchema.parse(request.body);
        const userWithSameEmail = await prisma_1.prisma.user.findFirst({ where: { email } });
        if (userWithSameEmail) {
            throw new AppError_1.AppError("Já existe um usuário cadastrado com esse e-mail");
        }
        const hashedPassword = await (0, bcrypt_1.hash)(password, 8);
        await prisma_1.prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role,
            },
        });
        response.status(201).json();
    }
}
exports.UsersController = UsersController;
