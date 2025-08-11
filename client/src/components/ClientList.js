import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ClientList() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios.get('/api/clients')
      .then(response => setClients(response.data))
      .catch(error => console.error('Error fetching clients:', error));
  }, []);

  return (
    <div>
      <h2>Clients</h2>
      <ul>
        {clients.map(client => (
          <li key={client.id}>{client.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ClientList;