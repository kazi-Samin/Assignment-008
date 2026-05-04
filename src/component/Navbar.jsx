
"use client";

import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { Puff } from "react-loader-spinner";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { toast } from "react-toastify";

const Navbar = () => {
  const pathname = usePathname();
  const { data, isPending } = authClient.useSession();
  const user = data?.user;
  const [open, setOpen] = useState(false);

  const handellogout = async () => {
    await authClient.signOut();
    toast.success("Logout successful");
    setOpen(false);
  };

  const isActive = (path) => pathname === path;

  const navLink = (path, label) => (
    <Link
      href={path}
      className={`px-4 py-2 rounded-full transition ${
        isActive(path)
          ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow"
          : "text-gray-600 hover:text-indigo-600"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <nav className="bg-white/70 backdrop-blur-md border-b sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        
        
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
            S
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            SkillSphere
          </span>
        </Link>

      
        <div className="hidden md:flex items-center gap-4 font-medium">
          {navLink("/", "Home")}
          {navLink("/courses", "Courses")}
          {navLink("/profile", "Profile")}
        </div>

        
        <div className="hidden md:flex items-center gap-3">
          {isPending ? (
            <Puff height="35" width="35" color="#6366f1" />
          ) : !user ? (
            <>
              <Link href="/login">
                <Button className="bg-indigo-600 text-white rounded-full px-5">
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button variant="outline" className="rounded-full px-5">
                  Register
                </Button>
              </Link>
            </>
          ) : (
            <>
              <span className="text-sm text-gray-600">
                Hi, <b>{user?.name}</b>
              </span>
              <Avatar>
                <Avatar.Image alt={user?.name} src={user?.image} />
                <Avatar.Fallback>{user?.name}</Avatar.Fallback>
              </Avatar>
              <Button
  onClick={handellogout}
  className="bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full px-5 hover:scale-105 transition duration-300 shadow-md"
>
  Logout
</Button>
            </>
          )}
        </div>

        
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </div>

  
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-4 bg-white border-t">
          <div className="flex flex-col gap-3">
            {navLink("/", "Home")}
            {navLink("/courses", "Courses")}
            {navLink("/profile", "Profile")}
          </div>

          <hr />

          {isPending ? (
            <Puff height="35" width="35" color="#6366f1" />
          ) : !user ? (
            <div className="flex flex-col gap-3">
              <Link href="/login">Login</Link>
              <Link href="/register">Register</Link>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Avatar>
                  <Avatar.Image alt={user?.name} src={user?.image} />
                  <Avatar.Fallback>{user?.name}</Avatar.Fallback>
                </Avatar>
                <span>{user?.name}</span>
              </div>
              <Button onClick={handellogout} className="bg-red-500 text-white">
                Logout
              </Button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;