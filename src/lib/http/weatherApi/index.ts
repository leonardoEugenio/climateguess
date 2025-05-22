import ky from 'ky'

export const weatherApi = ky.create({
  prefixUrl: 'https://api.weatherapi.com/v1',
})
