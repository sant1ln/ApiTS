import express from 'express';

const app = express()
app.use(express.json())

const PORT = 3000;

app.get('/ping',(_,res)=>{  
  console.log('Some pinged here!');
  res.send('pong')
})

app.listen(PORT,()=>console.log(`Listening at http://localhost:${PORT}`))