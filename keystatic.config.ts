import { config, fields, collection, singleton } from '@keystatic/core'

const useGitHub =
  typeof window === 'undefined'
    ? !!process.env.KEYSTATIC_GITHUB_CLIENT_ID
    : document.location.hostname !== 'localhost'

export default config({
  storage: useGitHub
    ? {
        kind: 'github',
        repo: 'SholtoMc/tiny-sports',
      }
    : {
        kind: 'local',
      },
  collections: {
    posts: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        excerpt: fields.text({
          label: 'Excerpt',
          multiline: true,
        }),
        date: fields.date({
          label: 'Publish Date',
          validation: { isRequired: true },
        }),
        author: fields.text({
          label: 'Author',
          defaultValue: 'Tiny Sports Team',
        }),
        featuredImage: fields.image({
          label: 'Featured Image',
          directory: 'public/images/posts',
          publicPath: '/images/posts/',
        }),
        content: fields.markdoc({
          label: 'Content',
        }),
      },
    }),
    'grant-guides': collection({
      label: 'Grant Guides',
      slugField: 'title',
      path: 'src/content/grant-guides/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Grant Name' } }),
        state: fields.select({
          label: 'State/Territory',
          options: [
            { label: 'National', value: 'national' },
            { label: 'New South Wales', value: 'nsw' },
            { label: 'Victoria', value: 'vic' },
            { label: 'Queensland', value: 'qld' },
            { label: 'Western Australia', value: 'wa' },
            { label: 'South Australia', value: 'sa' },
            { label: 'Tasmania', value: 'tas' },
            { label: 'ACT', value: 'act' },
            { label: 'Northern Territory', value: 'nt' },
          ],
          defaultValue: 'national',
        }),
        status: fields.select({
          label: 'Grant Status',
          options: [
            { label: 'Open', value: 'open' },
            { label: 'Closed', value: 'closed' },
            { label: 'Upcoming', value: 'upcoming' },
          ],
          defaultValue: 'open',
        }),
        amount: fields.text({
          label: 'Funding Amount',
          description: 'e.g. "$5,000 - $50,000"',
        }),
        deadline: fields.date({
          label: 'Application Deadline',
        }),
        eligibility: fields.text({
          label: 'Eligibility Summary',
          multiline: true,
        }),
        excerpt: fields.text({
          label: 'Short Description',
          multiline: true,
        }),
        content: fields.markdoc({
          label: 'Full Guide',
        }),
      },
    }),
  },
  singletons: {
    settings: singleton({
      label: 'Site Settings',
      path: 'src/content/site-settings',
      schema: {
        orgName: fields.text({
          label: 'Organisation Name',
          defaultValue: 'Tiny Sports',
        }),
        tagline: fields.text({
          label: 'Tagline',
          defaultValue:
            'Helping Australian community sports clubs with grant writing, brand development, and capacity building.',
        }),
        email: fields.text({
          label: 'Contact Email',
          defaultValue: 'hello@tiny-sports.org',
        }),
        phone: fields.text({
          label: 'Phone',
        }),
        socialLinks: fields.object(
          {
            facebook: fields.url({ label: 'Facebook' }),
            instagram: fields.url({ label: 'Instagram' }),
            linkedin: fields.url({ label: 'LinkedIn' }),
          },
          { label: 'Social Links' }
        ),
      },
    }),
  },
})
