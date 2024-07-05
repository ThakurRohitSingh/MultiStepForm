import React from 'react';

const Navigation = ({ step, setStep, handleSubmit, isLastStep, isFirstStep, isStepValid }) => {
  return (
    <div className="navigation-buttons">
      {!isFirstStep && (
        <button className="nav-button" onClick={() => setStep(step - 1)}>
          Back
        </button>
      )}
      {!isLastStep && (
        <button
          className="nav-button"
          onClick={() => {
            if (isStepValid()) {
              setStep(step + 1);
            }
          }}
        >
          Next
        </button>
      )}
      {isLastStep && (
        <button className="nav-button" onClick={handleSubmit}>
          Submit
        </button>
      )}
    </div>
  );
};

export default Navigation;
