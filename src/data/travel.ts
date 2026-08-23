export type LonLat = [number, number]

export const home: { name: string; coordinates: LonLat } = {
  name: 'Mumbai',
  coordinates: [72.877, 19.076],
}

export const current: {
  name: string
  detail: string
  coordinates: LonLat
} = {
  name: 'Atlanta',
  detail: 'Georgia Tech',
  coordinates: [-84.388, 33.749],
}

export const destinations: Array<{ name: string; coordinates: LonLat }> = [
  { name: 'London', coordinates: [-0.128, 51.507] },
  { name: 'Thailand', coordinates: [98.9, 8.0] },
  { name: 'Singapore', coordinates: [103.82, 1.352] },
  { name: 'Malaysia', coordinates: [101.687, 3.139] },
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
    photo: '/travel/thailand-2022.jpg',
  },
  { city: 'London', date: '2023', photo: '/travel/london-2023.jpg' },
  { city: 'Singapore', date: '2024', photo: '/travel/singapore-2024.jpg' },
  { city: 'London', date: '2024', photo: '/travel/london-2024.jpg' },
  {
    city: 'Thailand',
    detail: 'Phuket · Krabi · Koh Samui · Koh Phangan',
    date: '2025',
    photo: '/travel/thailand-2025.jpg',
  },
  { city: 'London', date: '2025', photo: '/travel/london-2025.jpg' },
  {
    city: 'Malaysia',
    detail: 'Kuala Lumpur · Langkawi',
    date: '2026',
    photo: '/travel/malaysia-2026.jpg',
  },
]
