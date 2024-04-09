import React from 'react';

const Step5 = () => {
  return (
    <div className=" bg-white-100 flex items-center space-x-44 mb-40 w-full">
      <img
        src="/images/celebration.png"
        alt="Cheering Illustration"
        className="h-80"
      />
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          You're on your way!
        </h2>
        <div className="flex gap-2 mb-2">
          <img
            src="/images/star2.png"
            alt="star Illustration"
            className="h-5"
          />
          <img
            src="/images/star2.png"
            alt="star Illustration"
            className="h-5"
          />
          <img
            src="/images/star2.png"
            alt="star Illustration"
            className="h-5"
          />
          <img
            src="/images/star2.png"
            alt="star Illustration"
            className="h-5"
          />
          <img
            src="/images/star2.png"
            alt="star Illustration"
            className="h-5"
          />
        </div>

        <blockquote className="text-black mb-6 italic">
          "Through its engaging and well-structured courses, Brilliant has
          taught me mathematical concepts that I previously struggled to
          understand. I now feel confident approaching both technical job
          interviews and real world problem solving situations."
        </blockquote>
        <p className="text-black  italic">— Jacob S.</p>
      </div>
    </div>
  );
};

export default Step5;
