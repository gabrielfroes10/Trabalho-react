import React from 'react';
import { Link } from 'react-router-dom';

function AgentCard({ agent }) {
  return (
    <div className='col-12 col-md-4 mb-3'>
      <Link to={`/agent/${agent.displayName}`} className='btn btn-danger w-100 d-flex flex-column align-items-center p-3'>
        <img src={agent.displayIcon} alt={agent.displayName} className='mb-2' style={{ width: '50px', height: '50px' }} />
        <strong>{agent.displayName}</strong>
      </Link>
    </div>
  );
}

export default AgentCard;