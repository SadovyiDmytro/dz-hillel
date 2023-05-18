// Form.js
import React, { useState, useEffect } from 'react';
import InputField from './InputField.js';
import './Form.css';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !phone) {
      setErrorMessage('Please fill in all required fields');
      return;
    }

    if (!isValidEmail(email)) {
      setErrorMessage('Please enter a valid email address');
      return;
    }

    if (!isValidPhone(phone)) {
      setErrorMessage('Please enter a valid phone number (12 digits)');
      return;
    }

    const newFormData = [...formData, { name, email, phone }];
    setFormData(newFormData);
    setName('');
    setEmail('');
    setPhone('');
    setErrorMessage('');
  };

  const isValidEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const isValidPhone = (value) => {
    const phoneRegex = /^\d{12}$/;
    return phoneRegex.test(value);
  };

  return (
    <div className='form-label'>
      <form onSubmit={handleSubmit}>
        <div className='form-name'>
            <InputField
            label="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
        </div>
        <InputField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
            label="Phone"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
        />
        <button className='input-btn' type="submit">Login</button>
    </form>
    {errorMessage && <p>{errorMessage}</p>}
    <h2 className='local-title'>Logined Users:</h2>
    <ul className='local-bank'>
        {formData.map((data, index) => (
          <li className='local-item' key={index}>
            <p>Name: {data.name}</p>
            <p>Email: {data.email}</p>
            <p>Phone: {data.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Form;