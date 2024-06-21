import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Home.css'; 

function Home() {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    axios.get('https://valorant-api.com/v1/agents')
      .then(res => {
        const validAgents = res.data.data.filter(agent => agent.role && agent.role.displayName);
        const uniqueRoles = [...new Map(validAgents.map(agent => [agent.role.displayName, agent.role]))].map(([, role]) => role);
        setRoles(uniqueRoles);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className='home-container'>
      <h1 className='text-center text-white'>Agentes por Função</h1>
      <div className='row justify-content-center'>
        {roles.map(role => (
          <div key={role.uuid} className='col-12 col-md-4 mb-3'>
            <Link to={`/role/${role.displayName}`} className='btn btn-primary w-100 d-flex flex-column align-items-center p-3'>
              <img src={role.displayIcon} alt={role.displayName} className='mb-2' style={{ width: '50px', height: '50px' }} />
              <strong>{role.displayName}</strong>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;