import express from 'express';
import teams from '../data/equipos.db.json';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/api/v1/teams', (req, res) => {
  res.status(200).json(teams);
});

export default app;
