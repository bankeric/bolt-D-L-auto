# D&L Auto - Auto Body Repair Website

## Overview

D&L Auto is a professional auto body repair shop website built for a Boston-based business. The application is a single-page website showcasing services, customer testimonials, and contact information. It features multi-language support (English, Vietnamese, Spanish) to serve diverse communities in the Boston area. The site presents information about collision repair, insurance assistance, vehicle inspection, and related automotive services.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- **Framework**: React 18 with TypeScript for type safety and component-based architecture
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS for utility-first responsive design

**Component Structure:**
The application follows a component-based architecture with a single-page layout. All components are organized under `/src/components/` and include:
- Header with navigation and language switcher
- Hero section with call-to-action
- Services showcase with expandable details
- Stats/metrics display
- About section with process overview
- Testimonials with before/after project galleries
- FAQ section with accordion interface
- Contact form with business information
- Footer with links and social media

**State Management:**
- React Context API for global language state management
- Local component state using React hooks (useState, useEffect)
- No complex state management library needed due to simple data flow

**Internationalization (i18n):**
- Custom context-based translation system supporting English, Vietnamese, and Spanish
- Translations stored in `/src/translations/index.ts`
- `LanguageContext` provides global language state
- `useTranslation` hook for accessing translated content in components

### Styling Strategy

**Tailwind CSS Implementation:**
- Utility-first CSS framework for rapid UI development
- Custom color palette using brand colors (#1B3A5F for primary blue, #E31E24 for accent red)
- Responsive design with mobile-first approach
- PostCSS for CSS processing with Autoprefixer

**Design Patterns:**
- Gradient backgrounds for visual depth
- Overlay effects with opacity for text readability over images
- Consistent spacing and typography scales
- Hover effects and transitions for interactive elements
- Card-based layouts for content organization

### Development Tooling

**TypeScript Configuration:**
- Strict mode enabled for type safety
- Separate configs for application code and build tools
- React JSX transform for optimized output

**Code Quality:**
- ESLint with TypeScript support and React-specific rules
- React Hooks linting plugin for best practices
- React Refresh plugin for fast development feedback

**Build Configuration:**
- Vite optimized for React with plugin support
- Development server configured on port 5000
- Lucide-react icons excluded from optimization for better performance

## External Dependencies

### UI Libraries
- **lucide-react** (v0.344.0): Icon library providing consistent iconography throughout the application
- **React & React DOM** (v18.3.1): Core framework for building the user interface

### Backend Services
- **Supabase** (@supabase/supabase-js v2.57.4): Included as a dependency, likely for future backend integration such as:
  - Form submission storage for contact inquiries
  - Testimonial management
  - Analytics tracking
  - Content management
  
  Note: While Supabase client is installed, there's no visible implementation in the current codebase. This suggests either planned future features or removed functionality.

### Development Dependencies
- **Vite**: Build tool and development server
- **TypeScript**: Static type checking
- **Tailwind CSS**: Utility-first CSS framework
- **ESLint**: Code linting and quality enforcement
- **PostCSS & Autoprefixer**: CSS processing pipeline

### Hosting & Deployment
- Vercel deployment (based on meta tags referencing bolt-d-l-auto.vercel.app)
- Static site generation suitable for CDN distribution

### Assets & Media
The application relies on local static assets stored in the `/public` directory:
- Logo SVG file
- Service and testimonial images
- Before/after repair photos for portfolio showcase

### Future Integration Points
With Supabase already included, potential future integrations could include:
- Contact form submissions stored in database
- Admin panel for managing testimonials and service details
- Real-time appointment booking system
- Customer authentication for tracking repair status