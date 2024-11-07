import React, { useState } from 'react';

const StudentRegistrationForm = ({ onRegister }) => {
  const [name, setName] = useState('');
  const [className, setClassName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({ id: Date.now(), name, className });
    setName('');
    setClassName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Student Registration</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Student Name"
        required
      />
      <input
        type="text"
        value={className}
        onChange={(e) => setClassName(e.target.value)}
        placeholder="Class Name"
        required
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default StudentRegistrationForm;
