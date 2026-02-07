import type { Metadata } from 'next'
import Link from 'next/link'
import {
  FileText,
  Palette,
  TrendingUp,
  CheckCircle,
  ArrowRight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Grant writing, brand development, and capacity building services for Australian community sports clubs.',
}

const services = [
  {
    id: 'grants',
    icon: FileText,
    title: 'Grant Writing Support',
    description:
      'Navigate the complex world of government and corporate grants with confidence.',
    features: [
      'Grant discovery and eligibility assessment',
      'Application writing and review',
      'Budget preparation and project planning',
      'Acquittal and reporting guidance',
      'Access to our curated grant guide library',
    ],
  },
  {
    id: 'brand',
    icon: Palette,
    title: 'Brand Development',
    description:
      'Build a professional club identity that attracts members, sponsors, and community support.',
    features: [
      'Logo and visual identity design guidance',
      'Social media strategy and templates',
      'Sponsor attraction packages',
      'Website and digital presence advice',
      'Communication and marketing planning',
    ],
  },
  {
    id: 'capacity',
    icon: TrendingUp,
    title: 'Capacity Building',
    description:
      'Strengthen your club operations for long-term sustainability and growth.',
    features: [
      'Strategic planning workshops',
      'Governance and compliance guidance',
      'Volunteer recruitment and retention',
      'Financial management fundamentals',
      'Risk management and insurance',
    ],
  },
]

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="to-background bg-gradient-to-b from-teal-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Our Services
            </h1>
            <p className="text-muted-foreground mt-6 text-lg leading-8">
              Practical, hands-on support designed specifically for community
              sports clubs. No jargon, no unnecessary complexity.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service) => (
              <div key={service.id} id={service.id} className="scroll-mt-20">
                <Card className="overflow-hidden">
                  <CardHeader className="bg-muted/30 pb-8">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                        <service.icon className="text-primary h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">
                          {service.title}
                        </CardTitle>
                        <p className="text-muted-foreground mt-1">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <CheckCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">
            Not sure where to start?
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-lg">
            Reach out and tell us about your club. We&apos;ll help you figure
            out the best way forward.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/contact">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
