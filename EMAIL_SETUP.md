# Email Contact Form Setup

The contact forms now use a proper backend email service (Resend) instead of `mailto:` links.

## Setup Instructions

### 1. Get a Resend API Key

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account (100 emails/day free tier)
3. Go to [API Keys](https://resend.com/api-keys)
4. Click "Create API Key"
5. Copy your API key (starts with `re_`)

### 2. Local Development Setup

1. Create a `.env.local` file in the project root:
   ```bash
   RESEND_API_KEY=re_your_actual_api_key_here
   ```

2. Restart your dev server:
   ```bash
   npm run dev
   ```

3. Test the contact form - you should receive emails at `kylebanashek@yahoo.com`

### 3. Vercel Production Setup

1. Go to your Vercel project dashboard
2. Go to **Settings** → **Environment Variables**
3. Add a new environment variable:
   - **Name**: `RESEND_API_KEY`
   - **Value**: `re_your_actual_api_key_here`
   - **Environment**: Production, Preview, Development (select all)
4. Click **Save**
5. Redeploy your project

## Testing

Once set up, submit a form on either:
- The "Schedule Showing" section (BookingForm)
- The footer "Schedule a Visit" form

You should receive an email at `kylebanashek@yahoo.com` with the form details.

## Changing the Recipient Email

To change where emails are sent, edit `/app/api/contact/route.ts`:

```typescript
to: ["your-email@example.com"],
```

## Important Notes

- The free tier includes 100 emails/day (more than enough for a property listing)
- Resend requires domain verification for production use with a custom "from" address
- For now, emails come from `onboarding@resend.dev` (Resend's test domain)
- To use your own domain, verify it in Resend dashboard and update the API route

