import locations from '@/mocks/locations.json'
import codesConditionKoppenGeiger from '@/mocks/codesConditionKoppenGeiger.json'
import { getClimate } from '@/lib/http/weatherApi/routes/getClimate'

export function drawCities(filters?: {
  country?: string
  region?: string
  continent?: string
  state?: string
}) {
  let locationsInGame = locations

  if (!filters) {
    const randomIndex = Math.floor(Math.random() * locationsInGame.length)
    return locationsInGame[randomIndex]
  }

  const { country, region, continent, state } = filters
  if (country) {
    locationsInGame = locations.filter((l) => l.country === country)
  }
  if (region) {
    locationsInGame = locationsInGame.filter((l) => l.region === region)
  }
  if (continent) {
    locationsInGame = locationsInGame.filter((l) => l.continent === continent)
  }
  if (state) {
    locationsInGame = locationsInGame.filter((l) => l.state === state)
  }

  const randomIndex = Math.floor(Math.random() * locationsInGame.length)
  return locationsInGame[randomIndex]
}

export async function generateClientRenderedParameters(filters?: {
  country?: string
  region?: string
  continent?: string
  state?: string
}) {
  function getConditionToCode(conditionCode: number) {
    return codesConditionKoppenGeiger.find(
      (condition) => condition.code === conditionCode,
    ) as {
      code: number
      descriptionPt: string
      descriptionEn: string
      emoji: string
    }
  }

  const {
    city,
    altitude_m: altitudeInMeters,
    characteristics,
  } = drawCities(filters)

  const climate = await getClimate({ city })
  const {
    code: conditionCode,
    descriptionPt: conditionDescriptionPt,
    emoji: conditionEmoji,
  } = getConditionToCode(climate.current.condition.code)

  return {
    location: {
      continent: 'America do Sul',
    },
    biome: {
      altitudeInMeters,
      characteristics,
    },
    climate: {
      tempInCelsius: climate.current.temp_c,
      uv: climate.current.uv,
      humidity: climate.current.humidity,
      condition: {
        code: conditionCode,
        descriptionPt: conditionDescriptionPt,
        emoji: conditionEmoji,
      },
      wind: {
        speedInMetersPerHours: climate.current.wind_kph,
        direction: climate.current.wind_degree,
        gustsInMetersPerSecond: climate.current.windchill_c,
        windDirection: climate.current.wind_dir,
      },
    },
  }
}
