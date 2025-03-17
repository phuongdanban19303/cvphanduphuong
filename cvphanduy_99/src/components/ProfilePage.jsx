"use client";
import React from "react";
import ProfileSidebar from "./ProfileSidebar";
import MainContent from "./MainContent";

const ProfilePage = () => {
  return (
    <main className="flex bg-teal-900 min-h-screen">
      <ProfileSidebar />
      <MainContent />
    </main>
  );
};

export default ProfilePage;
