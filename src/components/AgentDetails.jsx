import React from 'react';
import { useNavigate } from 'react-router-dom';


function AgentDetails({ agent }) {
  const navigate = useNavigate();

  return (
    <div className='agent-details-container'>
      <button 
        className='btn btn-secondary position-absolute top-0 end-0 m-3' 
        onClick={() => navigate(-1)}
      >
        Voltar
      </button>
      <div className='text-center mt-5'>
        <h2 className='mb-4'>{agent.displayName}</h2>
        <ul className='list-unstyled'>
          {agent.abilities.map((ability) => (
            <li key={ability.slot} className='mb-3'>
              {ability.displayIcon && (
                <img src={ability.displayIcon} alt={ability.displayName} className='mb-2' style={{ width: '50px', height: '50px' }} />
              )}
              <div><strong>{ability.displayName}</strong> - {ability.description}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AgentDetails;