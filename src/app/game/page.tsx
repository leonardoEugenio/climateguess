import { getClimate } from '@/lib/http/weatherApi/routes/getClimate'

export default async function PageGame() {
  const climate = await getClimate({ lat: -22.725, lon: -47.6476 })

  console.log(climate)
  return <div>Game</div>
}
