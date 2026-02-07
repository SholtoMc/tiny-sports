import Link from 'next/link'
import { Mail, MapPin } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

const footerLinks = {
  about: [
    { name: 'Our Mission', href: '/about' },
    { name: 'Impact', href: '/impact' },
    { name: 'Blog', href: '/blog' },
  ],
  services: [
    { name: 'Grant Writing', href: '/services#grants' },
    { name: 'Brand Development', href: '/services#brand' },
    { name: 'Capacity Building', href: '/services#capacity' },
  ],
  resources: [
    { name: 'Grant Guides', href: '/grants' },
    { name: 'Contact Us', href: '/contact' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-primary font-heading text-lg font-bold"
            >
              Tiny Sports
            </Link>
            <p className="text-muted-foreground mt-3 text-sm">
              Helping Australian community sports clubs thrive through grant
              writing, brand development, and capacity building.
            </p>
            <div className="text-muted-foreground mt-4 flex flex-col gap-2 text-sm">
              <a
                href="mailto:hello@tinysports.com.au"
                className="hover:text-foreground inline-flex items-center gap-2"
              >
                <Mail className="h-4 w-4" />
                hello@tinysports.com.au
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Australia
              </span>
            </div>
          </div>

          {/* About links */}
          <div>
            <h3 className="font-heading text-sm font-semibold">About</h3>
            <ul className="mt-3 space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div>
            <h3 className="font-heading text-sm font-semibold">Services</h3>
            <ul className="mt-3 space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources links */}
          <div>
            <h3 className="font-heading text-sm font-semibold">Resources</h3>
            <ul className="mt-3 space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-muted-foreground text-xs">
            &copy; {new Date().getFullYear()} Tiny Sports. Not-for-profit
            organisation.
          </p>
          <p className="text-muted-foreground text-xs">ABN: Coming Soon</p>
        </div>
      </div>
    </footer>
  )
}
