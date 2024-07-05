import React, { useState, useEffect } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Navigation from './Navigation';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(
    JSON.parse(localStorage.getItem('formData')) || {}
  );
  const [errors, setErrors] = useState({});

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const handleSubmit = () => {
    alert('Form submitted!');
    setFormData({});
    setStep(1);
    localStorage.removeItem('formData');
  };

  const validateStep = () => {
    let newErrors = {};
    if (step === 1) {
      if (!formData.name) newErrors.name = 'Name is required';
      if (!formData.email) newErrors.email = 'Email is required';
      if (!formData.phone) {
        newErrors.phone = 'Phone is required';
      } else if (!/^\d{10}$/.test(formData.phone)) {
        newErrors.phone = 'Phone must be a 10-digit number';
      }
    } else if (step === 2) {
      if (!formData.address1) newErrors.address1 = 'Address Line 1 is required';
      if (!formData.city) newErrors.city = 'City is required';
      if (!formData.state) newErrors.state = 'State is required';
      if (!formData.zip) {
        newErrors.zip = 'Zip Code is required';
      } else if (!/^\d{6}$/.test(formData.zip)) {
        newErrors.zip = 'Zip Code must be a 6-digit number';
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isStepValid = () => validateStep();

  return (
    <div className="form-container">
      {step === 1 && (
        <Step1 formData={formData} setFormData={setFormData} errors={errors} />
      )}
      {step === 2 && (
        <Step2 formData={formData} setFormData={setFormData} errors={errors} />
      )}
      {step === 3 && <Step3 formData={formData} />}
      <Navigation
        step={step}
        setStep={setStep}
        handleSubmit={handleSubmit}
        isLastStep={step === 3}
        isFirstStep={step === 1}
        isStepValid={isStepValid}
      />
    </div>
  );
};

export default MultiStepForm;
