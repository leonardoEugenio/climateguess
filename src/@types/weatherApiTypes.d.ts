import { CompassDirection } from './compass'

type LocationTypes = {
  name: string
  region: string
  country: string
  lat: number
  lon: number
  tz_id: string
  localtime_epoch: number
  localtime: string
}

type CurrentClimateTypes = {
  last_updated_epoch: 1747925100
  last_updated: string
  temp_c: number
  temp_f: number
  is_day: number
  wind_mph: number
  wind_kph: number
  wind_degree: number
  wind_dir: CompassDirection
  pressure_mb: number
  pressure_in: number
  precip_mm: number
  precip_in: number
  humidity: number
  cloud: number
  feelslike_c: number
  feelslike_f: number
  windchill_c: number
  windchill_f: number
  heatindex_c: number
  heatindex_f: number
  dewpoint_c: number
  dewpoint_f: number
  vis_km: number
  vis_miles: number
  uv: number
  gust_mph: number
  gust_kph: number
  condition: {
    text: string
    icon: string
    code: number
  }
}

type CurrentClimateResponse = {
  location: LocationTypes
  current: CurrentClimateTypes
}
