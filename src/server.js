import express from 'express';

const app = express();
app.use(express.json());

let profiles = [];
let id = 1;

app.post('/profile', (req, res) => {
  const profile = { id: id++, ...req.body };
  profiles.push(profile);
  res.status(201).json(profile);
});

app.get('/profile', (req, res) => res.json(profiles));

app.put('/profile/:id', (req, res) => {
  const i = profiles.findIndex(p => p.id == req.params.id);
  if (i === -1) return res.sendStatus(404);
  profiles[i] = { ...profiles[i], ...req.body };
  res.json(profiles[i]);
});

app.delete('/profile/:id', (req, res) => {
  profiles = profiles.filter(p => p.id != req.params.id);
  res.sendStatus(204);
});

app.listen(3000);
console.log('Servidor rodando em http://localhost:3000');
