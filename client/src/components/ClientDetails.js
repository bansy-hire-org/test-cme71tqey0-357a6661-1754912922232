import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ClientDetails() {
  const { id } = useParams();
  const [client, setClient] = useState(null);

  useEffect(() => {
    axios.get(`/api/clients/${id}`)
      .then(response => setClient(response.data))
      .catch(error => console.error('Error fetching client details:', error));
  }, [id]);

  if (!client) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Client Details</h2>
      <p>Name: {client.name}</p>
      <p>Email: {client.email}</p>
      {/* Display other client details */}
    </div>
  );
}

export default ClientDetails;