const request = require('supertest');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Mock data (replace with database connection for real tests)
const clients = [
    { id: 1, name: 'Acme Corp', email: 'info@acme.com' },
    { id: 2, name: 'Beta Inc', email: 'contact@beta.com' },
  ];
  
  const projects = [
    { id: 1, name: 'Project Alpha', clientId: 1 },
    { id: 2, name: 'Project Beta', clientId: 2 },
  ];

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


describe('Client Management API Tests', () => {
  it('should get all clients', async () => {
    const res = await request(app).get('/api/clients');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(clients);
  });

  it('should get a client by ID', async () => {
    const res = await request(app).get('/api/clients/1');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(clients[0]);
  });

  it('should return 404 if client is not found', async () => {
    const res = await request(app).get('/api/clients/999');
    expect(res.statusCode).toEqual(404);
    expect(res.body).toEqual({ message: 'Client not found' });
  });

  it('should get all projects', async () => {
    const res = await request(app).get('/api/projects');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(projects);
  });
});
