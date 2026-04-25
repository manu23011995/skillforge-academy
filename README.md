# SkillForge Academy

A modern, responsive website for an online tech academy featuring course listings, features, testimonials, and an integrated AI-powered chat assistant.

## 🚀 Features

### Core Website Features
- **Hero Section**: Eye-catching landing section with course promotion and statistics
- **Courses Section**: Display available tech courses with detailed information
- **Features Section**: Highlight key benefits and learning methodologies
- **Testimonials**: Student reviews and success stories
- **Call to Action**: Enrollment prompts and conversion optimization
- **Responsive Design**: Fully responsive across all devices

### AI Chat Assistant
- **Intelligent Chat Widget**: Floating chat assistant for instant support
- **Fuzzy Matching**: Handles typos and variations in user queries
- **Conversation Memory**: Remembers context within sessions
- **Quick Actions**: Pre-defined questions for common queries
- **Live Agent Support**: "Speak to Associate" feature for human assistance
- **Typing Indicators**: Visual feedback during AI responses
- **LocalStorage Persistence**: Chat history saved across sessions

### Technical Features
- **TypeScript**: Full type safety throughout the application
- **React Router**: Client-side routing for navigation
- **TanStack Query**: Efficient data fetching and caching
- **Tailwind CSS**: Utility-first styling with custom design system
- **Shadcn UI**: Beautiful, accessible component library
- **Dark Mode Support**: Theme toggle for light/dark modes

## 🛠️ Tech Stack

### Frontend Framework
- **React 18.3.1** - UI library
- **Vite 5.4.19** - Build tool and dev server
- **TypeScript 5.8.3** - Type safety

### UI & Styling
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Shadcn UI** - Pre-built React components
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **Tailwind Animate** - Animation utilities

### State Management & Data
- **TanStack React Query 5.83.0** - Data fetching and caching
- **React Hook Form 7.61.1** - Form management
- **Zod 3.25.76** - Schema validation

### Routing
- **React Router DOM 6.30.1** - Client-side routing

### Testing
- **Vitest 3.2.4** - Unit testing framework
- **Testing Library** - React component testing

### Development Tools
- **ESLint 9.32.0** - Code linting
- **PostCSS 8.5.6** - CSS processing
- **Autoprefixer 10.4.21** - CSS vendor prefixing

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn or bun

### Setup Instructions

1. **Clone the repository**
```bash
git clone <repository-url>
cd skillforge-academy
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
bun install
```

3. **Start development server**
```bash
npm run dev
# or
yarn dev
# or
bun dev
```

4. **Open your browser**
Navigate to `http://localhost:5173` (or the port shown in terminal)

## 📁 Project Structure

```
skillforge-academy/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and static resources
│   ├── components/        # React components
│   │   ├── chat/         # Chat assistant components
│   │   │   ├── ChatWidget.tsx
│   │   │   ├── ChatBubble.tsx
│   │   │   ├── ChatInput.tsx
│   │   │   ├── QuickChips.tsx
│   │   │   └── AssociateModal.tsx
│   │   ├── ui/           # Shadcn UI components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Courses.tsx
│   │   ├── Features.tsx
│   │   ├── Testimonials.tsx
│   │   ├── CallToAction.tsx
│   │   └── Footer.tsx
│   ├── pages/            # Page components
│   │   └── Index.tsx
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
├── package.json          # Dependencies
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

## 🎨 Custom Design System

The project uses a custom design system defined in `src/index.css`:

### Color Palette
- **Primary**: Blue-purple gradient (240°, 75%, 60%)
- **Secondary**: Light purple (250°, 50%, 96%)
- **Accent**: Vibrant purple (270°, 70%, 65%)
- **Background**: Off-white (220°, 40%, 99%)
- **Card**: White (0°, 0%, 100%)

### Custom Gradients
- `--gradient-hero`: Background gradient for hero section
- `--gradient-primary`: Primary action gradient
- `--gradient-user`: Chat user bubble gradient
- `--gradient-header`: Chat header gradient

### Custom Shadows
- `--shadow-soft`: Subtle shadow for cards
- `--shadow-card`: Medium shadow for elevated elements
- `--shadow-glow`: Glowing effect for CTAs
- `--shadow-bubble`: Chat bubble shadow
- `--shadow-widget`: Chat widget shadow

### Animations
- `animate-fade-in-up`: Fade in with upward movement
- `animate-fade-in`: Simple fade in
- `animate-float`: Floating animation
- `animate-bubble-in`: Chat bubble entrance
- `animate-typing-dot`: Typing indicator animation

## 🤖 Chat Assistant Features

### Intelligent Responses
- **Fuzzy String Matching**: Uses Levenshtein distance for typo tolerance
- **Context Awareness**: Remembers previous questions in conversation
- **Rule-based Logic**: Pre-defined responses for common queries

### User Experience
- **Quick Chips**: One-tap access to common questions
- **Typing Indicator**: Visual feedback during AI processing
- **Auto-scroll**: Automatically scrolls to latest messages
- **Conversation History**: Persists across page refreshes via localStorage

### Live Agent Support
- **Simulated Agent**: "Speak to Associate" opens live chat modal
- **Agent Simulation**: Realistic typing patterns and responses
- **Connection Status**: Visual indicator of agent availability

### localStorage Keys
- `skillforge-chat-history`: Stores conversation history
- `skillforge-previous-questions`: Stores asked questions for context

## 🚀 Available Scripts

### Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run build:dev    # Build for development mode
npm run preview      # Preview production build
```

### Code Quality
```bash
npm run lint         # Run ESLint
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1280px

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
VITE_API_URL=your_api_url
VITE_APP_TITLE=SkillForge Academy
```

### Tailwind Configuration
Customize `tailwind.config.ts` to modify:
- Color palette
- Spacing scale
- Font families
- Breakpoints
- Plugins

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- UI components from [Shadcn UI](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Design inspiration from modern SaaS websites

## 📞 Support

For support, email support@skillforgeacademy.com or use the chat widget on the website.

---

**Built with ❤️ for SkillForge Academy**
