'use client'

import { useActionState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { submitContact } from '@/app/contact/actions'

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContact, {
    success: false,
    message: '',
  })

  if (state.success) {
    return (
      <div className="rounded-lg border bg-teal-50 p-8 text-center">
        <h3 className="text-primary text-lg font-semibold">
          Thanks for reaching out!
        </h3>
        <p className="text-muted-foreground mt-2">
          We&apos;ll get back to you within 2 business days.
        </p>
      </div>
    )
  }

  return (
    <form action={formAction} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Your Name</Label>
          <Input
            id="name"
            name="name"
            required
            placeholder="Jane Smith"
            className="h-11"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@example.com"
            className="h-11"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="club">Club / Organisation Name</Label>
        <Input
          id="club"
          name="club"
          placeholder="Riverside Cricket Club"
          className="h-11"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="subject">What can we help with?</Label>
        <Input
          id="subject"
          name="subject"
          required
          placeholder="Grant application, brand development, etc."
          className="h-11"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Your Message</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your club and how we can help..."
        />
      </div>

      {state.message && !state.success && (
        <p className="text-destructive text-sm">{state.message}</p>
      )}

      <Button type="submit" size="lg" disabled={isPending}>
        {isPending ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}
