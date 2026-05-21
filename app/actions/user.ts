"use server";

import { prisma } from "../../lib/db";
import bcrypt from "bcrypt";

export async function signup(
  username: string,
  email: string,
  password: string
) {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        name: username,
        email: email,
        password: hashedPassword,
      },
    });

    return {
      message: "User created successfully!",
      user,
    };

  } catch (error) {
    console.error(error);

    return {
      message: "Error while creating user",
    };
  }
}