import { Link } from '@tanstack/react-router'
import { Menu } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { ThemeToggle } from '@/components/theme-toggle'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/sysml', label: 'SysML Corner' },
  { to: '/scratchpad', label: 'Scratchpad' },
] as const

const linkClass =
  'rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground'

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
      <div className="grid h-14 grid-cols-[1fr_auto_1fr] items-center gap-4 px-4 sm:px-6">
        {/* Left: logo mark */}
        <div className="flex items-center">
          <Link
            to="/"
            aria-label="Home"
            className="font-heading text-lg font-semibold tracking-tight"
          >
            YT
          </Link>
        </div>

        {/* Center: menu (desktop) */}
        <nav className="hidden items-center gap-1 sm:flex">
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

        {/* Right: theme toggle (+ mobile menu) */}
        <div className="flex items-center justify-end gap-2">
          <ThemeToggle />
          <div className="sm:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <SheetTitle className="px-4 pt-4">Menu</SheetTitle>
                <nav className="flex flex-col gap-1 px-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      activeOptions={{ exact: item.to === '/' }}
                      className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                      activeProps={{ className: 'text-foreground' }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
