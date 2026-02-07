import type { Metadata } from 'next'
import { TrendingUp, Users, DollarSign, MapPin } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

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

const caseStudies = [
  {
    club: 'Riverside Cricket Club',
    location: 'Regional Victoria',
    outcome: '$75,000 Community Sport Infrastructure Grant',
    story:
      'Riverside needed new practice nets and lighting for their junior program. We helped them prepare a detailed application including community impact data and co-contribution planning. The new facilities increased junior membership by 40%.',
  },
  {
    club: 'Northern Suburbs Netball Association',
    location: 'Brisbane, QLD',
    outcome: '$25,000 Active Clubs Grant + Brand Refresh',
    story:
      'NSNA was struggling to attract volunteers and sponsors with an outdated brand. We helped secure grant funding for a participation program while also guiding their brand refresh. Sponsorship revenue doubled within 12 months.',
  },
  {
    club: 'Coastal United Football Club',
    location: 'Central Coast, NSW',
    outcome: 'Strategic Plan + $45,000 in Grants',
    story:
      "A club at risk of folding due to declining membership and poor governance. We facilitated a strategic planning workshop, rebuilt their committee structure, and secured two grants for facility upgrades and a women's football program.",
  },
]

export default function ImpactPage() {
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

      {/* Case Studies */}
      <section className="bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight">
            Success Stories
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-center text-lg">
            Every club has a story. Here are a few we&apos;re proud to have been
            part of.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <Card key={study.club}>
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold">{study.club}</h3>
                    <p className="text-muted-foreground text-sm">
                      {study.location}
                    </p>
                  </div>
                  <p className="text-primary mb-4 text-sm font-medium">
                    {study.outcome}
                  </p>
                  <p className="text-muted-foreground text-sm">{study.story}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
