import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';
import { StepProgressBar } from './StepProgressBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import LoadingScreen from './LoadingScreen';

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [currdis, setcurrdis] = useState(true);
  const [loading, setLoading] = useState(true);

  // Simulate loading for 3 seconds

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
        // return <LoadingScreen loading={loading} setLoading={setLoading} />;
        return (
          <div>
            {loading ? (
              <LoadingScreen loading={loading} setLoading={setLoading} />
            ) : (
              <Step6 />
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-2/3 bg-white p-2">
      <div className="mt-5 mb-5 flex flex-row justify-center items-center">
        <div>
          {currentStep <= 5 && (
            <button
              className={`w-8 bg-white py-0 px-2 ${
                currentStep === 1 ? 'opacity-0' : 'opacity-100'
              }`}
              onClick={handlePrev}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
          )}
        </div>

        {currentStep <= 5 && <StepProgressBar step={currentStep} />}
      </div>

      <div>{renderStep()}</div>
      <div className="mt-4 flex justify-center gap-2">
        {currentStep < 6 && (
          <button
            type="submit"
            class="bg-neutral-950 text-white mt-4 disabled:bg-neutral-200 px-8 py-2 rounded"
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
