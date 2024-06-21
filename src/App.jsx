import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RoleAgents from './pages/RoleAgents';
import AgentInfo from './pages/AgentInfo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/role/:roleName" element={<RoleAgents />} />
        <Route path="/agent/:agentName" element={<AgentInfo />} />
      </Routes>
    </Router>
  );
}

export default App;