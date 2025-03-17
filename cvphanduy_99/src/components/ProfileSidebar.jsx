import React from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileDetails from "./ProfileDetails";
import ProfileLinks from "./ProfileLinks";
import SkillBar from "./SkillBar";

const ProfileSidebar = () => {
  const skills = [
    { name: "C++", percentage: 90 },
    { name: "HTML", percentage: 60 },
    { name: "CSS", percentage: 60 },
    { name: "React", percentage: 90 },
    { name: "Figma", percentage: 70 },
    { name: "Github", percentage: 50 },
    { name: "AI ứng dụng code", percentage: 40 },
    { name: "Canva", percentage: 80 },
    { name: "Capcut", percentage: 70 },
  ];

  return (
    <aside className="flex flex-col p-6 text-white w-[300px] max-md:w-[250px] max-sm:hidden">
      <ProfileHeader />
      <ProfileDetails />
      {/* <ProfileLinks /> */}
      <section>
        <h2 className="mb-4 text-lg font-semibold">Skills</h2>
        <div className="flex flex-col gap-3">
          {skills.map((skill) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              percentage={skill.percentage}
            />
          ))}
        </div>
      </section>
    </aside>
  );
};

export default ProfileSidebar;
