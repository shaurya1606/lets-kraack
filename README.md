# Letskraack Monorepo

A TypeScript monorepo for the Letskraack platform, built with Turborepo for efficient development and deployment.

## 🏗️ Repository Structure

This monorepo is organized into two main directories:

### 📱 Apps (`/apps`)
Full applications and services:

- **`web/`** - Next.js web application (user-facing interface)
- **`api/`** - NestJS API server (main backend services)

### 📦 Packages (`/packages`)
Shared libraries and configurations:

- **`ui/`** - React component library (shared UI components)
- **`eslint-config/`** - ESLint configurations for all apps
- **`typescript-config/`** - TypeScript configurations

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
npm install -g turbo
```

### Development

```bash
# Start all applications in development mode
pnpm dev

# Start specific application
pnpm dev --filter=web
pnpm dev --filter=api

# Build all packages and apps
pnpm build

# Run tests across all packages
pnpm test

# Lint all code
pnpm lint
```

### Package Management

```bash
# Add dependency to specific app
pnpm add <package> --filter=web

# Add dependency to specific package
pnpm add <package> --filter=@letskraack/ui

# Add dev dependency to root
pnpm add -D <package> -w
```

## 🛠️ Technology Stack

- **Frontend**: Next.js with React
- **Backend**: NestJS (TypeScript Node.js framework)
- **Language**: TypeScript
- **Package Management**: pnpm with Workspaces
- **Build System**: Turborepo
- **Linting**: ESLint
- **Testing**: Jest

## 📋 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start all apps in development mode |
| `pnpm build` | Build all apps and packages |
| `pnpm test` | Run tests across all packages |
| `pnpm lint` | Lint all code |
| `pnpm clean` | Clean all build artifacts |

## 🔧 Configuration

### Workspace Configuration
- **`turbo.json`** - Turborepo pipeline configuration
- **`pnpm-workspace.yaml`** - PNPM workspace configuration
- **`package.json`** - Root package configuration

### Environment Variables
Each app has its own `.env` file:
- `apps/web/.env.local`
- `apps/api/.env`

## 🚢 Deployment

### Production Build
```bash
# Build all applications for production
pnpm build

# Build specific application
pnpm build --filter=web
```

### Docker
Each app can be containerized:
```bash
# Build Docker image for web frontend
docker build -f apps/web/Dockerfile .

# Build Docker image for API backend
docker build -f apps/api/Dockerfile .
```

## 🤝 Contributing

For detailed contribution guidelines, please see [CONTRIBUTING.md](CONTRIBUTING.md).

### Quick Guide

1. **Branch Naming**: Use `feature/`, `bugfix/`, or `hotfix/` prefixes
2. **Commits**: Follow conventional commit format
3. **Pull Requests**: Ensure all tests pass and include proper documentation
4. **Code Style**: Run `pnpm lint` before committing

### Commit Message Format
```
type(scope): description

feat(web): add user authentication
fix(api): resolve connection issue
docs(readme): update installation instructions
```

## 📁 Package Dependencies

```mermaid
graph TD
    A[web] --> B[@letskraack/ui]
    A --> C[@letskraack/typescript-config]
    A --> D[@letskraack/eslint-config]
    
    E[api] --> C
    E --> D
    
    B --> C
    B --> D
```

## 🔍 Useful Commands

```bash
# Add new app
mkdir -p apps/new-app
cd apps/new-app
pnpm init

# Add new package
mkdir -p packages/new-package
cd packages/new-package
pnpm init

# Update all dependencies
pnpm update -r

# Clean node_modules and reinstall
rm -rf node_modules && pnpm install
```

## 📖 Documentation

- [Architecture Overview](ARCHITECTURE.md)
- [Contributing Guidelines](CONTRIBUTING.md)

## 🆘 Troubleshooting

### Common Issues
1. **Build failures**: Run `pnpm clean` and reinstall dependencies
2. **Type errors**: Ensure all packages are built with `pnpm build`
3. **Dependency issues**: Check workspace configuration in `pnpm-workspace.yaml`

### Getting Help
- Create an issue in the repository
- Check existing documentation

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.