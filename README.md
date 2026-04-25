# SkillForge Academy

A modern, responsive website for an online tech academy featuring course listings, features, testimonials, and an integrated AI-powered chat assistant.
<img width="1864" height="2669" alt="image" src="https://github.com/user-attachments/assets/e2b12ecb-4494-40fd-bceb-7dbbbe129741" />
<img width="503" height="638" alt="image" src="https://github.com/user-attachments/assets/6c3ba647-6626-4e26-9cc7-98c0151d789c" />


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

## 🧪 Testing

### Test Strategy Overview

The skillforge-academy project uses a comprehensive testing approach to ensure reliability and quality across all features.

### Testing Tools

- **Vitest 3.2.4** - Unit testing framework
- **React Testing Library** - Component testing
- **Testing Library Jest DOM** - DOM testing utilities
- **Playwright/Cypress** - E2E testing (recommended for future)

### Test Structure

```
src/test/
├── unit/
│   ├── components/
│   │   ├── chat/
│   │   │   ├── ChatWidget.test.tsx
│   │   │   ├── ChatBubble.test.tsx
│   │   │   ├── ChatInput.test.tsx
│   │   │   ├── QuickChips.test.tsx
│   │   │   └── AssociateModal.test.tsx
│   │   ├── ui/
│   │   │   └── Button.test.tsx
│   │   └── pages/
│   │       └── Index.test.tsx
│   ├── hooks/
│   │   └── useConversationHistory.test.ts
│   └── lib/
│       └── utils.test.ts
├── integration/
│   ├── chat-flow.test.tsx
│   └── navigation.test.tsx
└── e2e/
    ├── user-journey.spec.ts
    └── mobile-experience.spec.ts
```

### Test Coverage Areas

#### 1. Page-Level Tests (Critical)

**Index Page**
- ✓ Rendering all sections (Navbar, Hero, Courses, Features, Testimonials, CTA, Footer)
- ✓ Chat widget integration and floating button behavior
- ✓ Modal open/close functionality
- ✓ Responsive design on different screen sizes
- ✓ Smooth scrolling navigation to sections

#### 2. Chat Component Tests (High Priority)

**ChatWidget**
- ✓ Initial state and welcome message display
- ✓ Message flow (user → AI response)
- ✓ localStorage persistence across page refreshes
- ✓ Quick chips rendering and query triggering
- ✓ Chat clear functionality and localStorage updates
- ✓ Typing indicator during AI "thinking" state
- ✓ Fuzzy matching for typo tolerance
- ✓ Error handling for API failures

**ChatBubble**
- ✓ User vs Bot styling with correct CSS classes
- ✓ Timestamp rendering when provided
- ✓ Accessibility (ARIA labels, keyboard navigation)
- ✓ Long message text wrapping and overflow handling

**ChatInput**
- ✓ Input validation (empty message handling)
- ✓ Character limit enforcement (2000 characters)
- ✓ Keyboard shortcuts (Enter to send, Shift+Enter for new line)
- ✓ Send button disabled state when empty
- ✓ Auto-resize textarea height adjustment

**QuickChips**
- ✓ All default chips rendering
- ✓ Custom queries triggered correctly
- ✓ Associate chip conditional rendering
- ✓ Disabled state handling

**AssociateModal**
- ✓ Connection flow (Connecting → Online state)
- ✓ Message sending (user input → agent response)
- ✓ Agent typing simulation
- ✓ Modal close behavior and state reset
- ✓ Auto-scroll to latest messages

#### 3. UI Component Tests (Medium Priority)

**Button Component**
- ✓ All button variants (default, outline, ghost, hero)
- ✓ Different size options
- ✓ Disabled state handling
- ✓ Loading state (if implemented)

**Navbar Component**
- ✓ Responsive mobile hamburger menu
- ✓ Active page highlighting
- ✓ Smooth scroll navigation

**Hero Section**
- ✓ Fade-in animation triggers
- ✓ CTA button click handlers
- ✓ Statistics display rendering

#### 4. Integration Tests (Important)

**Chat Flow Integration**
- ✓ Complete conversation flow (ask → respond → follow-up)
- ✓ Context memory across messages
- ✓ History loading from localStorage
- ✓ Cross-tab persistence

**Navigation Integration**
- ✓ Nav link clicks → smooth scroll to section
- ✓ Chat widget accessibility during scroll
- ✓ Mobile menu → section navigation

#### 5. Utility Function Tests

**Utils (lib/utils.ts)**
- ✓ cn() function for class name merging
- ✓ Other helper functions

#### 6. Hook Tests

**useConversationHistory**
- ✓ Create new conversation
- ✓ Add messages to conversation
- ✓ Load conversation by ID
- ✓ Delete conversations
- ✓ localStorage persistence

#### 7. Accessibility Tests (Important)

- ✓ Keyboard navigation for all interactive elements
- ✓ Screen reader compatibility (ARIA labels and roles)
- ✓ Focus management (modal focus traps)
- ✓ Color contrast (WCAG compliance)
- ✓ Semantic HTML and heading hierarchy

#### 8. Performance Tests (Optional)

- ✓ Large chat history performance (100+ messages)
- ✓ Hero section image load time
- ✓ Animation performance (60fps smooth)

#### 9. E2E Tests (Playwright/Cypress)

**User Journeys**
- ✓ New user: lands → explores courses → uses chat → enrolls
- ✓ Returning user: loads chat history → continues conversation
- ✓ Mobile user: navigates site → uses chat

#### 10. Edge Cases (Critical)

**Chat Widget**
- ✓ Empty chat history
- ✓ Very long messages (near character limit)
- ✓ Rapid message sending (spam prevention)
- ✓ Network errors during message sending
- ✓ localStorage quota exceeded
- ✓ Browser without localStorage support

**General**
- ✓ Slow network conditions
- ✓ Missing images/assets
- ✓ JavaScript disabled

### Testing Priority Phases

#### Phase 1: Critical Path (Start Here)
1. ChatWidget basic functionality
2. ChatInput send/receive
3. ChatBubble rendering
4. Index page rendering
5. localStorage persistence

#### Phase 2: Important Features
6. QuickChips functionality
7. AssociateModal flow
8. Navigation and scrolling
9. Responsive design
10. Accessibility basics

#### Phase 3: Enhancement
11. Integration tests
12. Error handling
13. Performance tests
14. E2E tests
15. Edge cases

### Running Tests

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test -- --coverage
```

### Test Best Practices

1. **Mock External Dependencies**: API calls, localStorage
2. **Test Isolation**: Each test should be independent
3. **Descriptive Names**: Test names should explain what they test
4. **Arrange-Act-Assert**: Clear test structure
5. **Coverage Goals**: Aim for 80%+ code coverage
6. **CI/CD Integration**: Run tests on every commit

### Test Example Structure

```typescript
describe("ComponentName", () => {
  beforeEach(() => {
    // Setup before each test
  });

  it("should do something specific", () => {
    // Arrange
    render(<Component />);
    
    // Act
    fireEvent.click(screen.getByRole("button"));
    
    // Assert
    expect(screen.getByText("Expected")).toBeInTheDocument();
  });
});
```

### Coverage Goals

- **Unit Tests**: 80%+ coverage
- **Component Tests**: 90%+ coverage
- **Integration Tests**: Key user flows covered
- **E2E Tests**: Critical paths covered

---

**Built with ❤️ for SkillForge Academy**
