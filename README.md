# Limitless AI

A ChatGPT-style AI assistant powered by OpenAI, built for Vercel.

## Project structure

```
limitless-ai/
├── public/
│   └── index.html      ← The full chat UI
├── api/
│   └── chat.js         ← Vercel serverless function (calls OpenAI)
├── vercel.json         ← Routing config
├── package.json
└── README.md
```

## Deploy to Vercel (step by step)

### 1. Push to GitHub
Create a new GitHub repo and push this folder to it.

```bash
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/YOUR_USERNAME/limitless-ai.git
git push -u origin main
```

### 2. Import to Vercel
1. Go to https://vercel.com and log in
2. Click **Add New → Project**
3. Import your GitHub repo
4. Leave all settings as default — Vercel auto-detects everything
5. Click **Deploy**

### 3. Add your OpenAI API key
1. In Vercel, go to your project → **Settings → Environment Variables**
2. Add a new variable:
   - **Name:** `OPENAI_API_KEY`
   - **Value:** your key from https://platform.openai.com/api-keys
3. Click Save, then go to **Deployments** and click **Redeploy**

That's it. Your app is live.

## Local development

```bash
npm install -g vercel
npm install
vercel dev
```

Then open http://localhost:3000

## Customization

- **Change the AI personality** → edit the `system` prompt in `api/chat.js`
- **Change the model** → replace `gpt-4o-mini` with `gpt-4o` in `api/chat.js` (costs more)
- **Change colors/branding** → edit the CSS variables at the top of `public/index.html`
