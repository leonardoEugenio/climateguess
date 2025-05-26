import { Compass } from '@/components/compass'
import SouthAmericaMap from '@/components/maps/southAmericaMap'
import { generateClientRenderedParameters } from '@/utils/game'

export default async function PageGameAmericaDoSul() {
  const { biome, location, climate } = await generateClientRenderedParameters({
    continent: 'América do Sul',
  })

  return (
    <div className="w-full h-screen">
      <SouthAmericaMap />
      <div className="absolute bottom-8 left-1/2 max-w-screen-xl w-full rounded-xl bg-white p-8 z-50 -translate-x-1/2 shadow-2xl dark:bg-slate-900">
        <div className="grid grid-cols-3 gap-4">
          <div className="border-r border-slate-200 px-4">
            <strong className="uppercase tracking-widest text-primary text-lg">
              LOCALIZAÇÃO:
            </strong>

            <div className="space-y-1 mt-4 text-slate-900 dark:text-slate-100">
              <div className="bg-white dark:bg-slate-800 rounded-lg p-3 shadow-sm">
                <p className="">
                  <strong>🌎 CONTINENTE:</strong> {location.continent}
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-lg p-3 shadow-sm">
                <p>
                  <strong>🏔️ ALTITUDE:</strong> {biome.altitudeInMeters} m
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-slate-700 dark:to-slate-800 rounded-lg p-4">
                <div className="flex flex-col gap-2">
                  <p className="text-lg font-semibold">
                    <strong>🌳 CARACTERÍSTICAS DO BIOMA:</strong>
                  </p>
                  <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    {biome.characteristics}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-r border-slate-200 px-4">
            <strong className="uppercase tracking-widest text-primary text-lg">
              CLIMA:
            </strong>

            <div className="space-y-1 mt-4 text-slate-900 dark:text-slate-100">
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-5xl">{climate.condition.emoji}</span>
                    <div>
                      <div className="text-3xl font-bold">
                        {climate.tempInCelsius}°C
                      </div>
                      <p className="text-slate-600 dark:text-slate-400">
                        {climate.condition.descriptionPt}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <div className="bg-white dark:bg-slate-800 rounded-lg p-3 shadow-sm">
                  <p>
                    <strong>💧 Humidade Atual:</strong> {climate.humidity}%
                  </p>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-lg p-3 shadow-sm">
                  <p className="">
                    ☀️ <strong>Incidência de UV:</strong> {climate.uv}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="px-4">
            <strong className="uppercase tracking-widest text-primary text-lg">
              VENTO:
            </strong>

            <div className="space-y-1 mt-4 text-slate-900 dark:text-slate-100">
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-slate-700 dark:to-slate-800 rounded-lg p-4 mt-4">
                <div className="flex flex-row flex-wrap gap-2">
                  <Compass direction={climate.wind.windDirection} />

                  <div className="flex-1 flex flex-col items-center">
                    <div className="my-auto">
                      <p className="text-lg">
                        <strong className="font-semibold">🧭 DIREÇÃO:</strong>{' '}
                        {climate.wind.windDirection}
                      </p>
                      <p className="text-slate-600 dark:text-slate-400">
                        {climate.wind.speedInMetersPerHours} km/h
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
