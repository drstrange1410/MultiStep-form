import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';
import { StepProgressBar } from './StepProgressBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [currdis, setcurrdis] = useState(true);

  const setData = (value) => {
    setcurrdis(value);
  };

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
    setcurrdis(true);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
    setcurrdis(true);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 data={currdis} setData={setData} />;
      case 2:
        return <Step2 data={currdis} setData={setData} />;
      case 3:
        return <Step3 data={currdis} setData={setData} />;
      case 4:
        return <Step4 data={currdis} setData={setData} />;
      case 5:
        return <Step5 />;
      case 6:
        return <Step6 />;
      default:
        return null;
    }
  };

  return (
    <div className="w-2/3 bg-white rounded-lg  p-6">
      <div className="mt-5 mb-8 flex flex-row">
        {currentStep > 1 && currentStep <= 5 && (
          <button
            className="w-1/12 bg-white-300 text-gray-800 font-bold py-0 px-4 rounded flex justify-center .."
            onClick={handlePrev}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        )}
        {currentStep <= 1 && <div className="w-1/12"></div>}
        {currentStep <= 5 && <StepProgressBar step={currentStep} />}
      </div>

      <div>{renderStep()}</div>
      <div className="mt-4 flex justify-center gap-2">
        {currentStep < 6 && (
          <button
            type="submit"
            class="bg-blue-500 text-white mt-4 disabled:bg-blue-300 px-3 py-2 rounded-md"
            onClick={handleNext}
            disabled={currentStep > 4 ? false : currdis}
          >
            Continue
          </button>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
