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
import { Home, Minus, Plus, RotateCcw, X } from 'lucide-react'
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

const homeXY = projection(home.coordinates)

const placed = destinations.map((destination) => {
  const related = trips.filter((trip) => trip.city === destination.name)
  const latest = related.reduce((a, b) => (a.date >= b.date ? a : b))
  return {
    name: destination.name,
    count: related.length,
    photo: latest.photo,
    xy: projection(destination.coordinates),
  }
})

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

  const selectedTrips = selected
    ? trips
        .filter((trip) => trip.city === selected)
        .sort((a, b) => b.date.localeCompare(a.date))
    : []
  const selectedDetail = selectedTrips.find((trip) => trip.detail)?.detail

  return (
    <div className="bg-card relative aspect-[2/1] w-full touch-none overflow-hidden rounded-xl border select-none">
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
            vectorEffect="non-scaling-stroke"
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
          className="bg-foreground text-background pointer-events-none absolute flex size-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full shadow"
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
            onClick={() =>
              setSelected((s) => (s === location.name ? null : location.name))
            }
            aria-label={`${location.name}, ${location.count} ${location.count > 1 ? 'trips' : 'trip'}`}
            className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-transform hover:scale-105"
            style={styleFor(location.xy)}
          >
            <div className="relative">
              <div
                className={cn(
                  'bg-muted size-10 overflow-hidden rounded-full border-2 shadow-md',
                  isActive ? 'border-foreground' : 'border-background',
                )}
              >
                {location.photo ? (
                  <img
                    src={location.photo}
                    alt={location.name}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="text-muted-foreground flex h-full w-full items-center justify-center text-[9px]">
                    soon
                  </div>
                )}
              </div>
              {location.count > 1 ? (
                <span className="bg-foreground text-background absolute -top-1 -right-1 flex size-4 items-center justify-center rounded-full text-[9px] font-medium">
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

      {selected ? (
        <div className="bg-background/90 absolute inset-x-3 bottom-3 rounded-lg border p-3 shadow-lg backdrop-blur">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">
              {selected}
              <span className="text-muted-foreground">
                {` · ${selectedTrips.length} ${selectedTrips.length > 1 ? 'trips' : 'trip'}`}
              </span>
            </p>
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Close"
              className="text-muted-foreground hover:text-foreground cursor-pointer"
            >
              <X className="size-4" />
            </button>
          </div>
          <div className="mt-2 flex gap-2 overflow-x-auto">
            {selectedTrips.map((trip) => (
              <figure key={trip.date} className="w-20 shrink-0">
                <div className="bg-muted aspect-square overflow-hidden rounded-md border">
                  {trip.photo ? (
                    <img
                      src={trip.photo}
                      alt={`${trip.city}, ${trip.date}`}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="text-muted-foreground flex h-full items-center justify-center text-[10px]">
                      soon
                    </div>
                  )}
                </div>
                <figcaption className="text-muted-foreground mt-1 text-xs">
                  {trip.date}
                </figcaption>
              </figure>
            ))}
          </div>
          {selectedDetail ? (
            <p className="text-muted-foreground mt-2 text-xs">{selectedDetail}</p>
          ) : null}
        </div>
      ) : null}
    </div>
  )
}
