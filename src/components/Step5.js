import React from 'react';

const Step5 = () => {
  return (
    <div className="bg-white grid grid-cols-1 gap-8 sm:grid-cols-2">
      <div>
        <img
          src="/images/celebration.png"
          alt="Cheering Illustration"
          className="h-full"
        />
      </div>

      <div className="flex flex-col m-auto justify-center p-4">
        <h2 className="text-2xl font-bold mb-4 ...">You're on your way!</h2>
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
        <div>
          <blockquote className="text-black mb-6 italic">
            "Through its engaging and well-structured courses, Brilliant has
            taught me mathematical concepts that I previously struggled to
            understand. I now feel confident approaching both technical job
            interviews and real world problem solving situations."
          </blockquote>
          <p className="text-black  italic">— Jacob S.</p>
        </div>
      </div>
    </div>
  );
};

export default Step5;
