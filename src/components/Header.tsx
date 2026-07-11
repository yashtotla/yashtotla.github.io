import { Link } from '@tanstack/react-router'

import { ThemeToggle } from '@/components/theme-toggle'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/sysml', label: 'SysML' },
  { to: '/scratchpad', label: 'Scratchpad' },
] as const

const linkClass =
  'rounded-md px-2 py-1.5 text-sm whitespace-nowrap text-muted-foreground transition-colors hover:text-foreground'

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-3xl items-center gap-2 px-4">
        <Link
          to="/"
          aria-label="Home"
          className="font-heading shrink-0 text-lg font-semibold tracking-tight"
        >
          YT
        </Link>
        <nav className="flex flex-1 items-center justify-center gap-0.5 sm:gap-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === '/' }}
              className={linkClass}
              activeProps={{ className: 'text-foreground' }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="shrink-0">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
