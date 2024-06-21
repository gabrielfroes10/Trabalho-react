import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AgentDetails from '../components/AgentDetails';
import './AgentInfo.css';

function AgentInfo() {
  const { agentName } = useParams();
  const [agent, setAgent] = useState(null);

  useEffect(() => {
    axios.get('https://valorant-api.com/v1/agents')
      .then(res => {
        const foundAgent = res.data.data.find(agent => agent.displayName === agentName);
        setAgent(foundAgent);
      })
      .catch(err => console.error(err));
  }, [agentName]);

  return (
    <div className='agent-info-container text-white py-5'>
    <div className='container'>
      {agent ? <AgentDetails agent={agent} /> : <p>Carregando...</p>}
    </div>
    </div>
  );
}

export default AgentInfo;