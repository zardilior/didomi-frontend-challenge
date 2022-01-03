import { useState } from 'react';
import { isEmail } from 'constants';

function useConsentForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    consents: new Set()
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value 
    })
  }

  const handleConsentChange = (event) => {
    const { checked, name } = event.target;
    const consentsSet = new Set(formData.consents);
    if (checked) {
      consentsSet.add(name);
    }
    else {
      consentsSet.delete(name);
    }
    setFormData({
      ...formData,
      consents: consentsSet
    });
  }

  const emailIsValid = isEmail(formData.email) || formData.email === '';

  const isValid = formData.name &&
                  formData.email &&
                  emailIsValid &&
                  formData.consents.size !== 0

  const resetFormData = () => {
    setFormData({
      name: "",
      email: "",
      consents: new Set()
    })
  }
  return {
    isValid,
    emailIsValid,
    handleConsentChange,
    handleChange,
    formData,
    setFormData,
    resetFormData,
  }
}
export default useConsentForm
