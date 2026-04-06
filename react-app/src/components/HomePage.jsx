import React, { useState } from 'react';

function HomePage() {
  const [login, setLogin] = useState(false);

  return (
    <>
      {login ? (
        <button onClick={() => setLogin(false)}>Logout</button>
      ) : (
        <button onClick={() => setLogin(true)}>Login</button>
      )}
    </>
  );
}

export default HomePage;