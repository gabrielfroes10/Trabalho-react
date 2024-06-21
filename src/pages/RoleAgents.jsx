import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AgentList from '../components/AgentList';
import './RoleAgents.css';

function RoleAgents() {
  const { roleName } = useParams();
  const navigate = useNavigate();
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    axios.get('https://valorant-api.com/v1/agents')
      .then(res => {
        const filteredAgents = res.data.data.filter(agent => agent.role && agent.role.displayName === roleName);
        setAgents(filteredAgents);
      })
      .catch(err => console.error(err));
  }, [roleName]);

  return (
    <div className='role-agents-container text-white py-5'>
    <div className='container position-relative'>
      <button 
        className='btn btn-secondary position-absolute top-0 end-0 m-3' 
        onClick={() => navigate(-1)}
      >
        Voltar
      </button>
      <h1 className='text-center mb-4 mt-5'>Agentes: {roleName}</h1>
      <AgentList agents={agents} />
    </div>
    </div>
  );
}

export default RoleAgents;