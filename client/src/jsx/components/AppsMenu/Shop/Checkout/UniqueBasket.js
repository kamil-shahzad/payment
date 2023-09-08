import React, { useState } from 'react';
import axios from 'axios';

function UniqueBasket() {
  const [token, setToken] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/submit');
      const generatedToken = response.data.token;
      setToken(generatedToken);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Your form fields here */}
        <button type="submit">Submit</button>
      </form>
      {token && <div>Generated Token: {token}</div>}
    </div>
  );
}

export default UniqueBasket;
