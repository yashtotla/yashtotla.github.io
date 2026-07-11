export type LonLat = [number, number]

export const home: { name: string; coordinates: LonLat } = {
  name: 'Mumbai',
  coordinates: [72.877, 19.076],
}

export const destinations: Array<{ name: string; coordinates: LonLat }> = [
  { name: 'London', coordinates: [-0.128, 51.507] },
  { name: 'Thailand', coordinates: [98.9, 8.0] },
  { name: 'Singapore', coordinates: [103.82, 1.352] },
]

export interface Trip {
  city: string
  detail?: string
  date: string
  photo?: string
}

export const trips: Array<Trip> = [
  {
    city: 'Thailand',
    detail: 'Phuket · Krabi · Koh Samui · Koh Phangan',
    date: '2022',
  },
  { city: 'London', date: '2023' },
  { city: 'Singapore', date: '2024' },
  { city: 'London', date: '2024' },
  {
    city: 'Thailand',
    detail: 'Phuket · Krabi · Koh Samui · Koh Phangan',
    date: '2025',
  },
  { city: 'London', date: '2025' },
]
