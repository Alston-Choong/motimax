# Contributing to Motimax

🎉 **Thank you for your interest in contributing to Motimax!** We're building an AI-powered superapp for personal growth, mental wellness, and productivity — and we welcome developers, designers, educators, creators, and enthusiasts from all backgrounds.

## 📋 Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). We are committed to fostering a welcoming, inclusive, and harassment-free environment for everyone.

**Key principles:**
- Be respectful and considerate in all interactions
- Welcome newcomers and help them get started
- Focus on constructive feedback and collaboration
- Respect diverse perspectives and experiences
- Report any unacceptable behavior to [alston1121@gmail.com](mailto:alston1121@gmail.com)

## 🚀 How to Contribute

There are many ways to contribute to Motimax:

### 🐛 Reporting Bugs
- Use our [Bug Report template](.github/ISSUE_TEMPLATE/bug_report.md)
- Search existing issues first to avoid duplicates
- Include detailed steps to reproduce, expected behavior, and screenshots
- Specify your environment (OS, browser, Node.js version)

### 💡 Feature Requests
- Use our [Feature Request template](.github/ISSUE_TEMPLATE/feature_request.md)
- Explain the problem you're trying to solve
- Describe your proposed solution
- Consider the impact on existing users

### 📖 Documentation
- Fix typos, improve clarity, or add missing information
- Update outdated content
- Add examples and use cases
- Translate content (we support EN-US, EN-UK, ZH-CN)

### 🎨 Design & UX
- Propose UI/UX improvements
- Create mockups or prototypes
- Conduct accessibility audits
- Test usability across devices and platforms

### 💻 Code Contributions
- Fix bugs and implement new features
- Improve performance and security
- Add tests and documentation
- Refactor and optimize existing code

## 🔄 Development Process

### Prerequisites

- **Node.js** 18+ and **pnpm** 8+
- **Git** for version control
- **GitHub account** for collaboration

### Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/motimax.git
   cd motimax
   ```
3. **Install dependencies**:
   ```bash
   pnpm install
   ```
4. **Set up environment variables**:
   ```bash
   cp .env.example .env.local
   # Fill in your configuration values
   ```
5. **Start the development server**:
   ```bash
   pnpm dev
   ```

### Making Changes

1. **Create a feature branch** from `main`:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b feature/your-feature-name
   ```
2. **Make your changes** following our coding standards
3. **Test your changes** thoroughly
4. **Commit your changes** using conventional commits
5. **Push to your fork** and create a pull request

## 🏗️ Coding Standards

We maintain high code quality standards to ensure consistency, readability, and maintainability.

### Code Style

- **Prettier** for code formatting (automated on commit)
- **ESLint** for code quality and consistency
- **TypeScript** for type safety
- **2 spaces** for indentation
- **Single quotes** for strings
- **Trailing commas** where valid

### Configuration Files

- `.prettierrc.json` - Prettier configuration
- `.eslintrc.json` - ESLint rules and plugins
- `tsconfig.json` - TypeScript compiler options

### Pre-commit Hooks

We use **Husky** and **lint-staged** to run checks before commits:

```json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.{json,md,yml,yaml}": [
      "prettier --write"
    ]
  }
}
```

### Code Quality Checks

- **TypeScript compilation** must pass without errors
- **ESLint** must pass with zero warnings
- **Prettier** formatting must be applied
- **Unit tests** must pass (when available)
- **Build process** must complete successfully

## 🌿 Branching Strategy

We follow a simplified Git Flow model:

### Branch Types

- **`main`** - Production-ready code, always deployable
- **`feature/`** - New features and enhancements
- **`bugfix/`** - Bug fixes for current release
- **`hotfix/`** - Critical fixes for production issues
- **`docs/`** - Documentation updates
- **`refactor/`** - Code refactoring without functional changes
- **`chore/`** - Maintenance tasks, dependency updates

### Naming Conventions

- Use **lowercase** with **hyphens** for separation
- Be **descriptive** but **concise**
- Include **issue number** when applicable

**Examples:**
- `feature/user-onboarding-flow`
- `bugfix/auth-redirect-loop-123`
- `docs/update-contributing-guide`
- `hotfix/security-vulnerability-456`

## 💬 Commit Style

We use **Conventional Commits** for clear, structured commit messages that enable automated changelog generation and semantic versioning.

### Format

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types

- **`feat`** - New features
- **`fix`** - Bug fixes
- **`docs`** - Documentation changes
- **`style`** - Code style changes (formatting, no logic changes)
- **`refactor`** - Code refactoring
- **`perf`** - Performance improvements
- **`test`** - Adding or updating tests
- **`build`** - Build system or dependency changes
- **`ci`** - CI/CD configuration changes
- **`chore`** - Other maintenance tasks
- **`revert`** - Reverting previous commits

### Scopes (Optional)

- `auth` - Authentication and authorization
- `ui` - User interface components
- `api` - API endpoints and services
- `db` - Database schema and queries
- `i18n` - Internationalization
- `deps` - Dependencies

### Examples

```bash
# Simple feature
git commit -m "feat: add user profile avatar upload"

# Bug fix with scope
git commit -m "fix(auth): resolve OAuth redirect loop issue"

# Breaking change
git commit -m "feat!: redesign lesson completion flow

REAKING CHANGE: The lesson completion API now requires a completion timestamp."

# Documentation update
git commit -m "docs: update API documentation for lesson endpoints"

# Dependency update
git commit -m "chore(deps): update @supabase/supabase-js to v2.38.0"
```

