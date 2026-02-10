# Social Media Application

A simple social media application built with React, TypeScript, and Vite.

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

- **Frontend Framework**: React 18
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
