Aanand Mehta – Antigravity Portfolio


Welcome to the Aanand Mehta Antigravity Portfolio – a cutting-edge, interactive website that defies conventional design. Built with Next.js, TypeScript, and a heavy dose of Framer Motion, this portfolio showcases the professional journey of Aanand Mehta, a multi-cloud certified FinOps specialist and AWS Community Builder. The site features a unique "antigravity" aesthetic: every element floats, drifts, and reacts organically, creating an ethereal user experience.

✨ Features
Antigravity Visual Theme – Floating particles, drifting cards, 3D tilt effects, and parallax scrolling.

Dual Theme Support – Seamless dark/light mode toggle with custom color palettes (dark: deep cosmic, light: sophisticated grays with muted teal accents).

Fully Responsive – Optimized for all devices (mobile, tablet, desktop) with reduced animations on mobile for performance.

Interactive Sections

Hero – Animated name, rotating titles, and a floating 3D orb.

Certifications – Floating cards with 3D tilt and glow on hover.

Experience – 3D interactive timeline (Three.js) or a 2D parallax timeline.

Skills Constellation – Interactive force graph visualization of skills and endorsements.

Achievements – Expandable/flippable cards showcasing 2025 milestones.

About Page – Asymmetric layout with photo, bio, achievements, and specializations.

AI Instructor Chat (Optional) – Chat with an AI persona of Aanand, powered by OpenAI and Vercel AI SDK.

Performance Optimized – Lazy loading, Next.js Image, and code splitting.

🛠️ Tech Stack
Category	Technologies
Framework	Next.js 14 (App Router), React 18, TypeScript 5
Styling	TailwindCSS 3, clsx, tailwind-merge, HeadlessUI, Heroicons
Animation	Framer Motion 11, React Parallax Tilt, React Spring, React Intersection Observer
3D	Three.js, @react-three/fiber, @react-three/drei
Data Visualization	Recharts, D3, React Force Graph
State Management	Zustand, React Query, React Hook Form
AI Integration	Vercel AI SDK, OpenAI, LangChain, Zod
Development	ESLint, Prettier, Husky, lint-staged, Jest, Cypress 



📁 Folder Structure
text
antigravity-portfolio/
├── public/                     # Static assets (images, models)
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx
│   │   ├── page.tsx            # Home page
│   │   ├── about/              # About page
│   │   ├── experience/         # Experience page (optional)
│   │   ├── certifications/     # Certifications page (optional)
│   │   ├── ai-instructor/      # AI chat page (optional)
│   │   └── api/                 # API routes
│   ├── components/              # Reusable components
│   │   ├── layout/              # Navigation, Footer, AntigravityBackground
│   │   ├── ui/                  # Button, Card, Container, ThemeToggle
│   │   ├── sections/            # Hero, Certifications, Experience, Skills, Achievements
│   │   └── animations/          # FloatingElement, ParallaxSection, ParticleField
│   ├── lib/                      # Data, utilities, animation configs
│   ├── hooks/                    # Custom hooks (useFloating, useParallax)
│   ├── styles/                    # Global CSS
│   ├── types/                     # TypeScript interfaces
│   └── config/                    # Site and animation configuration
├── tailwind.config.js
├── next.config.js
└── package.json
🚀 Getting Started
Prerequisites
Node.js 18+ and npm/yarn/pnpm

Installation
Clone the repository

bash
git clone https://github.com/yourusername/aanand-mehta-portfolio.git
cd aanand-mehta-portfolio
Install dependencies

bash
npm install
# or
yarn install
# or
pnpm install
Run the development server

bash
npm run dev
# or
yarn dev
# or
pnpm dev
Open http://localhost:3000 in your browser.

Building for Production
bash
npm run build
npm start
🎨 Design Philosophy
The site embodies an "antigravity" aesthetic:

Weightlessness – Elements gently float, drift, and react to cursor movements.

Depth – Layered shadows, 3D transforms, and parallax create a sense of dimension.

Micro-interactions – Hover states lift, tilt, or glow; scroll reveals stagger in.

Unique Color Themes – Dark mode uses cosmic blues and purples; light mode employs sophisticated grays with muted teal accents, avoiding plain white.

Bespoke Typography – Playfair Display for headings, Work Sans for body, and JetBrains Mono for code snippets.

🌗 Theme Switching
Toggle between dark and light modes using the sun/moon icon in the navigation bar. The transition is smooth, and all elements adapt seamlessly. The particle background changes color to match the theme.

📸 Screenshots
Dark Theme	Light Theme
https://via.placeholder.com/600x400/1a1a2e/ffffff?text=Dark+Theme	https://via.placeholder.com/600x400/f5f5f5/1e1e1e?text=Light+Theme
🤖 AI Instructor (Optional Feature)
Engage with an AI persona of Aanand Mehta. Ask about his experience, certifications, or FinOps strategies. The AI is powered by OpenAI's GPT-4 and uses a custom prompt engineered from his LinkedIn profile.

To enable, add your OpenAI API key to .env.local:

text
OPENAI_API_KEY=your_key_here
📄 License
This project is licensed under the MIT License – see the LICENSE file for details.

🙏 Acknowledgements
Aanand Mehta for the inspiring profile.

The Next.js, Framer Motion, and Three.js communities.

All open-source contributors.

📬 Contact
For inquiries or collaborations, please reach out via LinkedIn or visit the website.


Made By: Rudra Prajapati

