import React from 'react';

const Step5 = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-center">
      <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6">
        Learning paths based on your answers
      </h2>
      <p className="text-lg text-gray-600 text-center mb-12">
        Choose one to get started. You can switch anytime.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white-100 rounded-lg border justify-center border-gray hover:border-yellow-300 hover:shadow-lg">
          <div className="px-6 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Foundational Math Build
              </h3>
              <p className="text-gray-600">
                Build your foundational skills in algebra, geometry, and
                probability.
              </p>
            </div>

            <img alt="course" src="/images/course.png" />
          </div>
          <div className="px-6 py-4 bg-gray-100 mb-1">
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
              MOST POPULAR
            </span>
          </div>
        </div>
        <div className="bg-white-100 rounded-lg border justify-center border-gray hover:border-yellow-300 hover:shadow-lg">
          <div className="px-6 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Mathematical Thinking
              </h3>
              <p className="text-gray-600">
                Build your foundational skills in algebra, geometry, and
                probability.
              </p>
            </div>
            <img alt="course" src="/images/course.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step5;
