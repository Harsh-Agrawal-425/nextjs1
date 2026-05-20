"use server";

import { prisma } from "../../lib/db";

export async function signup(
  username: string,
  email: string,
  password: string
) {
  try {
    const user = await prisma.user.create({
      data: {
        name: username,
        email: email,
        password: password,
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