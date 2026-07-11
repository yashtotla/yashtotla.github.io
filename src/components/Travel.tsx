import { useEffect, useRef, useState } from 'react'
import { geoEqualEarth, geoInterpolate, geoPath } from 'd3-geo'
import { feature } from 'topojson-client'
import type { FeatureCollection } from 'geojson'
import { select } from 'd3-selection'
import {
  type ZoomBehavior,
  type ZoomTransform,
  zoom,
  zoomIdentity,
} from 'd3-zoom'
import { ChevronLeft, ChevronRight, Home, Minus, Plus, RotateCcw, X } from 'lucide-react'
import worldData from 'world-atlas/countries-110m.json'

import { destinations, home, trips, type LonLat } from '@/data/travel'
import { cn } from '@/lib/utils'

const WIDTH = 800
const HEIGHT = 400

const world = feature(
  worldData as any,
  (worldData as any).objects.countries,
) as unknown as FeatureCollection

const projection = geoEqualEarth().fitSize([WIDTH, HEIGHT], {
  type: 'Sphere',
} as any)

const pathGen = geoPath(projection)

const homeXY = projection(home.coordinates)

const focusPoints = [home.coordinates, ...destinations.map((d) => d.coordinates)]
  .map((c) => projection(c))
  .filter((p): p is [number, number] => p != null)

const regionTransform = (() => {
  const xs = focusPoints.map((p) => p[0])
  const ys = focusPoints.map((p) => p[1])
  const x0 = Math.min(...xs)
  const x1 = Math.max(...xs)
  const y0 = Math.min(...ys)
  const y1 = Math.max(...ys)
  const bw = Math.max(x1 - x0, 1)
  const bh = Math.max(y1 - y0, 1)
  const k = Math.min(8, 0.6 * Math.min(WIDTH / bw, HEIGHT / bh))
  const tx = WIDTH / 2 - (k * (x0 + x1)) / 2
  const ty = HEIGHT / 2 - (k * (y0 + y1)) / 2
  return zoomIdentity.translate(tx, ty).scale(k)
})()

const placed = destinations.map((destination) => ({
  name: destination.name,
  count: trips.filter((trip) => trip.city === destination.name).length,
  photo: trips
    .filter((trip) => trip.city === destination.name)
    .reduce((a, b) => (a.date >= b.date ? a : b)).photo,
  xy: projection(destination.coordinates),
}))

function arcPath(from: LonLat, to: LonLat) {
  const interpolate = geoInterpolate(from, to)
  const coords: Array<string> = []
  for (let t = 0; t <= 1.0001; t += 0.02) {
    const projected = projection(interpolate(t))
    if (projected) coords.push(`${projected[0].toFixed(1)},${projected[1].toFixed(1)}`)
  }
  return `M${coords.join('L')}`
}

const controlButton =
  'flex size-7 items-center justify-center rounded-md border bg-background/80 text-muted-foreground shadow-sm backdrop-blur transition-colors hover:text-foreground'

