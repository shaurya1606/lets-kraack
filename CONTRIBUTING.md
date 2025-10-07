# Contributing to Letskraack

Thank you for your interest in contributing to Letskraack! This document provides guidelines and workflows to help you contribute effectively.

## 🌱 Development Workflow

### 1. Set up your environment

Fork and clone the repository, then install dependencies:

```bash
git clone https://github.com/your-username/letskraack.git
cd letskraack
pnpm install
```

### 2. Create a branch

Create a new branch following our branch naming conventions:

```bash
git checkout -b type/description
```

### 3. Make your changes

Implement your changes, following our code style guidelines.

### 4. Test your changes

Ensure all tests pass:

```bash
pnpm test
```

### 5. Lint your code

Ensure code quality with our linters:

```bash
pnpm lint
```

### 6. Commit your changes

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```bash
git commit -m "feat: add user authentication flow"
```

### 7. Submit a Pull Request

Push your branch and open a PR against the main repository.

## 🌿 Branch Naming Conventions

Use the following prefixes for your branches:

- `feat/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `style/` - Code style changes (formatting, etc.)
- `refactor/` - Code refactoring
- `test/` - Adding or modifying tests
- `chore/` - Maintenance tasks

Examples:
- `feat/user-authentication`
- `fix/login-validation`
- `docs/api-endpoints`

## 📝 Commit Message Format

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

Types:
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools

Example:
```
feat(auth): implement JWT authentication

- Add JWT token generation
- Implement token verification middleware
- Update user model for token storage

Closes #123
```

## 🔍 Pull Request Guidelines

1. **Title**: Use the same format as commit messages
2. **Description**: Include:
   - Summary of changes
   - Any related issues (`Fixes #123`)
   - Notes on implementation decisions
   - Screenshots for UI changes
3. **Keep PRs focused**: Each PR should address one specific issue or feature
4. **Review**: Request reviews from at least one team member
5. **Tests**: Ensure all tests pass and add new tests for new functionality
6. **CI**: Make sure all CI checks pass

## 🧪 Testing Guidelines

- Write tests for all new features and bug fixes
- Maintain or improve code coverage
- Use proper test naming conventions

## 🎨 Code Style Guidelines

- Follow existing code style and architecture patterns
- Use ESLint and Prettier with our shared configurations
- Include proper JSDoc/TSDoc comments for public APIs
- Use meaningful variable and function names

## 🔄 Monorepo Workflow Tips

- Use `--filter` with pnpm commands to target specific workspaces
- Keep packages small and focused
- Document dependencies between packages
- Use proper versioning for shared packages

## 🚀 Releasing

Our release process is handled by maintainers, but generally follows:

1. Version bumps according to semantic versioning
2. Changelog generation from commit messages
3. Publishing packages (when applicable)
4. Deploying applications

## ❓ Questions?

If you have questions about contributing, please reach out to the team through:
- GitHub issues
- Team chat channels
- Project maintainers

## Mention your name after submiting the pull request.

- Shaurya Srivastava