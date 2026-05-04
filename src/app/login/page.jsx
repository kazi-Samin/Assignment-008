"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Form,
  Input,
  Label,
  TextField,
  FieldError,
  Description,
} from "@heroui/react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

export default function Page() {
  const onSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });

    if (data) {
      toast.success("Login Successful ✅");
    } else {
      toast.error(error?.message || "Login failed ❌");
    }
  };

  const handleGoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-indigo-500 to-blue-500 px-4">

      <div className="w-full max-w-md bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8">

        {/* Header */}
        <h1 className="text-4xl font-extrabold text-center text-gray-800">
          Welcome Back 👋
        </h1>
        <p className="text-center text-gray-500 mt-2 mb-6">
          Login to your account
        </p>

        {/* Form */}
        <Form onSubmit={onSubmit} className="flex flex-col gap-5">

          {/* Email */}
          <TextField isRequired name="email" type="email">
            <Label className="font-semibold text-gray-700">Email</Label>
            <Input
              placeholder="Enter your email"
              className="rounded-xl border-gray-300 focus:ring-2 focus:ring-indigo-400"
            />
            <FieldError />
          </TextField>

          {/* Password */}
          <TextField isRequired name="password" type="password">
            <Label className="font-semibold text-gray-700">Password</Label>
            <Input
              placeholder="Enter your password"
              className="rounded-xl border-gray-300 focus:ring-2 focus:ring-indigo-400"
            />
            <Description>
              <Link
                href="/register"
                className="text-indigo-600 font-medium hover:underline"
              >
                Create account
              </Link>
            </Description>
            <FieldError />
          </TextField>

          {/* Login Button */}
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-xl font-semibold shadow-md hover:scale-[1.02] transition"
          >
            Login
          </Button>
        </Form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-3 text-gray-400 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Google Login */}
        <Button
          onClick={handleGoogle}
          variant="outline"
          className="w-full flex items-center justify-center gap-3 py-3 rounded-xl border hover:bg-gray-100 transition"
        >
          <FcGoogle size={20} />
          Continue with Google
        </Button>
      </div>
    </div>
  );
}