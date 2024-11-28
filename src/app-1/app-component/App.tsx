import React, { useState, useEffect } from 'react';
import '../index.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../../pages-2/home/home';
import SignIn from '../../pages-2/sign-in/sign-in';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem('loggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/sign-in" />} />
        <Route
          path="/sign-in"
          element={
            isLoggedIn ? <Navigate to="/" /> : <SignIn onEnter={() => setIsLoggedIn(true)} />
          }
        />
        <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/sign-in" />} />
      </Routes>
    </div>
  );
}

export default App;
