import React from 'react';
import { useState } from 'react';

const Step1 = ({ data, setData }) => {
  // const { register, handleSubmit } = useForm();
  const [active, setActive] = useState('');

  const handleChange = () => {
    // Enable the button when any option is clicked
    setData(false);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center ...">
        Which describes you best?
      </h2>

      <p class="text-gray-600 mb-4 text-center">
        This will help us personalize your experience.
      </p>

      <ul class="flex flex-col gap-2 font-sans text-base font-normal text-blue-gray-700">
        <li
          role="button"
          className={`bg-white-100 rounded border-gray border flex items-center w-full p-3 text-start hover:border-yellow-300 hover:shadow-lg text-slate-950 ${
            active === 'b1' ? 'border-yellow-300 shadow-lg' : 'bg-white-100'
          }`}
          onClick={() => {
            setActive('b1');
            handleChange();
          }}
        >
          <div class="grid mr-4 place-items-center">
            <img
              alt="student"
              src="/images/studentIcon.png"
              class="relative inline-block h-12 w-12 object-cover object-center"
            />
          </div>
          <div>
            <p class="font-light ...">
              <span class="font-medium ...">Student </span>
              or soon to be enrolled
            </p>
          </div>
        </li>
        <li
          role="button"
          className={`bg-white-100 rounded border-gray border flex items-center w-full p-3 text-start hover:border-yellow-300 hover:shadow-lg text-slate-950 ${
            active === 'b2' ? 'border-yellow-300 shadow-lg' : 'bg-white-100'
          }`}
          onClick={() => {
            setActive('b2');
            handleChange();
          }}
        >
          <div class="grid mr-4 place-items-center">
            <img
              alt="professional"
              src="/images/professional.png"
              class="relative inline-block h-12 w-12  object-cover object-center"
            />
          </div>
          <div>
            <p class="font-light ...">
              <span class="font-medium ...">Professional </span>
              pursuing a career
            </p>
          </div>
        </li>

        <li
          role="button"
          className={`bg-white-100 rounded border-gray border flex items-center w-full p-3 text-start hover:border-yellow-300 hover:shadow-lg text-slate-950 ${
            active === 'b3' ? 'border-yellow-300 shadow-lg' : 'bg-white-100'
          }`}
          onClick={() => {
            setActive('b3');
            handleChange();
          }}
        >
          <div class="grid mr-4 place-items-center">
            <img
              alt="parent"
              src="/images/parent.png"
              class="relative inline-block h-12 w-12 object-cover object-center"
            />
          </div>
          <div>
            <p class="font-light ...">
              <span class="font-medium ...">Parent </span>
              of a school-age child
            </p>
          </div>
        </li>
        <li
          className={`bg-white-100 rounded border-gray border flex items-center w-full p-3 text-start hover:border-yellow-300 hover:shadow-lg text-slate-950 ${
            active === 'b4' ? 'border-yellow-300 shadow-lg' : 'bg-white-100'
          }`}
          onClick={() => {
            setActive('b4');
            handleChange();
          }}
        >
          <div class="grid mr-4 place-items-center">
            <img
              alt="lifelong learner"
              src="/images/oldwoman.png"
              class="relative inline-block h-12 w-12   object-cover object-center"
            />
          </div>
          <div>
            <p class="font-medium ...">Lifelong learner</p>
          </div>
        </li>
        <li
          className={`bg-white-100 rounded border-gray border flex items-center w-full p-3 text-start hover:border-yellow-300 hover:shadow-lg text-slate-950 ${
            active === 'b5' ? 'border-yellow-300 shadow-lg' : 'bg-white-100'
          }`}
          onClick={() => {
            setActive('b5');
            handleChange();
          }}
        >
          <div class="grid mr-4 place-items-center">
            <img
              alt="teacher"
              src="/images/teacher.png"
              class="relative inline-block h-12 w-12 object-cover object-center"
            />
          </div>
          <div>
            <p class="font-medium ...">Teacher</p>
          </div>
        </li>
        <li
          className={`bg-white-100 rounded border-gray border flex items-center w-full p-3 text-start hover:border-yellow-300 hover:shadow-lg text-slate-950 ${
            active === 'b6' ? 'border-yellow-300 shadow-lg' : 'bg-white-100'
          }`}
          onClick={() => {
            setActive('b6');
            handleChange();
          }}
        >
          <div class="grid mr-4 place-items-center">
            <img
              alt="other"
              src="/images/other.png"
              class="relative inline-block h-12 w-12 object-cover object-center"
            />
          </div>
          <div>
            <p class="font-medium ...">Other</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Step1;
