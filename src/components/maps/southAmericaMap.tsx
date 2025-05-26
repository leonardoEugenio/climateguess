'use client'

import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from 'react-leaflet'
import L from 'leaflet'
import { type LatLngBoundsLiteral } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useState } from 'react'
import { renderToString } from 'react-dom/server'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { type IconType } from 'react-icons'

const southAmericaBounds: LatLngBoundsLiteral = [
  [-56.0, -82.0],
  [13.0, -34.0],
]

// Componente separado para os eventos do mapa
function MapEvents({
  setLocationSelected,
  locationSelected,
}: {
  locationSelected: { lat: number; lng: number } | null
  setLocationSelected: (location: { lat: number; lng: number } | null) => void
}) {
  const map = useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng
      setLocationSelected({ lat, lng })
      console.log('Local clicado:', { lat, lng })
    },
    locationfound(e) {
      setLocationSelected(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    },
  })

  const createReactIcon = (IconComponent: IconType, size = 32) => {
    const iconHtml = renderToString(
      <IconComponent className="text-primary size-full text-shadow-xl" />,
    )

    return new L.DivIcon({
      html: iconHtml,
      iconSize: [size, size],
      iconAnchor: [size / 2, size],
      popupAnchor: [0, -size],
      className: 'react-icon-marker',
    })
  }

  const customIcon = createReactIcon(FaMapMarkerAlt)

  return locationSelected === null ? null : (
    <Marker position={locationSelected} icon={customIcon}>
      <Popup>You are here</Popup>
    </Marker>
  )
}

export default function SouthAmericaMap() {
  const [locationSelected, setLocationSelected] = useState<{
    lat: number
    lng: number
  } | null>(null)

  return (
    <MapContainer
      center={[-15, -60]}
      zoom={4}
      minZoom={3}
      maxBounds={southAmericaBounds}
      className="size-full z-0"
      maxBoundsViscosity={1.0}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png"
      />
      <MapEvents
        setLocationSelected={setLocationSelected}
        locationSelected={locationSelected}
      />
    </MapContainer>
  )
}
