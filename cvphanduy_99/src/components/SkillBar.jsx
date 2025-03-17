import React from "react";

const SkillBar = ({ name, percentage }) => {
  return (
    <div>
      <h3 className="mb-1 text-sm">{name}</h3>
      <div className="w-full h-1 bg-teal-800 rounded-full">
        <div
          className="h-full bg-white rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
