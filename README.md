# Autonomous Prediction Market Agent

A professional, modern crypto website built with Next.js and TypeScript. This is the world's first Autonomous Prediction Market Agent platform.

## Features

- 🎨 Professional crypto-themed design with gradient animations
- 🎮 Interactive 3D scene with rotating geometric objects (Three.js)
- ⏱️ Real-time countdown timer
- 📊 Professional stats dashboard
- 🎯 Key features section
- 📱 Fully responsive design
- ⚡ Built with Next.js 14 and TypeScript
- 🎭 Tailwind CSS for styling
- 🌐 React Three Fiber for 3D graphics

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
├── app/
│   ├── globals.css      # Global styles and Tailwind imports
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Main page component
├── components/
│   ├── CountdownTimer.tsx  # Countdown timer component
│   └── Scene3D.tsx        # 3D scene with rotating objects
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## Build for Production

```bash
npm run build
npm start
```

## Customization

- Modify 3D objects in `components/Scene3D.tsx`
- Adjust countdown timer target time in `app/page.tsx`
- Update stats and features in `app/page.tsx`
- Customize colors and styling in `tailwind.config.ts` and `app/globals.css`

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **React 18** - UI library
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for React Three Fiber

