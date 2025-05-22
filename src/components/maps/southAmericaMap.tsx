'use client'

import { useState, useEffect } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import { type LatLngBoundsLiteral } from 'leaflet'
import 'leaflet/dist/leaflet.css'

const southAmericaBounds: LatLngBoundsLiteral = [
  [-56.0, -82.0],
  [13.0, -34.0],
]

export default function SouthAmericaMap() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <div className="size-full bg-gray-100 animate-pulse rounded-lg" />
  }

  return (
    <MapContainer
      center={[-15, -60]}
      zoom={4}
      minZoom={3}
      maxZoom={7}
      maxBounds={southAmericaBounds}
      className="size-full z-0"
      maxBoundsViscosity={1.0}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png"
      />
    </MapContainer>
  )
}
