import { CompassDirection } from '@/@types/compass'

export function Compass({ direction }: { direction: CompassDirection }) {
  const angles = [
    { text: 'N', angle: 0 },
    { text: 'NNE', angle: 22.5 },
    { text: 'NE', angle: 45 },
    { text: 'ENE', angle: 67.5 },
    { text: 'E', angle: 90 },
    { text: 'ESE', angle: 112.5 },
    { text: 'SE', angle: 135 },
    { text: 'SSE', angle: 157.5 },
    { text: 'S', angle: 180 },
    { text: 'SSW', angle: 202.5 },
    { text: 'SW', angle: 225 },
    { text: 'WSW', angle: 247.5 },
    { text: 'W', angle: 270 },
    { text: 'WNW', angle: 292.5 },
    { text: 'NW', angle: 315 },
    { text: 'NNW', angle: 337.5 },
  ]

  const labelsAngles = [
    { text: 'N', angle: 0 },
    { text: 'NE', angle: 45 },
    { text: 'E', angle: 90 },
    { text: 'SE', angle: 135 },
    { text: 'S', angle: 180 },
    { text: 'SW', angle: 225 },
    { text: 'W', angle: 270 },
    { text: 'NW', angle: 315 },
  ]

  const directionAngle =
    angles.find((angle) => angle.text === direction)?.angle ?? 90

  return (
    <div className="size-36 bg-white rounded-full relative flex items-center justify-center">
      {/* Legendas */}
      {labelsAngles.map((label, index) => {
        const radian = (label.angle * Math.PI) / 180
        const radius = 60 // Distância do centro balanceada
        const x = Math.sin(radian) * radius
        const y = -Math.cos(radian) * radius

        return (
          <div
            key={index}
            className="absolute text-black font-bold text-sm select-none"
            style={{
              transform: `translate(${x}px, ${y}px)`,
              transformOrigin: 'center',
            }}
          >
            {label.text}
          </div>
        )
      })}

      <div className="bg-slate-300 shadow-2xl absolute left-1/2 top-1/2 size-24 rounded-full -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
        <div
          className={`flex items-center justify-center mx-auto gap-1 w-full p-1`}
          style={{ transform: `rotate(${directionAngle + 90}deg)` }}
        >
          <div className="w-full bg-primary h-[2px]"></div>
          <div className="bg-secondary p-1 rounded-full"></div>
          <div className="w-full bg-secondary h-[2px]"></div>
        </div>
      </div>
    </div>
  )
}
