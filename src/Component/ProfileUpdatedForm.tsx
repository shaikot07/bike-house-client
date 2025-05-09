/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaStarOfLife } from "react-icons/fa";
import { toast } from "sonner";

// Cloudinary Credentials
const CLOUD_NAME = "dy0b6hvog";
const UPLOAD_PRESET = "bikeshop";

interface UserProps {
  updatedUser: {
    name?: string;
    profileImg?: string;
    ussrId?: string;
  };
  userId: string;
}

const ProfileUpdatedForm = ({updatedUser, userId}: UserProps) => {
    console.log(updatedUser.ussrId, "updatedUser.ussrId from up");
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name:updatedUser?.name || "",
      profileImg:updatedUser?.profileImg || "",
    },
  });

  const onSubmit = async (data:any) => {
    setIsLoading(true);
    const toastId = toast.loading("Updating profile...");
  
    try {
      let imageUrl = updatedUser?.profileImg || "";
  
      if (data.profileImg && data.profileImg[0] instanceof File) {
        const file = data.profileImg[0];
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", UPLOAD_PRESET);
  
        const uploadResponse = await axios.post(
          `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
          formData
        );
  
        imageUrl = uploadResponse.data.secure_url;
      }
  
      const updatedData = {
        name: data.name,
        profileImg: imageUrl,
      };
  
      console.log("Sending data:", updatedData);
  
      await axios.patch(
        `https://l-2-assignment-bike-store-server.vercel.app/api/users/${userId}/profileUpdated`,
        updatedData
      );
  
      toast.success("Profile updated successfully!", { id: toastId });
      reset();
    } catch (err) {
      console.error("Update error:", err);
      toast.error("Failed to update profile.", { id: toastId });
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <div>
      <h2 className="text-4xl font-medium text-center mb-3">
        Update the Profile
        {/* <p>u:{userId}</p>  */}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
            Name <FaStarOfLife className="text-[#F2355F] text-[7px] ml-1" />
          </label>
          <input
            {...register("name", { required: "Name is required" })}
            type="text"
            className="block w-full h-11 px-5 bg-white border border-gray-300 rounded-full focus:outline-none"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">This field is required</p>
          )}
        </div>

        <input
          {...register("profileImg")}
          type="file"
          className="w-1/2 block mb-4 mt-4 text-gray-500 font-medium text-sm bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 file:bg-gray-800 file:hover:bg-gray-700 file:text-white rounded"
        />
        {errors.profileImg && (
          <p className="text-red-500 text-sm">This field is required</p>
        )}

        <button
          type="submit"
          className="w-52 h-12 bg-[#F2355F] hover:bg-[#1A1D21] text-white rounded-full transition-all duration-700"
        >
          {isLoading ? (
            <span className="loading loading-infinity loading-lg"></span>
          ) : (
            "Update Profile"
          )}
        </button>
      </form>
    </div>
  );
};

export default ProfileUpdatedForm;
