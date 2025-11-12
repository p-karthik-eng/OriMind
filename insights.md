
**Structure:**
- Main page (page.js) orchestrates 7 sections: Navbar, Hero, EcosystemSection, InfinallSection, MVPFeatures, EcosystemVision, JoinMission, Footer
- Uses Next.js 16 with App Router, React 19
- Dynamic imports for Navbar and Hero to avoid SSR hydration issues with Three.js
- Scene component (3D graphics with react-three-fiber) exists but isn't used in the main page

**Tech Stack:**
- Next.js 16.0.1
- React 19.2.0
- Tailwind CSS v4 (via @tailwindcss/postcss)
- Framer Motion 12.23.24 for animations
- lucide-react 0.553.0 for icons
- @react-three/fiber & @react-three/drei for 3D (though Scene component not actively used)
- Three.js 0.181.1
- Fonts: Geist and Geist_Mono from next/font/google

**Visual Design:**
- Primary background: #F9FAFB (light gray-white) for most sections
- Black backgrounds for InfinallSection
- Dark gradient footer: #0B0B0D to #111217
- Text: predominantly black (#000000) for headings, gray scales for body
- Accent colors: blue/indigo gradients in Hero (#c7d2fe, #e0e7ff)
- Border colors: gray-200, gray-300, gray-800 depending on context
- Typography: Geist font family, various weights and sizes

**Key Features:**
- Animated grid background in Hero
- Framer Motion animations throughout (fade-ins, stagger animations, hover effects)
- Responsive design with mobile menu
- Multiple CTA buttons for "Join the Waitlist"
- Icon-based feature grids
- Floating animated elements in Hero

**Content Architecture:**
- Strong focus on "autonomous AI execution"
- Product name: "infinall AI" (flagship product)
- Value propositions around end-to-end automation
- Trillion-dollar ambition messaging
- Comparison to "Apple of Autonomous Intelligence"

Now I'll create a comprehensive insights.md document covering all 10 framework categories in detail.
