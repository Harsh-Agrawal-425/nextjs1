"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SigninPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignin() {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/",
    });

    console.log(result);
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col gap-4 w-80">

        <input
          type="email"
          placeholder="Email"
          className="border p-2"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="bg-black text-white p-2"
          onClick={handleSignin}
        >
          Sign In
        </button>

      </div>
    </div>
  );
}