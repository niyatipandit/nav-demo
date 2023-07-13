import React from 'react';
import { BrowserRouter, Route, Routes, Link, useNavigate } from 'react-router-dom';
import { Home } from './home';

// Component for the page to be redirected to
const RedirectedPage = () => {
  return <h2>This is the redirected page!</h2>;
};

// Component for the page from where redirection will happen
const HomePage = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    // Perform any necessary actions before redirection
    // ...

    // Redirect to the target page
    navigate('/home.js');
  };

  return (
    <div>
      
      <button onClick={handleRedirect}>Redirect to another page</button>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/home.js">Home</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home.js" element={<RedirectedPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
