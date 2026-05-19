import { NextRequest } from "next/server";
import { prisma } from "../../../lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const user = await prisma.user.create({
      data: {
        name: body.username,
        email: body.email,
        password: body.password, 
      },
    });

    console.log(user);

    return Response.json({
      message: "User created successfully!",
      user,
    });

  } catch (error) {
    console.error(error);
    return Response.json({ message: "Error while creating user" }, { status: 500 });
  }
}