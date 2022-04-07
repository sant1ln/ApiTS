import express from 'express';
import { router } from './routes/diariesRoutes';

const app = express()
app.use(express.json())

const PORT = 3000;

app.use('/api/diaries',router)

/* app.get('/ping',(_,res)=>{  
  console.log('Some pinged here!');
  res.send('pong')
}) */

app.listen(PORT,()=>console.log(`Listening at http://localhost:${PORT}`))