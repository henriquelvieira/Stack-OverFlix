import { useState } from 'react';

function useForm(initialvalues) {
  const [values, setValues] = useState(initialvalues);

  const clearForm = () => {
    setValues(initialvalues);
  };

  const handleInputChange = (event) => {
    const fieldKey = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    setValues({
      ...values,
      [fieldKey]: fieldValue,
    });
  };

  return {
    values,
    handleInputChange,
    clearForm,
  };
}

export default useForm;
