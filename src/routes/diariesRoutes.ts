import express from 'express';

export const router = express.Router();

router.get('/',(_,res)=>{
  res.send('Fetching all entry diaries')
})

router.post('/',(_,res)=>{
  res.send('Saving data')
})
