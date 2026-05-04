"use client";

import { authClient } from "@/lib/auth-client";
import { Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { FaEdit, FaUser } from "react-icons/fa";
import { toast } from "react-toastify";

const ModalCard = () => {
  const onSubmithandel = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    const { data, error } = await authClient.updateUser({
      image: photo,
      name: name,
    });

    if (error) {
      toast.warning(error.message || "Update failed ❌");
    } else if (data) {
      toast.success("Profile Updated ✅");
    }
  };

  return (
    <Modal>
      
      <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500 text-indigo-600 hover:bg-indigo-50 transition">
        <FaEdit size={16} />
        Edit Profile
      </button>

      <Modal.Backdrop className="bg-black/30 backdrop-blur-sm">
        <Modal.Container placement="center">
          <Modal.Dialog className="w-full max-w-md rounded-3xl bg-white/95 backdrop-blur-md shadow-2xl">

            
            <Modal.CloseTrigger className="absolute top-3 right-3 text-gray-400 hover:text-gray-600" />

          
            <Modal.Header className="flex items-center gap-2 p-6 pb-2">
              <FaUser className="text-indigo-500" />
              <Modal.Heading className="text-lg font-semibold">
                Update Profile
              </Modal.Heading>
            </Modal.Header>

            
            <Modal.Body className="px-6 pb-6">
              <Surface variant="default" className="bg-transparent shadow-none">
                <form onSubmit={onSubmithandel} className="flex flex-col gap-4">

            
                  <TextField name="name" type="text">
                    <Label className="text-gray-700">Name</Label>
                    <Input
                      placeholder="Enter your name"
                      className="rounded-xl border-gray-300 focus:ring-2 focus:ring-indigo-400"
                    />
                  </TextField>

                
                  <TextField name="photo" type="text">
                    <Label className="text-gray-700">Photo URL</Label>
                    <Input
                      placeholder="Paste image link"
                      className="rounded-xl border-gray-300 focus:ring-2 focus:ring-indigo-400"
                    />
                  </TextField>

                  
                  <div className="flex justify-end gap-3 mt-4">

                
                    <button
                      type="button"
                      className="px-5 py-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition"
                    >
                      Cancel
                    </button>

                    
                    <button
                      type="submit"
                      className="px-5 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium shadow hover:scale-105 transition"
                    >
                      Update Now
                    </button>

                  </div>

                </form>
              </Surface>
            </Modal.Body>

          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default ModalCard;