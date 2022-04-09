import { NewDiaryEntry, Visibilty, VisibiltyEnum, Weather, WeatherEnum } from "./types"


const parseWeather = (weatherFromRequest: any):Weather => {
  if(!isWeather(weatherFromRequest)){
    throw new Error('Incorrect or missing Weather')
  }

  return weatherFromRequest
}

const isWeather = (weatherFromRequest: any):boolean => {
  return Object.values(WeatherEnum).includes(weatherFromRequest)
}

const parseDate = (dateFromRequst:any):string =>{
  if(!isDate(dateFromRequst)){
    throw new Error('Incorrect or missing date')
  }
  return dateFromRequst
}

const isDate = (date:string):boolean => {
  return Boolean(Date.parse(date))
}

const parseVisibiliy = (visibilityFromRequest: any):Visibilty => {
  if(!isVisibiliy(visibilityFromRequest)){
    throw new Error('Incorrect or missing visibility')
  }

  return visibilityFromRequest
}

const isVisibiliy = (visibilityFromRequest: any):boolean => {
  return Object.values(VisibiltyEnum).includes(visibilityFromRequest)
}


export const toNewDiaryEntry = (object:NewDiaryEntry): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
   ...object,
   weather: parseWeather(object.weather),
   visibility: parseVisibiliy(object.visibility),
   date: parseDate(object.date)
  }
  return newEntry
}
