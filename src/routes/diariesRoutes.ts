import express from 'express';
import { addEntry, findById, getEntries } from '../services/diariesServices';
import { toNewDiaryEntry } from '../utils';

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
  try{
    const newDiaryEntry = toNewDiaryEntry(req.body)
    
    const addedDiaryEntry = addEntry(newDiaryEntry)

    res.json(addedDiaryEntry)
  }catch{
    res.status(400).send('Error - Bad Request')
  }
})