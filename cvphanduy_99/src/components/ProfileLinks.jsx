import React from "react";

const ProfileLinks = () => {
  return (
    <section className="mb-8">
      <h2 className="mb-4 text-lg font-semibold">Links</h2>
      <nav className="flex flex-col gap-2">
        <a href="#" className="text-sm cursor-pointer hover:text-neutral-200">
          LinkedIn
        </a>
        <a href="#" className="text-sm cursor-pointer hover:text-neutral-200">
          Dribbble
        </a>
        <a href="#" className="text-sm cursor-pointer hover:text-neutral-200">
          Behance
        </a>
      </nav>
    </section>
  );
};

export default ProfileLinks;
