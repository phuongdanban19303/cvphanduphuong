import React from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileDetails from "./ProfileDetails";
import ProfileLinks from "./ProfileLinks";
import SkillBar from "./SkillBar";

const ProfileSidebar = () => {
  const skills = [
    { name: "Figma", percentage: 90 },
    { name: "Sketch", percentage: 85 },
    { name: "Adobe Photoshop", percentage: 75 },
    { name: "Adobe Illustrator", percentage: 60 },
    { name: "Principle", percentage: 55 },
    { name: "Adobe XD", percentage: 50 },
    { name: "Adobe Illustrator", percentage: 60 },
    { name: "Principle", percentage: 55 },
    { name: "Adobe XD", percentage: 50 },
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
