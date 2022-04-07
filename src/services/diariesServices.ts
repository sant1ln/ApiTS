import { DiaryEntry } from '../types';
import diairyData from './diaries.json';

const diares: Array<DiaryEntry> = diairyData as Array<DiaryEntry>;

export const getEntries = () => diares;

export const addEntry = () => null

 