import { ArrowUpRight } from 'lucide-react'

import { playlists } from '@/data/music'

function SpotifyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="#1DB954" aria-hidden="true" className={className}>
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0m5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02m1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2m.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3" />
    </svg>
  )
}

function YouTubeMusicIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <circle cx="12" cy="12" r="11" fill="#FF0000" />
      <path d="M9.75 8 L16 12 L9.75 16 Z" fill="#ffffff" />
    </svg>
  )
}

function href(provider: string, id: string) {
  return provider === 'spotify'
    ? `https://open.spotify.com/playlist/${id}`
    : `https://music.youtube.com/playlist?list=${id}`
}

export function MusicItems() {
  return (
    <>
      {playlists.map((playlist) => (
        <a
          key={playlist.id}
          href={href(playlist.provider, playlist.id)}
          target="_blank"
          rel="noopener noreferrer"
          className="group mb-4 flex break-inside-avoid items-center gap-2.5 rounded-xl border p-3 transition-colors hover:bg-muted/40"
        >
          {playlist.provider === 'spotify' ? (
            <SpotifyIcon className="size-7 shrink-0" />
          ) : (
            <YouTubeMusicIcon className="size-7 shrink-0" />
          )}
          <span className="min-w-0 flex-1 truncate text-sm font-medium">
            {playlist.label ?? 'My playlist'}
          </span>
          <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      ))}
    </>
  )
}
