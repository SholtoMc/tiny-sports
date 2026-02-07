import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NonprofitOrganization',
  name: 'Tiny Sports',
  description:
    'Helping Australian community sports clubs with grant writing, brand development, and capacity building.',
  url: 'https://tiny-sports.org',
  areaServed: 'Australia',
  email: 'hello@tiny-sports.org',
}

export default function HomePage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero */}
      <section className="to-background relative overflow-hidden bg-gradient-to-b from-teal-50 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Empowering community
              <span className="text-primary"> sports clubs</span> to thrive
            </h1>
            <p className="text-muted-foreground mt-6 text-lg leading-8">
              We help Australian grassroots sports organisations secure funding,
              build their brand, and grow their capacity. Because every club
              deserves the chance to succeed.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/grants">
                  Explore Grants
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              How we help
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">
              Three core services to support your club at every stage.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              {
                title: 'Grant Writing',
                description:
                  'Expert guidance to find, apply for, and win grants. We simplify the process so you can focus on your sport.',
                href: '/services#grants',
              },
              {
                title: 'Brand Development',
                description:
                  'Build a strong club identity that attracts members, sponsors, and community support.',
                href: '/services#brand',
              },
              {
                title: 'Capacity Building',
                description:
                  'Strengthen your governance, volunteer management, and strategic planning for long-term sustainability.',
                href: '/services#capacity',
              },
            ].map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-card rounded-xl border p-8 transition-shadow hover:shadow-md"
              >
                <h3 className="group-hover:text-primary text-xl font-semibold">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mt-3 text-sm">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Impact stats */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8">
            {[
              { value: '5', label: 'Clubs Supported' },
              { value: '85%', label: 'Success Rate' },
              { value: '6', label: 'States & Territories' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold sm:text-4xl">{stat.value}</p>
                <p className="mt-1 text-sm opacity-80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-teal-50 px-8 py-16 text-center sm:px-16">
            <h2 className="text-3xl font-bold tracking-tight">
              Ready to take your club to the next level?
            </h2>
            <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-lg">
              Whether you need help with a grant application, a brand refresh,
              or strategic planning, we&apos;re here to help.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
