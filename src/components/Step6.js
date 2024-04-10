import React from 'react';
import { useState } from 'react';

const Step5 = () => {
  const [active, setActive] = useState('');

  return (
    <div className="bg-white flex flex-col items-center justify-center  mt-20">
      <h2 className="text-2xl font-bold mb-4 text-center ...">
        Learning paths based on your answers
      </h2>
      <p className="text-gray-600 mb-8 text-center">
        Choose one to get started. You can switch anytime.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          role="button"
          className={`bg-white-100 rounded border justify-center border-gray hover:border-yellow-300 hover:shadow-lg  ${
            active === 'b1' ? 'border-yellow-300 shadow-lg' : 'bg-white-100'
          }`}
          onClick={() => {
            setActive('b1');
          }}
        >
          <div className="flex justify-center">
            <span class="bg-yellow-500 text-black text-xs px-2.5 py-0.5 rounded-full  text-center  font-medium -translate-y-1/2 ">
              MOST POPULAR
            </span>
          </div>

          <div className="px-6 py-8 grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <p className="text-black">
                <span className="font-bold  ">Foundational Math </span>
                Build your foundational skills in algebra, geometry, and
                probability.
              </p>
            </div>

            <img alt="course" src="/images/courses3.png" />
          </div>
        </div>
        <div
          role="button"
          className={`bg-white-100 rounded border justify-center border-gray hover:border-yellow-300 hover:shadow-lg  ${
            active === 'b2' ? 'border-yellow-300 shadow-lg' : 'bg-white-100'
          }`}
          onClick={() => {
            setActive('b2');
          }}
        >
          <div className="px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-2 pb-0">
            <div>
              <div>
                <p className="text-black">
                  <span className="font-bold  ">Mathematical Thinking </span>
                  Build your foundational skills in algebra, geometry, and
                  probability.
                </p>
              </div>
            </div>
            <img alt="course" src="/images/courses3.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step5;
