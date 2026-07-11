import { SocialLinks } from '@/components/SocialLinks'

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-3xl items-center justify-center px-4 py-8">
        <SocialLinks />
      </div>
    </footer>
  )
}
