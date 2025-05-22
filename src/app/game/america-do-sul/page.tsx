import SouthAmericaMap from '@/components/maps/southAmericaMap'
import { generateClientRenderedParameters } from '@/utils/game'

export default async function PageGameAmericaDoSul() {
  const { biome, location } = await generateClientRenderedParameters({
    continent: 'América do Sul',
  })
  return (
    <div className="w-full h-screen">
      <SouthAmericaMap />
      <div className="absolute bottom-8 left-1/2 max-w-screen-xl w-full rounded-xl bg-white p-8 z-50 -translate-x-1/2 shadow-2xl dark:bg-slate-900">
        <div className="grid grid-cols-[25%_75%] gap-4">
          <div className="border-r border-slate-200 pe-4">
            <strong className="uppercase tracking-widest text-primary text-lg">
              LOCALIZAÇÃO:
            </strong>
            <div className="space-y-1 mt-4 text-slate-900 dark:text-slate-100">
              <p className="">
                <strong>🌎 CONTINENTE:</strong> {location.continent}
              </p>
              <p>
                <strong>🏔️ AUTITUDE:</strong> {biome.altitudeInMeters} m
              </p>
              <p className="">
                <strong>🌳 CARATERISTICAS DO BIOMA:</strong> <br />{' '}
                {biome.characteristics}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
