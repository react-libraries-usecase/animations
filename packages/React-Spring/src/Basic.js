import React, { useState } from 'react';

const BasicForm = () => {
  const [value, setValue] = useState('');

  const handleChange = event => {
    setValue(event.target.value);
  };
  const handleSubmit = event => {
    alert('A name was submitted: ' + value);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type='text' value={value} onChange={handleChange} />
      </label>
      <input type='submit' value='Submit' />
    </form>
  );
};

export default BasicForm;
