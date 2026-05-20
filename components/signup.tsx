"use client";

import { useState } from "react";
import axios from "axios";
import { signup } from "@/app/actions/user";
import { sign } from "crypto";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function sendRequest() {
  try {
    const response = await signup(username, email, password);

    alert(response.message);

  } catch (error) {
    console.error(error);
    alert("Something went wrong");
  }
}

  return (
    <div className="h-screen flex justify-center flex-col bg-gray-100">
      <div className="flex justify-center">
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg w-full">
          
          <div className="px-10">
            <div className="text-3xl font-extrabold text-center">
              Sign up
            </div>
          </div>

          <div className="pt-2">
            
            <LabelledInput
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              label="Username"
              placeholder="Enter username"
            />

            <LabelledInput
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              label="Email"
              placeholder="harkirat@gmail.com"
              type="email"
            />

            <LabelledInput
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              label="Password"
              type="password"
              placeholder="123456"
            />

            <button
              onClick={sendRequest}
              type="button"
              className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Sign up
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabelledInput({
  label,
  placeholder,
  onChange,
  type,
}: LabelledInputType) {
  return (
    <div>
      <label className="block mb-2 text-sm font-semibold text-black pt-4">
        {label}
      </label>

      <input
        onChange={onChange}
        type={type || "text"}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        required
      />
    </div>
  );
}

export default Signup;