### Commit Message Guidelines

- Use **present tense** ("add feature" not "added feature")
- Use **imperative mood** ("fix bug" not "fixes bug")
- Keep the first line **under 72 characters**
- Reference **issues and PRs** when applicable
- Explain **what** and **why**, not **how**

## 📝 Issue and Pull Request Templates

We provide templates to ensure consistent, high-quality submissions:

### Issue Templates

- **Bug Report** (`.github/ISSUE_TEMPLATE/bug_report.md`)
- **Feature Request** (`.github/ISSUE_TEMPLATE/feature_request.md`)
- **Documentation** (`.github/ISSUE_TEMPLATE/documentation.md`)
- **Question** (`.github/ISSUE_TEMPLATE/question.md`)

### Pull Request Template

- **Description** of changes
- **Type of change** (bug fix, new feature, etc.)
- **Testing** instructions
- **Checklist** for code quality
- **Screenshots** for UI changes
- **Breaking changes** documentation

### PR Requirements

✅ **Before submitting a PR:**

- [ ] Code follows our style guidelines
- [ ] Self-review of code completed
- [ ] Code is well-commented
- [ ] Tests added/updated for changes
- [ ] Documentation updated if needed
- [ ] No merge conflicts with main branch
- [ ] CI checks passing
- [ ] PR title follows conventional commit format

## 📄 Contributor License Agreement (CLA)

By contributing to Motimax, you agree that your contributions will be licensed under the same [MIT License](LICENSE) that covers the project.

**Key points:**

- You retain **copyright** of your contributions
- You grant us a **perpetual, worldwide license** to use your contributions
- Your contributions are **original work** or you have permission to submit them
- You **understand** that your contributions are public

**For significant contributions** (major features, architectural changes), we may request a signed CLA for legal clarity.

## 🔒 Security Reporting

Security is paramount in a wellness and productivity app that handles personal data.

### Reporting Security Vulnerabilities

**🚨 DO NOT** open public issues for security vulnerabilities.

Instead, please report security issues privately:

1. **Email:** [alston1121@gmail.com](mailto:alston1121@gmail.com)
2. **Subject:** `[SECURITY] Vulnerability Report - Motimax`
3. **Include:**
   - Detailed description of the vulnerability
   - Steps to reproduce (if applicable)
   - Potential impact assessment
   - Suggested fix (if known)

### Security Response Process

1. **Acknowledgment** within 24 hours
2. **Initial assessment** within 72 hours
3. **Regular updates** on investigation progress
4. **Coordinated disclosure** once fixed
5. **Credit** in security advisories (if desired)

### Security Best Practices

When contributing:

- **Never commit** sensitive data (API keys, passwords, etc.)
- **Use environment variables** for configuration
- **Validate input** on both client and server side
- **Follow OWASP guidelines** for web security
- **Keep dependencies updated** and audit regularly
- **Use HTTPS** for all external communications

## 🤝 Community Guidelines

### Communication Channels

- **GitHub Issues** - Bug reports, feature requests, discussions
- **GitHub Discussions** - General questions, ideas, showcase
- **Email** - [alston1121@gmail.com](mailto:alston1121@gmail.com) for direct contact

### Getting Help

- **Documentation** - Check README.md and `/docs` folder first
- **Search Issues** - Your question might already be answered
- **Ask Questions** - Use GitHub Discussions for general help
- **Join the Community** - Follow us on social media for updates

### Recognition

We appreciate all contributions and recognize contributors through:

- **Contributors section** in README.md
- **Release notes** for significant contributions
- **Social media shoutouts** for major features
- **Maintainer opportunities** for consistent contributors

## 🎯 Development Priorities

Current focus areas where contributions are especially welcome:

### High Priority
- 🔐 **Security improvements** and vulnerability fixes
- ♿ **Accessibility enhancements** for inclusive design
- 🌐 **Internationalization** and localization
- 📱 **Mobile responsiveness** and PWA features
- ⚡ **Performance optimizations** and loading speed

### Medium Priority
- 🧪 **Testing coverage** and quality assurance
- 📚 **Documentation improvements** and examples
- 🎨 **UI/UX enhancements** and design system
- 🔌 **API improvements** and third-party integrations
- 🛠️ **Developer experience** and tooling

### Future Considerations
- 🤖 **AI/ML features** and model improvements
- 📊 **Analytics and insights** dashboard
- 🔄 **Offline functionality** and data sync
- 🎮 **Gamification** elements and rewards
- 🌊 **Real-time features** and collaboration

## 📚 Additional Resources

### Documentation
- [README.md](README.md) - Project overview and quick start
- [LICENSE](LICENSE) - MIT license details
- [Architecture Documentation](docs/architecture.md) - Technical overview

### External Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Conventional Commits Specification](https://www.conventionalcommits.org/)

---

**Thank you for contributing to Motimax!** 🌟

Your contributions help millions of users elevate their lives, master their mindset, and achieve success. Together, we're building something truly impactful.

*For questions or support, reach out to [alston1121@gmail.com](mailto:alston1121@gmail.com)*
