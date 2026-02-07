import type { Metadata } from 'next'
import { Mail, MapPin, Phone } from 'lucide-react'
import { ContactForm } from '@/components/shared/contact-form'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Tiny Sports. We help Australian community sports clubs with grants, branding, and capacity building.',
}

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="to-background bg-gradient-to-b from-teal-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Get in Touch
            </h1>
            <p className="text-muted-foreground mt-6 text-lg leading-8">
              Whether you need help with a grant application or want to discuss
              how we can support your club, we&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact form + info */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-bold">Contact Details</h2>
              <div className="mt-6 space-y-4">
                <a
                  href="mailto:hello@tiny-sports.org"
                  className="text-muted-foreground hover:text-foreground flex items-center gap-3"
                >
                  <Mail className="text-primary h-5 w-5" />
                  hello@tiny-sports.org
                </a>
                <a
                  href="tel:+61437218197"
                  className="text-muted-foreground hover:text-foreground flex items-center gap-3"
                >
                  <Phone className="text-primary h-5 w-5" />
                  0437 218 197
                </a>
                <div className="text-muted-foreground flex items-center gap-3">
                  <MapPin className="text-primary h-5 w-5" />
                  Australia-wide (remote)
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold">Response Time</h3>
                <p className="text-muted-foreground mt-2 text-sm">
                  We aim to respond within 2 business days. For urgent grant
                  deadline queries, please note the deadline in your message.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
