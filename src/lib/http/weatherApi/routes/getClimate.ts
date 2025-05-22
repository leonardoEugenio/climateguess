import { weatherApi } from '..'

type ClimateParams = {
  lat?: number
  lon?: number
  city?: string
}

export async function getClimate({ lat, lon, city }: ClimateParams) {
  let queryParams: string | undefined
  if (!lat && !lon && !city) {
    return Promise.reject(new Error('Missing parameters'))
  } else if (city) {
    queryParams = city
  } else if (lat && lon && !city) {
    queryParams = `${String(lat)},${String(lon)}`
  }

  if (!queryParams) {
    return Promise.reject(new Error('Missing parameters'))
  }

  const climate = await weatherApi
    .get('current.json', {
      searchParams: {
        key: String(process.env.NEXT_PUBLIC_WEATHER_API_KEY),
        q: queryParams,
      },
    })
    .json<CurrentClimateResponse>()

  return climate
}
