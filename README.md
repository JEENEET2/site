# JEENEET - NEET/JEE Preparation Platform

![Production Ready](https://img.shields.io/badge/status-production%20ready-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)
![License](https://img.shields.io/badge/License-MIT-green)

India's most structured **FREE** NEET/JEE preparation platform built with modern web technologies.

![JEENEET Preview](https://via.placeholder.com/1200x600/3B82F6/FFFFFF?text=JEENEET+-+NEET/JEE+Preparation+Platform)

## ✨ Features

### 📚 Study Materials
- **75,000+ PYQs** - Previous Year Questions organized by chapter
- **Chapter-wise Practice** - Physics, Chemistry, Biology, Mathematics
- **NCERT Resources** - PDFs and formula sheets
- **Video Lectures** - Curated content from top educators

### 📝 Mock Tests
- **Real Exam Simulation** - NEET & JEE pattern tests
- **Detailed Analytics** - Performance insights and weak areas
- **Time Management** - Track speed and accuracy
- **All India Ranking** - Compare with other students

### 📊 Smart Dashboard
- **Progress Tracking** - Visual representation of your journey
- **Weak Area Analysis** - AI-powered recommendations
- **Streak Counter** - Stay motivated with daily practice
- **Error Notebook** - Learn from your mistakes

### 🔄 Revision Tools
- **Spaced Repetition** - Scientific learning method
- **Quick Revision** - Important formulas and concepts
- **Mistake Review** - Never repeat the same error

---

## 🚀 Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| **Next.js 16** | React framework with App Router |
| **TypeScript** | Type-safe development |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Smooth animations |
| **React Query** | Server state management |
| **Zustand** | Client state management |

### Backend
| Technology | Purpose |
|------------|---------|
| **Node.js** | JavaScript runtime |
| **Express.js** | Web framework |
| **Prisma** | ORM for PostgreSQL |
| **JWT** | Authentication |
| **bcrypt** | Password hashing |

---

## 📁 Project Structure

```
jeeneet/
├── 📂 apps/
│   ├── 📂 web/                 # Next.js Frontend
│   │   ├── app/                # App Router pages
│   │   ├── components/         # React components
│   │   ├── hooks/              # Custom hooks
│   │   ├── lib/                # Utilities
│   │   └── stores/             # Zustand stores
│   │
│   └── 📂 api/                 # Express Backend
│       ├── src/
│       │   ├── controllers/    # Request handlers
│       │   ├── services/       # Business logic
│       │   ├── repositories/   # Data access
│       │   ├── middleware/     # Express middleware
│       │   └── validators/     # Input validation
│       └── prisma/             # Database schema
│
├── 📂 packages/
│   ├── types/                  # Shared TypeScript types
│   └── ui/                     # Shared UI components
│
├── 📂 docs/                    # Documentation
├── 📄 render.yaml              # Render deployment
├── 📄 vercel.json              # Vercel deployment
└── 📄 package.json             # Monorepo config
```

---

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL 15+
- npm or yarn

### Installation

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
   cp .env.example .env
   ```
   
   Edit `.env` with your configuration:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/jeeneet"
   JWT_SECRET="your-super-secret-key-at-least-32-characters"
   JWT_REFRESH_SECRET="another-super-secret-key"
   ```

4. **Initialize the database**
   ```bash
   cd apps/api
   npx prisma db push
   npx tsx prisma/seed.ts
   ```

5. **Start development servers**
   ```bash
   # From root directory
   npm run dev
   ```
   
   - Frontend: http://localhost:3000
   - API: http://localhost:4000

---

## 📦 Production Deployment

### Quick Deploy

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/JEENEET2/site)

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/JEENEET2/site)

### Detailed Guide

See [Deployment Guide](docs/deployment-guide.md) for:
- Database setup (Render PostgreSQL, Neon, Supabase)
- API deployment on Render
- Frontend deployment on Vercel
- Environment variables configuration

---

## 🌐 Live Demo

- **Frontend**: https://site-v0a0.onrender.com
- **API**: https://siteapi-pjz9.onrender.com

### Demo Credentials
- Email: `saffanakbar942@gmail.com`
- Password: `saffanakbar942@gmail.com`

---

## 📚 Documentation

| Document | Description |
|----------|-------------|
| [Architecture](docs/architecture.md) | System design and patterns |
| [Database Schema](docs/database-schema.md) | Database models and relations |
| [API Endpoints](docs/api-endpoints.md) | REST API documentation |
| [Project Structure](docs/project-structure.md) | Codebase organization |
| [Deployment Guide](docs/deployment-guide.md) | Production deployment |

---

## 🎯 Roadmap

- [ ] AI-powered doubt resolution
- [ ] Multi-language support (Hindi, Tamil, Telugu)
- [ ] Offline mode with PWA
- [ ] Mobile app (React Native)
- [ ] Live classes integration
- [ ] Parent dashboard

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style
- Use TypeScript for all new code
- Follow ESLint configuration
- Write meaningful commit messages
- Add tests for new features

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👥 Team

- **Developer**: JEENEET Team
- **Design**: Custom UI with Tailwind CSS
- **Database**: PostgreSQL with Prisma ORM

---

## 📞 Support

- **Email**: support@jeeneet.com
- **GitHub Issues**: [Report a bug](https://github.com/JEENEET2/site/issues)

---

## 🙏 Acknowledgments

- NCERT for curriculum reference
- Previous year question papers from official sources
- Open source community for amazing tools

---

<div align="center">

**Built with ❤️ for Indian medical and engineering aspirants**

**⭐ Star this repo if you find it helpful! ⭐**

[⬆ Back to Top](#jeeneet---neetjee-preparation-platform)

</div>
