# Social Media Application

A simple social media application built with React, TypeScript, and Vite.

- [Figma Design & Requirements](https://www.figma.com/design/0OQWLQmU14SF2cDhHPJ2sx/CodeLeap-Engineering-Test?node-id=33054-16&t=nSqM59VMjn9cLv0L-0)


## 📋 Required Features (Implemented)

### User Authentication
- [x] Sign up with username
- [x] Username stored in localStorage
- [x] Protected routes (redirect to signup if not authenticated)

### Post Management
- [x] **Create Post**: Users can create posts with title and content
- [x] **View Posts**: Display all posts in a list with newest first
- [x] **Edit Post**: Users can edit their own posts (title and content)
- [x] **Delete Post**: Users can delete their own posts with confirmation modal

### Post Display
- [x] Post title, content, username, and timestamp
- [x] Relative time display (e.g., "Now", "5 minutes ago", "2 hours ago")
- [x] User-specific actions (edit/delete icons only visible for own posts)

### UI/UX
- [x] Clean and modern interface
- [x] Form validation (disabled buttons when fields are empty)
- [x] Loading states
- [x] Error handling
- [x] Modals for edit and delete actions

### Responsive Design
- [x] Mobile-friendly layout
- [x] Responsive breakpoints (desktop and mobile)
- [x] Touch-friendly buttons on mobile
- [x] Adaptive spacing and typography

### Technical Implementation
- [x] React with TypeScript
- [x] React Query for data fetching and caching
- [x] RESTful API integration
- [x] Component-based architecture
- [x] Reusable form components
- [x] CSS modules for styling

---

## 🎁 Bonus Features

### Infinite Scroll
- [x] Automatic loading of more posts as you scroll
- [x] Pagination using API offset/limit parameters
- [x] Intersection Observer API for smooth detection
- [x] Loading indicator while fetching next page
- [x] "End of posts" indicator when all posts are loaded
- [x] Optimized performance with React Query's `useInfiniteQuery`

### Skeleton Loaders
- [x] Professional loading placeholders that mimic post structure
- [x] Smooth shimmer animation effect
- [x] Shown during initial page load
- [x] Also displayed when loading more posts (infinite scroll)
- [x] Responsive design matching actual posts
- [x] Better UX than simple "Loading..." text

### Toast Notifications
- [x] User feedback for all actions (create, edit, delete)
- [x] Success notifications (green) for completed actions
- [x] Error notifications (red) for failed operations
- [x] Smooth slide-in animations
- [x] Auto-dismiss after 3 seconds
- [x] Click to dismiss manually
- [x] Stacked notifications support (multiple toasts)
- [x] Mobile-responsive design

### Pretty Animations & Transitions
- [x] Post entrance animations (smooth fade-in with upward slide)
- [x] Interactive button effects (lift on hover with shadow)
- [x] Icon hover animations (scale and rotation effects)
- [x] Input focus states (border color and subtle glow)
- [x] Modal transitions (fade-in overlay, scale-in content)
- [x] Create post container animation (slide-down on mount)
- [x] Smooth transitions throughout the app
- [x] Professional polish without affecting performance

### Search & Filter
- [x] Real-time search across posts
- [x] Filter by title, content, or username
- [x] Debounced input (300ms) for optimal performance
- [x] Clear search button for easy reset
- [x] Helpful empty state messages
- [x] Search highlighting in UI
- [x] Responsive search bar design

### Error Boundaries
- [x] Graceful error handling throughout the app
- [x] Fallback UI for component crashes
- [x] Try Again functionality to recover from errors
- [x] Nested error boundaries for granular error isolation
- [x] PostList wrapped separately to protect CreatePost
- [x] User-friendly error messages
- [x] Console logging for debugging

### Coming soon...

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- pnpm

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm run dev

# Build for production
pnpm run build
```

---

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite
- **State Management**: React Query (TanStack Query)
- **Styling**: CSS3
- **API**: RESTful API (https://dev.codeleap.co.uk/careers/)

---

## 📁 Project Structure

```
src/
├── api/           # API integration
├── assets/        # Images, icons
├── components/    # Reusable components
├── layouts/       # Layout components
├── pages/         # Page components
├── types/         # TypeScript types
└── utils/         # Utility functions
```
