# NEET/JEE Preparation Platform

![Production Ready](https://img.shields.io/badge/status-production%20ready-brightgreen)

India's most structured free NEET/JEE preparation platform built with modern web technologies.

## 🚀 Tech Stack

### Frontend
- **Next.js 14** – React framework with App Router
- **TypeScript** – Type‑safe development
- **Tailwind CSS** – Utility‑first CSS framework
- **Framer Motion** – Smooth animations

### Backend
- **Node.js** – JavaScript runtime
- **Express.js** – Web framework
- **Prisma** – ORM for PostgreSQL
- **JWT** – Authentication

## 📁 Project Structure

```
jeeneet/
├── apps/
│   ├── web/          # Next.js Frontend
│   └── api/          # Express Backend
├── packages/
│   ├── types/        # Shared TypeScript types
│   └── ui/           # Shared UI components
├── docs/             # Documentation
├── render.yaml       # Render deployment config
└── package.json      # Root monorepo config
```

## 🛠️ Getting Started (Local Development)

1. **Clone the repository**
   ```bash
   git clone https://github.com/JEENEET2/site.git
   cd jeeneet
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your own secrets and DB connection string
   ```
4. **Run the database migrations**
   ```bash
   npm run db:push   # Generates Prisma client and pushes schema
   ```
5. **Start development servers**
   ```bash
   npm run dev        # Starts both web (http://localhost:3000) and API (http://localhost:4000)
   ```

## 📦 Production Build

- Build the Next.js frontend:
  ```bash
  npm run build      # Runs Turbo to build all apps
  ```
- The compiled output lives in `.next` (frontend) and `dist` (API).

## ☁️ Deploy to Render

Render uses the [`render.yaml`](render.yaml) file at the repository root to spin up two services:

1. **Web Service (`jeeneet-web`)**
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm run start`
   - **Static Publish Path**: `.next`
   - **Health Check**: `/`
2. **Web Service (`jeeneet-api`)**
   - **Build Command**: `cd apps/api && npm install && npm run build`
   - **Start Command**: `cd apps/api && npm run start`
   - **Health Check**: `/api/health`

Create a new Render **Web Service**, select **Node.js**, and point it to this repository. Render will automatically detect `render.yaml` and configure the two services.

## 📚 Documentation

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
