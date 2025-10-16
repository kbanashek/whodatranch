# Email Setup - 30 Second Configuration

Your contact forms need an access key from Web3Forms (free, no credit card).

## Steps (takes 30 seconds):

1. Go to: **https://web3forms.com/#start**
2. Enter your email: **kylebanashek@yahoo.com**
3. Click "Get Access Key"
4. Check your email and copy the access key (starts with something like `a1b2c3d4-...`)
5. Add it to Vercel:
   - Go to your Vercel project → **Settings** → **Environment Variables**
   - Add new variable:
     - Name: `WEB3FORMS_ACCESS_KEY`
     - Value: (paste your access key)
     - Environment: Check all 3 (Production, Preview, Development)
   - Click **Save**
6. Redeploy your site (or wait for auto-deployment)

## Local Testing (optional):

Create `.env.local` file:

```
WEB3FORMS_ACCESS_KEY=your_access_key_here
```

Then restart dev server: `npm run dev`

---

**That's it!** The forms will now send emails directly to kylebanashek@yahoo.com
