import React from 'react';

const Step3 = ({ data, setData }) => {
  setData(false);

  return (
    <div className=" bg-white flex items-center space-x-44 mb-40 w-full">
      <img
        src="/images/growth.png"
        alt="Pulley Illustration"
        className="h-80"
      />
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          You're in the right place
        </h2>
        <p className="text-gray-600 mb-8">
          Brilliant gets you hands-on to help improve your professional skills
          and knowledge. You'll interact with concepts and solve fun problems in
          math, science, and computer science.
        </p>
      </div>
    </div>
  );
};

export default Step3;
