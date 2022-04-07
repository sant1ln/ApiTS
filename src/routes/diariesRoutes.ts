import express from 'express';
import { addEntry, findById, getEntries } from '../services/diariesServices';

export const router = express.Router();

router.get('/',(_,res)=>{
  res.send(getEntries())
})

router.get('/:id',(req,res)=>{
  const diary = findById(Number(req.params.id))
  return (diary)
  ? res.send(diary)
  : res.send('Not found')
})

router.post('/',(req,res)=>{
  const {date,weather,visibility,comment} = req.body
  const newDiaryEntry = addEntry({date,weather,visibility,comment})
  res.json(newDiaryEntry)
})