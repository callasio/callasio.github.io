import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';

const App: React.FC = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/" element={
          <div>Hello, World!</div>
        }/>
      </Routes>
    </Router>
  );
}

export default App;
