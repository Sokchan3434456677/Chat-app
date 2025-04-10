import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Camera, Mail, User, Calendar, CheckCircle } from "lucide-react";
import toast from "react-hot-toast"; // Ensure toast is imported

const ProfilePage = () => {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
  const [selectedImg, setSelectedImg] = useState(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) {
      toast.error("Profile picture is required");
      return;
    }

    // Display the selected image
    setSelectedImg(URL.createObjectURL(file));

    // Pass the file to the updateProfile function
    const formData = { profilePic: file };
    try {
      await updateProfile(formData);
    } catch (error) {
      console.error("Error uploading profile picture:", error);
      toast.error("Failed to upload profile picture");
    }
  };

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-gray-100">
      <div className="profile-card w-[300px] rounded-md shadow-xl overflow-hidden relative cursor-pointer bg-white flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:shadow-2xl">
        {/* Avatar Section */}
        <div className="w-full pt-5 flex items-center justify-center flex-col gap-1">
          <div className="relative w-full flex items-center justify-center after:absolute after:h-[6px] after:w-full after:bg-[#58b0e0] after:top-4 after:hover:size-[1%] after:transition-all after:duration-300 before:absolute before:h-[6px] before:w-full before:bg-[#58b0e0] before:bottom-4 before:hover:size-[1%] before:transition-all before:duration-300">
            <div className="relative">
              <img
                src={selectedImg || authUser?.profilePic || "/avatar.png"}
                alt="Profile"
                className="size-36 z-40 border-4 border-white rounded-full object-cover hover:border-8 hover:transition-all hover:duration-300 transition-all duration-300"
              />
              <label
                htmlFor="avatar-upload"
                className={`
                  absolute bottom-0 right-0 
                  bg-[#434955] hover:bg-[#58b0e0] hover:scale-105
                  p-2 rounded-full cursor-pointer 
                  transition-all duration-200
                  ${isUpdatingProfile ? "animate-pulse pointer-events-none" : ""}
                `}
              >
                <Camera className="w-5 h-5 text-white" />
                <input
                  type="file"
                  id="avatar-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={isUpdatingProfile}
                />
              </label>
            </div>
            <div className="absolute bg-[#58b0e0] z-10 size-[60%] w-full hover:size-[1%] hover:transition-all hover:duration-300 transition-all duration-300 delay-700 hover:delay-0" />
          </div>
        </div>

        {/* Name and Email */}
        <div className="w-full text-center leading-4">
          <p className="text-xl font-serif font-semibold text-[#434955]">
            {authUser?.fullName}
          </p>
          <p className="text-sm font-semibold text-[#434955] mt-1">USER</p>
        </div>

        {/* Profile Info List */}
        <div className="w-full flex items-center justify-center px-4 pb-3">
          <ul className="flex flex-col items-start gap-2 w-full *:inline-flex *:gap-2 *:items-center *:justify-start *:border-b-[1.5px] *:border-b-stone-700 *:border-dotted *:text-xs *:font-semibold *:text-[#434955]">
            <li className="w-full justify-between">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4 fill-stone-700 hover:fill-[#58b0e0] transition-colors" />
                Name
              </span>
              <span>{authUser?.fullName}</span>
            </li>
            <li className="w-full justify-between">
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4 fill-stone-700 hover:fill-[#58b0e0] transition-colors" />
                Email
              </span>
              <span>{authUser?.email}</span>
            </li>
            <li className="w-full justify-between">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 fill-stone-700 hover:fill-[#58b0e0] transition-colors" />
                Joined
              </span>
              <span>{authUser?.createdAt?.split("T")[0]}</span>
            </li>
            <li className="w-full justify-between">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 fill-stone-700 hover:fill-[#58b0e0] transition-colors" />
                Status
              </span>
              <span className="text-green-500">Active</span>
            </li>
          </ul>
        </div>

        {/* Bottom Bar */}
        <hr className="w-full h-3 bg-[#58b0e0] hover:h-5 hover:transition-all hover:duration-300 transition-all duration-300" />
      </div>
    </div>
  );
};

export default ProfilePage;