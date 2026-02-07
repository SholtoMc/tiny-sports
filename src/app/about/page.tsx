import type { Metadata } from 'next'
import { Heart, Users, Target, Lightbulb } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Tiny Sports — our mission to empower Australian community sports clubs through grant writing, brand development, and capacity building.',
}

const values = [
  {
    icon: Heart,
    title: 'Community First',
    description:
      'We believe every community deserves access to quality sport. We exist to level the playing field for smaller clubs.',
  },
  {
    icon: Users,
    title: 'Inclusion',
    description:
      'Sport is for everyone. We champion programs that break down barriers and welcome all participants.',
  },
  {
    icon: Target,
    title: 'Impact-Driven',
    description:
      'We measure our success by the success of the clubs we support. Real outcomes, not just outputs.',
  },
  {
    icon: Lightbulb,
    title: 'Practical Support',
    description:
      'No jargon, no fluff. We provide clear, actionable guidance that club volunteers can actually use.',
  },
]

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="to-background bg-gradient-to-b from-teal-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              About Tiny Sports
            </h1>
            <p className="text-muted-foreground mt-6 text-lg leading-8">
              We&apos;re a not-for-profit dedicated to helping Australian
              community sports clubs access the resources they need to grow and
              thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight">Our Mission</h2>
            <div className="text-muted-foreground mt-6 space-y-4 text-lg leading-8">
              <p>
                Community sports clubs are the backbone of Australian life. They
                teach kids teamwork, give adults a place to belong, and bring
                neighbourhoods together. But too many clubs struggle to keep the
                lights on, let alone grow.
              </p>
              <p>
                Tiny Sports was founded to change that. We provide free and
                low-cost support to help grassroots clubs navigate the complex
                world of grant funding, build strong brands, and develop the
                governance and planning capabilities they need for long-term
                sustainability.
              </p>
              <p>
                We&apos;re not a consultancy — we&apos;re a community
                organisation that believes sport has the power to transform
                lives, and that no club should miss out on opportunities simply
                because they don&apos;t have the expertise or resources to
                access them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight">
            Our Values
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="flex gap-4">
                <div className="bg-primary/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg">
                  <value.icon className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground mt-2">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
