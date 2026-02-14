# NEET/JEE Preparation Platform

![Production Ready](https://img.shields.io/badge/status-production%20ready-brightgreen)

India's most structured free NEET/JEE preparation platform built with modern web technologies.

## 🚀 Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **Prisma** - ORM for PostgreSQL
- **JWT** - Authentication

## 📁 Project Structure

```
jeeneet/
├── apps/
│   ├── web/          # Next.js Frontend
│   └── api/          # Express.js Backend
├── packages/
│   ├── types/        # Shared TypeScript types
│   └── ui/           # Shared UI components
├── docs/             # Documentation
└── package.json      # Root package.json with workspaces
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm 10+ or pnpm 8+
- PostgreSQL 15+
- Redis (optional)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd jeeneet
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your configuration.

4. **Set up the database**
   ```bash
   npm run db:generate  # Generate Prisma client
   npm run db:push      # Push schema to database
   ```

5. **Start development servers**
   ```bash
   npm run dev
   ```
   This starts both frontend (port 3000) and backend (port 4000).

### Individual Development Servers

```bash
npm run dev:web    # Start only frontend
npm run dev:api    # Start only backend
```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start all development servers |
| `npm run build` | Build all apps and packages |
| `npm run lint` | Lint all code |
| `npm run test` | Run all tests |
| `npm run clean` | Clean all build artifacts |
| `npm run format` | Format code with Prettier |
| `npm run db:generate` | Generate Prisma client |
| `npm run db:push` | Push database schema |
| `npm run db:studio` | Open Prisma Studio |

## 🎨 Design System

The platform follows a clean, minimal Stripe.com-style design:

- **Primary Color**: Blue (#3B82F6)
- **Neutral Grays**: Tailwind's neutral palette
- **Dark/Light Theme**: Full theme support from the start
- **Typography**: Inter font family
- **Animations**: Smooth transitions with Framer Motion

## 📚 Features

### For Students
- 📊 **Smart Dashboard** - Track progress, streaks, and weak areas
- 📝 **PYQ Engine** - Practice previous year questions with filters
- 🎯 **Mock Tests** - Real exam simulation with analytics
- 📓 **Mistake Notebook** - Track and revise mistakes
- 📚 **Resources** - NCERT PDFs, formula sheets, videos
- 🤖 **AI Doubt Helper** - Get instant doubt resolution
- ⏱️ **Pomodoro Timer** - Stay focused while studying

### For Admins
- 👥 User management
- 📝 Question management
- 📊 Analytics dashboard
- 📁 Resource management

## 📖 Documentation

- [Architecture](docs/architecture.md)
- [Database Schema](docs/database-schema.md)
- [API Endpoints](docs/api-endpoints.md)
- [Project Structure](docs/project-structure.md)

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines before submitting a PR.

## 📄 License

This project is licensed under the MIT License.

---

Built with ❤️ for Indian medical and engineering aspirants.
