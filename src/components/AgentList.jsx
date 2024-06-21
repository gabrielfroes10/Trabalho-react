import React from 'react';
import AgentCard from './AgentCard';


function AgentList({ agents }) {
  return (
    <div className='agent-list-container'>
    <div className='row m-5'>
      {agents.map(agent => (
        <AgentCard key={agent.uuid} agent={agent} />
      ))}
    </div>
    </div>
  );
}

export default AgentList;