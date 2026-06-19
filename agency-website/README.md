# RI Software Agency

RI Software Agency is a modern, premium digital solutions agency website. We build scalable digital solutions, from web and mobile apps to AI integrations. Partner with us for cutting-edge software development.

## 🚀 Technologies

This project is built with the latest modern web technologies:

- [Next.js](https://nextjs.org/) (App Router, Turbopack)
- [React](https://react.dev/) 19
- [Tailwind CSS](https://tailwindcss.com/) v4
- [Framer Motion](https://www.framer.com/motion/) (Animations & Micro-interactions)
- [EmailJS](https://www.emailjs.com/) (Contact Form)
- [Lucide React](https://lucide.dev/) (Icons)

## 💻 Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📧 Contact Form Setup (EmailJS)

The contact form is fully functional and uses [EmailJS](https://www.emailjs.com/). 

1. Copy `.env.local.example` to `.env.local`
2. Fill in your EmailJS credentials:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

Your EmailJS template should reference `{{name}}`, `{{email}}`, and `{{message}}`. Without these variables, the form falls back to a simulated success state (useful in development).

## 📄 Scripts

- `npm run dev`: Starts the development server using Turbopack
- `npm run build`: Creates an optimized production build
- `npm run start`: Starts the production server
- `npm run lint`: Runs ESLint

## 🌐 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.
