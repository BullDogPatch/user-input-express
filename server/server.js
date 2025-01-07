import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.post('/messages', (req, res) => {
  console.log('This is req.body', req.body);
  res.json({ status: 'Message received' });
});

app.listen(8080, () => console.log('Server is working'));
