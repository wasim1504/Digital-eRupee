import React, { useState } from "react";

const App = () => {
  const [message, setMessage] = useState("");

  const handleClick = async () => {
    const response = await fetch("/api/helloWorld");
    const data = await response.json();
    setMessage(data.message);
  };



  return (
    <div>
      <h1>Welcome to My React App</h1>
      <div>
        <button onClick={handleClick}>Click Me</button>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default App;
