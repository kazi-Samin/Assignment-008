"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function Page() {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const name = `${firstName} ${lastName}`;
    const photo = e.target.photo.value || "";
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image: photo,
      callbackURL: "/",
    });

    if (data) {
      toast.success(`Welcome, ${name}! 🎉`);
      router.push("/");
    } else {
      toast.error(error?.message || "Registration failed ❌");
    }
  };

  return (
   <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-indigo-500 to-blue-500 px-3 sm:px-4">

      <div className="w-full max-w-md sm:max-w-lg bg-white/90 backdrop-blur-lg rounded-2xl sm:rounded-3xl shadow-2xl p-5 sm:p-8">
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800">
          Create Account 🚀
        </h1>
        <p className="text-center text-sm sm:text-base text-gray-500 mt-2 mb-5 sm:mb-6">
          Join us and start your journey
        </p>

        <Form onSubmit={onSubmit} className="flex flex-col gap-5 sm:gap-5">

          {/* First + Last Name */}
         <div className="flex flex-col sm:flex-row gap-3">
            <TextField isRequired name="firstName" type="text" className="flex-1">
              <Label>First Name</Label>
              <Input placeholder="First name" className="rounded-xl text-sm sm:text-base" />
              <FieldError />
            </TextField>

            <TextField isRequired name="lastName" type="text" className="flex-1">
              <Label>Last Name</Label>
              <Input placeholder="Last name" className="rounded-xl" />
              <FieldError />
            </TextField>
          </div>

          {/* Optional Photo */}
          <TextField name="photo" type="text">
            <Label>Photo URL (optional)</Label>
            <Input placeholder="Paste image link (optional)" className="rounded-xl" />
            <FieldError />
          </TextField>

          {/* Email */}
          <TextField isRequired name="email" type="email">
            <Label>Email</Label>
            <Input placeholder="Enter your email" className="rounded-xl" />
            <FieldError />
          </TextField>

          {/* Password */}
          <TextField isRequired name="password" type="password">
            <Label>Password</Label>
            <Input placeholder="Create password" className="rounded-xl" />
            <Description>
              Minimum 8 characters <br />
              <Link href="/login" className="text-indigo-600 font-medium hover:underline">
                Already have an account? Login
              </Link>
            </Description>
            <FieldError />
          </TextField>

          {/* Button */}
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-xl font-semibold shadow-md hover:scale-[1.02] transition"
          >
            Register
          </Button>
        </Form>
      </div>
    </div>
  );
}