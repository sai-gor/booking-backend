import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('hello from auth endpoint');
})

router.get('/register', (req, res) => {
  res.send('hello from auth register endpoint');
})

router.get('/login', (req, res) => {
  res.send('hello from auth login endpoint');
})

export default router