import React, { useState } from 'react';
import RegistrationForm from './Registration';

const App = () => {
  // const [message, setMessage] = useState('');

  // const handleClick = async () => {
  //     const response = await fetch('/api/hello');
  //     const data = await response.json();
  //     setMessage(data.message);
  // };

  return (
    // <div>
    //   <h1>Welcome to My React App</h1>
    //   <div>
    //     <button onClick={handleClick}>Click Me</button>
    //     {message && <p>{message}</p>}
    //   </div>
    // </div>
    <div>
      <h1 align='center'>Welcome To Digital eRupii Project</h1>
        <div>
            <RegistrationForm />
        </div>
    </div>

  );
};

export default App;