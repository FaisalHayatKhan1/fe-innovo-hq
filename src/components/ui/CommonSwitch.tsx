import React from "react";

const CommonSwitch = ({ label, onChange, value, name }: any) => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        id={name}
        name={name}
        onChange={onChange}
        type="checkbox"
        value={value}
        className="sr-only peer"
      />
      <div className="w-[44px] h-[24px] bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-primary rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
      {label && (
        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          {label}
        </span>
      )}
    </label>
  );
};

export default CommonSwitch;
