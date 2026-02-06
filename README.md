# Adoramus Dominum - Evharistična Adoracija

Modern Catholic Eucharistic Adoration website built with Next.js 16, TypeScript, and Tailwind CSS.

## Features

- ✨ **Modern Design**: Clean, responsive design with smooth animations
- 🎨 **Sacred Theme**: Gold, navy, and cream color palette for reverent aesthetic
- 📱 **Mobile-First**: Fully responsive and accessible for all devices
- ⚡ **Next.js 16**: Latest features with Turbopack for blazing fast development
- 🎯 **TypeScript**: Fully typed for better developer experience
- 🎭 **Framer Motion**: Smooth, beautiful animations
- 📅 **FullCalendar**: Interactive calendar for adoration schedule
- 📝 **Form Validation**: React Hook Form + Zod for robust form handling
- ♿ **Accessible**: WCAG compliant with keyboard navigation and screen reader support

## Getting Started

### Prerequisites

- Node.js 20.9 or later
- npm or yarn

### Installation

```bash
# Navigate to the project
cd adoramus-nextjs

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### Building for Production

```bash
# Create an optimized production build
npm run build

# Start the production server
npm start
```

## Project Structure

```
adoramus-nextjs/
├── app/
│   ├── api/
│   │   └── signup/           # Signup form API endpoint
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout with fonts and metadata
│   └── page.tsx              # Main landing page
├── components/
│   ├── HeroSection.tsx       # Hero section with monstrance image
│   ├── AboutSection.tsx      # About adoration cards
│   ├── HowToSection.tsx      # 6-step guide
│   ├── TestimoniesSection.tsx # Saints' quotes carousel
│   ├── CalendarSection.tsx   # FullCalendar integration
│   ├── SignupSection.tsx     # Signup form with validation
│   └── Footer.tsx            # Footer with contact info
├── lib/
│   └── validations/
│       └── signup.ts         # Zod validation schemas
├── public/
│   └── images/               # 21 images (monstrance, saints, flags)
├── next.config.ts            # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS configuration
└── tsconfig.json             # TypeScript configuration
```

## Sections

1. **Hero**: Full-screen hero with monstrance image and call-to-action
2. **About**: Three cards explaining what adoration is, its purpose, and fruits
3. **How To**: Six-step guide for approaching adoration
4. **Testimonies**: Carousel of quotes from saints and theologians
5. **Calendar**: Interactive calendar showing adoration schedule
6. **Signup**: Form for joining the adoration community
7. **Footer**: Contact information and quick links

## Customization

### Colors

Edit `tailwind.config.ts` to customize the sacred color theme:

```typescript
colors: {
  gold: { DEFAULT: "#D4AF37", light: "#E5C158", dark: "#9A7D1F" },
  navy: { DEFAULT: "#0F172A", light: "#1E293B" },
  cream: { DEFAULT: "#FAF8F5", dark: "#F3F0ED" },
}
```

### Fonts

The site uses:
- **Crimson Text** (serif) for headings
- **Lato** (sans-serif) for body text

Both are loaded via `next/font/google` for optimal performance.

### Content

Edit the content in each component file:
- Testimonies: Update the `testimonies` array in `TestimoniesSection.tsx`
- Steps: Modify the `steps` array in `HowToSection.tsx`
- About cards: Edit the `cards` array in `AboutSection.tsx`

## Deployment

### Netlify (Recommended)

1. Push your code to GitHub
2. Connect your repo to Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Install `@netlify/plugin-nextjs` plugin

### Vercel

```bash
npm install -g vercel
vercel
```

## Environment Variables

Create a `.env.local` file for sensitive data:

```env
ADMIN_EMAIL=your-email@example.com
# Add more as needed for email services, databases, etc.
```

## Technologies

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Calendar**: FullCalendar
- **Icons**: Lucide React

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- Keyboard navigation supported
- ARIA labels for screen readers
- Focus indicators for all interactive elements
- Respects `prefers-reduced-motion`
- High contrast color scheme
- Large touch targets (44px minimum)

## License

This project is for religious and educational purposes.

## Contact

For questions or support:
- Phone: 041 601 854
- Email: info@adoramus.si

---

**Adoramus Dominum** - Ker molitev spreminja. 🙏