export function Travel() {
  const svgRef = useRef<SVGSVGElement | null>(null)
  const zoomRef = useRef<ZoomBehavior<SVGSVGElement, unknown> | null>(null)
  const [transform, setTransform] = useState<ZoomTransform>(regionTransform)
  const [selected, setSelected] = useState<string | null>(null)
  const [photoIndex, setPhotoIndex] = useState(0)

  useEffect(() => {
    const node = svgRef.current
    if (!node) return
    const selection = select(node)
    const zoomBehavior = zoom<SVGSVGElement, unknown>()
      .extent([
        [0, 0],
        [WIDTH, HEIGHT],
      ])
      .scaleExtent([1, 12])
      .translateExtent([
        [0, 0],
        [WIDTH, HEIGHT],
      ])
      .filter((event) => event.type !== 'wheel')
      .on('zoom', (event) => setTransform(event.transform))
    selection.call(zoomBehavior)
    selection.call(zoomBehavior.transform, regionTransform)
    zoomRef.current = zoomBehavior
    return () => {
      selection.on('.zoom', null)
    }
  }, [])

  useEffect(() => {
    if (!selected) return
    const count = trips.filter((trip) => trip.city === selected).length
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') setSelected(null)
      else if (event.key === 'ArrowRight') setPhotoIndex((i) => (i + 1) % count)
      else if (event.key === 'ArrowLeft')
        setPhotoIndex((i) => (i - 1 + count) % count)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [selected])

  function scaleBy(factor: number) {
    const node = svgRef.current
    const behavior = zoomRef.current
    if (node && behavior) select(node).call(behavior.scaleBy, factor)
  }

  function reset() {
    const node = svgRef.current
    const behavior = zoomRef.current
    if (node && behavior) select(node).call(behavior.transform, regionTransform)
  }

  function styleFor(point: [number, number]) {
    const [x, y] = transform.apply(point)
    return { left: `${(x / WIDTH) * 100}%`, top: `${(y / HEIGHT) * 100}%` }
  }

  function openLocation(name: string) {
    setSelected((current) => (current === name ? null : name))
    setPhotoIndex(0)
  }

  const activeTrips = selected
    ? trips
        .filter((trip) => trip.city === selected)
        .sort((a, b) => b.date.localeCompare(a.date))
    : []
  const activeTrip = activeTrips[photoIndex]

  return (
    <div className="relative aspect-[2/1] w-full">
      <div className="bg-card absolute inset-0 touch-none overflow-hidden rounded-xl border select-none">
        <svg
          ref={svgRef}
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          className="absolute inset-0 h-full w-full cursor-grab active:cursor-grabbing"
        >
          <rect x={0} y={0} width={WIDTH} height={HEIGHT} fill="transparent" />
          <g transform={transform.toString()}>
            <g
              className="fill-muted-foreground/15 stroke-background"
              strokeWidth={0.5}
              strokeLinejoin="round"
            >
              {world.features.map((geo, index) => (
                <path
                  key={String(geo.id ?? index)}
                  d={pathGen(geo) ?? undefined}
                  vectorEffect="non-scaling-stroke"
                />
              ))}
            </g>
            <g className="stroke-foreground/40" fill="none" strokeWidth={1}>
              {destinations.map((destination) => (
                <path
                  key={destination.name}
                  d={arcPath(home.coordinates, destination.coordinates)}
                  vectorEffect="non-scaling-stroke"
                />
              ))}
            </g>
          </g>
        </svg>

        {homeXY ? (
          <div
            className="bg-foreground text-background pointer-events-none absolute flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full shadow"
            style={styleFor(homeXY)}
          >
            <Home className="size-4" />
          </div>
        ) : null}

        {placed.map((location) => {
          if (!location.xy) return null
          const isActive = selected === location.name
          return (
            <button
              key={location.name}
              type="button"
              onClick={() => openLocation(location.name)}
              aria-label={`${location.name}, ${location.count} ${location.count > 1 ? 'trips' : 'trip'}`}
              className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-transform hover:scale-105"
              style={styleFor(location.xy)}
            >
              <div className="relative">
                <div
                  className={cn(
                    'bg-muted size-12 overflow-hidden rounded-full border-2 shadow-md',
                    isActive ? 'border-foreground' : 'border-background',
                  )}
                >
                  {location.photo ? (
                    <img
                      src={location.photo}
                      alt={location.name}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="text-muted-foreground flex h-full w-full items-center justify-center text-[9px]">
                      soon
                    </div>
                  )}
                </div>
                {location.count > 1 ? (
                  <span className="bg-foreground text-background absolute -top-1 -right-1 flex size-5 items-center justify-center rounded-full text-[10px] font-medium">
                    {location.count}
                  </span>
                ) : null}
              </div>
            </button>
          )
        })}

        <div className="absolute top-2 right-2 flex flex-col gap-1">
          <button type="button" onClick={() => scaleBy(1.6)} aria-label="Zoom in" className={controlButton}>
            <Plus className="size-4" />
          </button>
          <button type="button" onClick={() => scaleBy(1 / 1.6)} aria-label="Zoom out" className={controlButton}>
            <Minus className="size-4" />
          </button>
          <button type="button" onClick={reset} aria-label="Reset view" className={controlButton}>
            <RotateCcw className="size-4" />
          </button>
        </div>
      </div>

      {activeTrip ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
          onClick={() => setSelected(null)}
        >
          <button
            type="button"
            onClick={() => setSelected(null)}
            aria-label="Close"
            className="absolute top-4 right-4 text-white/70 transition-colors hover:text-white"
          >
            <X className="size-6" />
          </button>

          {activeTrips.length > 1 ? (
            <>
              <button
                type="button"
                aria-label="Previous"
                onClick={(event) => {
                  event.stopPropagation()
                  setPhotoIndex(
                    (i) => (i - 1 + activeTrips.length) % activeTrips.length,
                  )
                }}
                className="absolute top-1/2 left-3 flex size-10 -translate-y-1/2 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                <ChevronLeft className="size-7" />
              </button>
              <button
                type="button"
                aria-label="Next"
                onClick={(event) => {
                  event.stopPropagation()
                  setPhotoIndex((i) => (i + 1) % activeTrips.length)
                }}
                className="absolute top-1/2 right-3 flex size-10 -translate-y-1/2 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                <ChevronRight className="size-7" />
              </button>
            </>
          ) : null}

          <figure
            className="flex flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            {activeTrip.photo ? (
              <img
                src={activeTrip.photo}
                alt={`${activeTrip.city}, ${activeTrip.date}`}
                className="max-h-[80vh] max-w-[88vw] rounded-lg object-contain shadow-2xl"
              />
            ) : null}
            <figcaption className="mt-3 text-center text-sm text-white">
              <span className="font-medium">{activeTrip.city}</span>
              <span className="text-white/60"> · {activeTrip.date}</span>
              {activeTrip.detail ? (
                <span className="text-white/60"> — {activeTrip.detail}</span>
              ) : null}
              {activeTrips.length > 1 ? (
                <span className="text-white/40">
                  {` · ${photoIndex + 1}/${activeTrips.length}`}
                </span>
              ) : null}
            </figcaption>
          </figure>
        </div>
      ) : null}
    </div>
  )
}
