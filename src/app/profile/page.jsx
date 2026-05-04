"use client";

import ModalCard from "@/component/ModalCard";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";
import React from "react";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ProfilePage = () => {
  const { data, isPending } = authClient.useSession();
  const user = data?.user;

  if (isPending) {
    return <h1 className="text-center mt-20">Loading...</h1>;
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-indigo-100 via-purple-100 to-blue-100 px-4">

      <Card className="w-full max-w-md p-6 sm:p-8 rounded-3xl shadow-xl relative bg-white/90 backdrop-blur-md">

        
        <div className="absolute top-4 right-4">
          <ModalCard />
        </div>

        
        <div className="flex flex-col items-center gap-3">
          <Avatar className="w-24 h-24 border-4 border-indigo-500 shadow-lg">
            <Avatar.Image alt={user?.name} src={user?.image} />
            <Avatar.Fallback className="text-xl font-semibold">
              {user?.name?.slice(0, 2)}
            </Avatar.Fallback>
          </Avatar>

          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
            {user?.name}
          </h2>

          <p className="text-gray-500 text-sm">
            User Profile
          </p>
        </div>

    
        <div className="mt-6 space-y-4">

          <div className="flex items-center gap-3 bg-gray-50 hover:bg-indigo-50 transition p-3 rounded-xl shadow-sm">
            <FaUser className="text-indigo-500 text-lg" />
            <span className="font-medium text-gray-700 text-sm sm:text-base">
              {user?.name}
            </span>
          </div>

          <div className="flex items-center gap-3 bg-gray-50 hover:bg-indigo-50 transition p-3 rounded-xl shadow-sm">
            <MdEmail className="text-indigo-500 text-lg" />
            <span className="font-medium text-gray-700 text-sm sm:text-base break-all">
              {user?.email}
            </span>
          </div>

        </div>

      </Card>
    </div>
  );
};

export default ProfilePage;