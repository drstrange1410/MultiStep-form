import React from 'react';
import { useState } from 'react';

const Step4 = ({ data, setData }) => {
  const [active, setActive] = useState('');

  const handleChange = () => {
    // Enable the button when any option is clicked
    setData(false);
  };

  return (
    <div className="bg-white flex flex-col items-center justify-center">
      <div className="p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
          What is your math comfort level?
        </h2>
        <p className="text-gray-600 mb-8 text-center">
          Choose the highest level you feel confident in — you can always adjust
          later.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div
            role="button"
            className={`bg-white-100 rounded-lg border justify-center border-gray hover:border-yellow-300 hover:shadow-lg align-text-bottom pt-3 py-4 pb-0 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 ${
              active === 'b1' ? 'border-yellow-300 shadow-lg' : 'bg-white-100'
            }`}
            onClick={() => {
              setActive('b1');
              handleChange();
            }}
          >
            <img alt="equation" src="./images/eq1.png" />
            {/* <p className="text-lg font-bold mb-2">5 × 1⁄2 = ?</p> */}
            <p className="text-gray-600 mb-1 text-center">Arithmetic</p>
            <p className="text-sm text-gray-500 text-center">Introductory</p>
          </div>
          <div
            role="button"
            className={`bg-white-100 rounded-lg border justify-center border-gray hover:border-yellow-300 hover:shadow-lg text-center pt-3 py-4 pb-0 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 ${
              active === 'b2' ? 'border-yellow-300 shadow-lg' : 'bg-white-100'
            }`}
            onClick={() => {
              setActive('b2');
              handleChange();
            }}
          >
            <img alt="equation" src="./images/eq2.png" className="pt-1.5" />
            <p className="text-gray-600 mb-1">Basic Algebra</p>
            <p className="text-sm text-gray-500">Foundational</p>
          </div>
          <div
            role="button"
            className={`bg-white-100 rounded-lg border p-4 justify-center border-gray hover:border-yellow-300 hover:shadow-lg  pt-0 text-center focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 ${
              active === 'b3' ? 'border-yellow-300 shadow-lg' : 'bg-white-100'
            }`}
            onClick={() => {
              setActive('b3');
              handleChange();
            }}
          >
            <img alt="equation" src="./images/eq3.png" />
            <p className="text-gray-600 mb-1">Intermediate Algebra</p>
            <p className="text-sm text-gray-500 mb-0">Intermediate</p>
          </div>
          <div
            role="button"
            className={`bg-white-100 rounded-lg border p-4 justify-center border-gray hover:border-yellow-300 hover:shadow-lg  pt-2 text-center focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 ${
              active === 'b4' ? 'border-yellow-300 shadow-lg' : 'bg-white-100'
            }`}
            onClick={() => {
              setActive('b4');
              handleChange();
            }}
          >
            <img alt="equation" src="./images/eq4.png" />
            <p className="text-gray-600 mb-1">Calculus</p>
            <p className="text-sm text-gray-500">Advanced</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step4;
