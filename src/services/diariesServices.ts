import { DiaryEntry, NewDiaryEntry} from '../types';
import diairyData from './diaries.json';

const diares: Array<DiaryEntry> = diairyData as Array<DiaryEntry>;

const getEntries = () => diares;

const findById = (id:number): DiaryEntry | undefined=>{
  const entry = diares.find(diary => diary.id === id)
  return entry
}

const addEntry = (newDiaryEntry:NewDiaryEntry): DiaryEntry =>{
  const newDiary = {
    id: diares.length,
    ...newDiaryEntry,
  }
  diares.push(newDiary)
  return newDiary
}

export {
  getEntries,
  findById,
  addEntry
}