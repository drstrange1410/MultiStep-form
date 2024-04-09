import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const Step2 = ({ data, setData }) => {
  // const { register, handleSubmit } = useForm();

  const [active, setActive] = useState('');

  const handleChange = () => {
    // Enable the button when any option is clicked
    setData(false);
  };

  // console.log(active);
  // console.log(props.data);
  //const onClick = () => console.log(active);

  //   const onTrigger = () => {
  //     // Call the parent callback function
  //     this.props.parentCallback(this.props.target.id.value);
  //   };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 flex justify-center ...">
        Which are you most interested in?
      </h2>

      <p class="flex justify-center ...">
        Choose just one. This will help us get you started (but won't limit your
        experience).
      </p>

      <ul class="flex min-w-[240px] flex-col gap-2 p-2 font-sans text-base font-normal text-blue-gray-700">
        <li
          role="button"
          id="b1"
          className={`bg-white-100 rounded-lg shadow-sm border-gray border flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:border-yellow-300 hover:shadow-lg focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 ${
            active === 'b1' ? 'border-yellow-300 shadow-lg' : 'bg-white-100'
          }`}
          onClick={() => {
            setActive('b1');
            handleChange();
          }}
        >
          <div class="grid mr-4 place-items-center">
            <img
              alt="learning illustration"
              src="/images/learning.png"
              class="relative inline-block h-12 w-12  object-cover object-center"
            />
          </div>
          <div>
            <p class="font-medium ...">
              Learning specific skills to advance my career
            </p>
          </div>
        </li>
        <li
          role="button"
          className={`bg-white-100 rounded-lg shadow-sm border-gray border flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:border-yellow-300 hover:shadow-lg focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 ${
            active === 'b2' ? 'border-yellow-300 shadow-lg' : 'bg-white-100'
          }`}
          onClick={() => {
            setActive('b2');
            handleChange();
          }}
        >
          <div class="grid mr-4 place-items-center">
            <img
              alt="exploring illustration"
              src="/images/data-analysis.png"
              class="relative inline-block h-12 w-12  object-cover object-center"
            />
          </div>
          <div>
            <p class="font-medium ...">
              Exploring new topics I'm interested in
            </p>
          </div>
        </li>

        <li
          role="button"
          className={`bg-white-100 rounded-lg shadow-sm border-gray border flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:border-yellow-300 hover:shadow-lg focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 ${
            active === 'b3' ? 'border-yellow-300 shadow-lg' : 'bg-white-100'
          }`}
          onClick={() => {
            setActive('b3');
            handleChange();
          }}
        >
          <div class="grid mr-4 place-items-center">
            <img
              alt="maths"
              src="/images/calculator.png"
              class="relative inline-block h-12 w-12  object-cover object-center"
            />
          </div>
          <div>
            <p class="font-medium ...">Refreshing my math foundation</p>
          </div>
        </li>
        <li
          role="button"
          className={`bg-white-100 rounded-lg shadow-sm border-gray border flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:border-yellow-300 hover:shadow-lg focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 ${
            active === 'b4' ? 'border-yellow-300 shadow-lg' : 'bg-white-100'
          }`}
          onClick={() => {
            setActive('b4');
            handleChange();
          }}
        >
          <div class="grid mr-4 place-items-center">
            <img
              alt="target"
              src="/images/target.png"
              class="relative inline-block h-12 w-12 !rounded-full  object-cover object-center"
            />
          </div>
          <div>
            <p class="font-medium ...">Exercising my brain to stay sharp</p>
          </div>
        </li>
        <li
          role="button"
          className={`bg-white-100 rounded-lg shadow-sm border-gray border flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:border-yellow-300 hover:shadow-lg focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 ${
            active === 'b5' ? 'border-yellow-300 shadow-lg' : 'bg-white-100'
          }`}
          onClick={() => {
            setActive('b5');
            handleChange();
          }}
        >
          <div class="grid mr-4 place-items-center">
            <img
              alt="eyes"
              src="/images/eyes.png"
              class="relative inline-block h-12 w-12 !rounded-full  object-cover object-center"
            />
          </div>
          <div>
            <p class="font-medium ...">Something else</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Step2;
