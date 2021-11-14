import React from 'react';

// Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Home from './components/Home';

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  </Router>
);

export default App;
