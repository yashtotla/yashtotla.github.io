export interface Playlist {
  provider: 'spotify' | 'youtube'
  id: string
  label?: string
}

export const playlists: Array<Playlist> = [
  { provider: 'spotify', id: '6Jl5JMD0gN6xjYTf6Gir6J' },
  {
    provider: 'youtube',
    id: 'PLOo0IRB-sr5UGzg-2tOJ62ewHxKu-9GVd',
    label: "A friend's playlist",
  },
  {
    provider: 'spotify',
    id: '1nbuv5YmdZ95ASVkJIXY4v',
    label: "A friend's playlist",
  },
]
