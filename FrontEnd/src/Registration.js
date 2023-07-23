import React, { useState } from 'react';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [erupiibal, setErupiibal] = useState(0); 
  const [message, setMessage] = useState(null); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password, erupiibal }),
      });
      const data = await response.json();
      setMessage(data.message); 
    } catch (error) {
      setMessage('Error registering user. Please try again.'); 
      console.error('Error registering user:', error);
    }
  };

  return (
   <div className="registration-form">
      <h2 align='center'><u>Sign Up</u></h2>
      {message && <p className={message.startsWith('Error') ? 'error-message' : 'success-message'}>{message}</p>}
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <label>Balance:</label>
        <input
          type="number"
          value={erupiibal}
          onChange={(e) => setErupiibal(parseFloat(e.target.value))}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;