const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Sample Data (replace with database connection)
const clients = [
  { id: 1, name: 'Acme Corp', email: 'info@acme.com' },
  { id: 2, name: 'Beta Inc', email: 'contact@beta.com' },
];

const projects = [
  { id: 1, name: 'Project Alpha', clientId: 1 },
  { id: 2, name: 'Project Beta', clientId: 2 },
];

// API Endpoints
app.get('/api/clients', (req, res) => {
  res.json(clients);
});

app.get('/api/clients/:id', (req, res) => {
  const clientId = parseInt(req.params.id);
  const client = clients.find(c => c.id === clientId);
  if (client) {
    res.json(client);
  } else {
    res.status(404).json({ message: 'Client not found' });
  }
});

app.get('/api/projects', (req, res) => {
  res.json(projects);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});