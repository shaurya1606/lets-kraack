# Letskraack Monorepo

A TypeScript monorepo for the Letskraack platform, built with Turborepo for efficient development and deployment.

## 🏗️ Repository Structure

This monorepo is organized into two main directories:

### 📱 Apps (`/apps`)
Full applications and services:

- **`frontend/`** - Next.js web application (user-facing interface)
- **`backend/`** - Node.js API server (main backend services)
- **`admin/`** - Admin dashboard (management interface)
- **`ai-service/`** - AI microservice (machine learning endpoints)
- **`auth-service/`** - Authentication microservice
- **`notification-service/`** - Notification handling service

### 📦 Packages (`/packages`)
Shared libraries and configurations:

- **`ui/`** - React component library (shared UI components)
- **`shared/`** - Common utilities, types, and business logic
- **`eslint-config/`** - ESLint configurations for all apps
- **`typescript-config/`** - TypeScript configurations
- **`database/`** - Database schemas and migrations
- **`api-client/`** - Generated API client for services

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm
- Turbo CLI (optional but recommended)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd letskraack

# Install dependencies
pnpm install

# Install Turbo globally (optional)
npm install -g @turbo/cli
```

### Development

```bash
# Start all applications in development mode
turbo dev

# Start specific application
turbo dev --filter=frontend
turbo dev --filter=backend

# Build all packages and apps
turbo build

# Run tests across all packages
turbo test

# Lint all code
turbo lint
```

### Package Management

```bash
# Add dependency to specific app
pnpm add <package> --filter=frontend

# Add dependency to specific package
pnpm add <package> --filter=@letskraack/ui

# Add dev dependency to root
pnpm add -D <package> -w
```

## 🛠️ Technology Stack

- **Framework**: Next.js (Frontend), Express.js (Backend)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT + OAuth2
- **Testing**: Jest, Playwright
- **Deployment**: Docker, Kubernetes
- **Monitoring**: OpenTelemetry

## 📋 Available Scripts

| Command | Description |
|---------|-------------|
| `turbo dev` | Start all apps in development mode |
| `turbo build` | Build all apps and packages |
| `turbo test` | Run tests across all packages |
| `turbo lint` | Lint all code |
| `turbo clean` | Clean all build artifacts |
| `turbo type-check` | Run TypeScript type checking |

## 🔧 Configuration

### Workspace Configuration
- **`turbo.json`** - Turborepo pipeline configuration
- **`pnpm-workspace.yaml`** - PNPM workspace configuration
- **`package.json`** - Root package configuration

### Environment Variables
Each app has its own `.env` file:
- `apps/frontend/.env.local`
- `apps/backend/.env`
- `apps/admin/.env.local`

## 🚢 Deployment

### Production Build
```bash
# Build all applications for production
turbo build

# Build specific application
turbo build --filter=frontend
```

### Docker
Each app includes a Dockerfile for containerization:
```bash
# Build Docker image for frontend
docker build -f apps/frontend/Dockerfile .

# Build all services using docker-compose
docker-compose up --build
```

## 🤝 Contributing

1. **Branch Naming**: Use `feature/`, `bugfix/`, or `hotfix/` prefixes
2. **Commits**: Follow conventional commit format
3. **Pull Requests**: Ensure all tests pass and include proper documentation
4. **Code Style**: Run `turbo lint` and `turbo format` before committing

### Commit Message Format
```
type(scope): description

feat(frontend): add user authentication
fix(backend): resolve database connection issue
docs(readme): update installation instructions
```

## 📁 Package Dependencies

```mermaid
graph TD
    A[frontend] --> B[@letskraack/ui]
    A --> C[@letskraack/shared]
    A --> D[@letskraack/api-client]
    
    E[backend] --> C
    E --> F[@letskraack/database]
    
    G[admin] --> B
    G --> C
    G --> D
    
    H[ai-service] --> C
    I[auth-service] --> C
    I --> F
```

## 🔍 Useful Commands

```bash
# Add new app
mkdir apps/new-app
cd apps/new-app
pnpm init

# Add new package
mkdir packages/new-package
cd packages/new-package
pnpm init

# Check which packages depend on a specific package
pnpm why <package-name>

# Update all dependencies
pnpm update -r

# Clean node_modules and reinstall
pnpm clean:deps && pnpm install
```

## 📖 Documentation

- [API Documentation](./docs/api.md)
- [Deployment Guide](./docs/deployment.md)
- [Contributing Guidelines](./docs/contributing.md)
- [Architecture Overview](./docs/architecture.md)

## 🆘 Troubleshooting

### Common Issues
1. **Build failures**: Run `turbo clean` and reinstall dependencies
2. **Type errors**: Ensure all packages are built: `turbo build`
3. **Dependency issues**: Check workspace configuration in `pnpm-workspace.yaml`

### Getting Help
- Create an issue in the repository
- Check existing documentation
- Contact the development team

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.