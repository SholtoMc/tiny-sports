'use server'

interface ContactState {
  success: boolean
  message: string
}

export async function submitContact(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const club = formData.get('club') as string
  const subject = formData.get('subject') as string
  const message = formData.get('message') as string

  if (!name || !email || !subject || !message) {
    return {
      success: false,
      message: 'Please fill in all required fields.',
    }
  }

  // Basic email validation
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      success: false,
      message: 'Please enter a valid email address.',
    }
  }

  try {
    // TODO: Integrate with Resend or another email service
    // For now, log the submission
    console.log('Contact form submission:', {
      name,
      email,
      club,
      subject,
      message,
    })

    return {
      success: true,
      message: 'Thanks! We will get back to you soon.',
    }
  } catch {
    return {
      success: false,
      message: 'Something went wrong. Please try again or email us directly.',
    }
  }
}
