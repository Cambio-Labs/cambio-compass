# Cambio Compass

**Cambio Compass** is a tool that focuses on giving low-income entrepreneurs a clear, guided path to the support they need. It’s a fast, personalized matching tool designed to simplify the search for business support and growth opportunities in NYC. By answering a brief, tailored survey, entrepreneurs can surface their unique profile and pinpoint their specific business needs. Cambio Compass then cuts through the noise—instantly curating relevant resources, educational programs, and opportunities that not only match their eligibility, but also align with what they’re genuinely looking for.

## Features

- **Personalized Matching**: A wizard-style interface to collect user needs.
- **Instant Results**: Real-time filtering of resources based on user inputs.
- **Dynamic Interface**: Smooth animations and transitions using Framer Motion.
- **Responsive Design**: Fully optimized for mobile and desktop devices.
- **No Account Required**: Low-friction access to resources.

## Tech Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (via CDN for rapid prototyping)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Cambio-Labs/cambio-compass.git
   cd cambio-compass
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run preview`: Preview the production build locally.
- `npm run deploy`: Deploys the `dist` folder to GitHub Pages.

## Project Structure

```
src/
├── components/
│   ├── LandingPage.tsx    # Main landing page
│   ├── Wizard.tsx         # Survey interface
│   └── Results.tsx        # Matching results display
├── services/
│   └── matchingEngine.ts  # Logic for filtering resources
├── App.tsx                # Main application entry point
├── constants.tsx          # Configuration for questions and resources
└── types.ts               # TypeScript definitions
```

## Deployment

This project is configured for deployment on GitHub Pages.

1. Ensure your `vite.config.ts` has the correct `base` path set (e.g., `base: '/cambio-compass/'`).
2. Run the deploy script:
   ```bash
   npm run deploy
   ```

---