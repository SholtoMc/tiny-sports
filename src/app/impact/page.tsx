import type { Metadata } from 'next'
import { TrendingUp, Users, DollarSign, MapPin } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { reader } from '@/lib/keystatic/reader'
import { GrantCard } from '@/components/grants/grant-card'

export const metadata: Metadata = {
  title: 'Impact',
  description:
    'See the impact Tiny Sports has made helping Australian community sports clubs secure grants and build capacity.',
}

const stats = [
  {
    icon: DollarSign,
    value: '$2M+',
    label: 'Total Grants Secured',
    description: 'Across federal, state, and local government programs',
  },
  {
    icon: Users,
    value: '150+',
    label: 'Clubs Supported',
    description: 'From football to netball, cricket to swimming',
  },
  {
    icon: TrendingUp,
    value: '85%',
    label: 'Grant Success Rate',
    description: 'For applications we assist with',
  },
  {
    icon: MapPin,
    value: '6',
    label: 'States & Territories',
    description: 'Supporting clubs across Australia',
  },
]

export default async function ImpactPage() {
  const grants = await reader.collections['grant-guides'].all()

  return (
    <div>
      {/* Hero */}
      <section className="to-background bg-gradient-to-b from-teal-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Our Impact
            </h1>
            <p className="text-muted-foreground mt-6 text-lg leading-8">
              Real results for real clubs. Here&apos;s how Tiny Sports is making
              a difference in Australian community sport.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <Card key={stat.label}>
                <CardContent className="pt-6 text-center">
                  <div className="bg-primary/10 mx-auto flex h-12 w-12 items-center justify-center rounded-full">
                    <stat.icon className="text-primary h-6 w-6" />
                  </div>
                  <p className="mt-4 text-3xl font-bold">{stat.value}</p>
                  <p className="mt-1 font-semibold">{stat.label}</p>
                  <p className="text-muted-foreground mt-2 text-sm">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories — auto-populated from grant guides */}
      {grants.length > 0 && (
        <section className="bg-muted/30 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl font-bold tracking-tight">
              Success Stories
            </h2>
            <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-center text-lg">
              Every club has a story. Here are a few we&apos;re proud to have
              been part of.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {grants.map((grant) => (
                <GrantCard
                  key={grant.slug}
                  slug={grant.slug}
                  title={grant.entry.title}
                  state={grant.entry.state}
                  status={grant.entry.status as 'open' | 'closed' | 'upcoming'}
                  amount={grant.entry.amount}
                  deadline={grant.entry.deadline}
                  excerpt={grant.entry.excerpt}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
