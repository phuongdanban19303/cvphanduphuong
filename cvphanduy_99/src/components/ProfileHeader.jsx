import React from "react";
// Import ảnh từ thư mục assets
import profileImage from "../assets/photo_2025-02-09_22-48-53.jpg"; // Thay your-image-name.jpg bằng tên file ảnh của bạn

const ProfileHeader = () => {
  return (
    <header className="flex flex-col items-center mb-8">
      <div className="overflow-hidden mb-4 rounded-full h-[120px] w-[120px]">
        <img
          src={profileImage}
          alt="Phan Duy Phuong profile"
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="mb-1 text-2xl font-semibold">PHAN DUY PHƯƠNG</h1>
      <p className="text-base text-neutral-200">Thực tập sinh JAVA</p>
    </header>
  );
};

export default ProfileHeader;
