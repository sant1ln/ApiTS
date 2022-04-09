export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
export type Visibilty = 'great' | 'good' | 'ok' | 'poor'
export type NewDiaryEntry = Omit<DiaryEntry,'id'>

export enum WeatherEnum {
  Sunny = 'sunny',
  Rainy = 'rainy',
  Cloudy = 'cloudy',
  Windy = 'windy',
  Stormy = 'stormy'
}

export enum VisibiltyEnum {
  great = 'great',
  Good = 'good',
  Ok = 'ok',
  Poor = 'poor',
}
export interface DiaryEntry {
  id: number,
  date: string,
  weather: Weather,
  visibility: Visibilty,
  comment: string
}
