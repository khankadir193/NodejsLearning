# Node.js Learning Repository 🚀

A comprehensive, well-structured learning resource for mastering Node.js — from fundamentals to advanced concepts. Designed for developers who want to build production-ready applications with confidence.

---

## 📚 Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Learning Path](#learning-path)
- [Topics Covered](#topics-covered)
- [Getting Started](#getting-started)
- [Running Examples](#running-examples)
- [Best Practices](#best-practices)
- [Resources](#resources)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Overview

This repository serves as a **complete learning journey** for Node.js. Whether you're transitioning from frontend development, coming from another backend language, or looking to deepen your Node.js expertise — you'll find structured, practical examples with clear explanations.

**What makes this different:**
- ✅ Real-world patterns, not just syntax
- ✅ Progressive complexity (beginner → advanced)
- ✅ Production-ready code samples
- ✅ Common pitfalls and how to avoid them
- ✅ Modern Node.js (v20+) features and patterns

---

## ✅ Prerequisites

Before diving in, ensure you have:

| Tool | Version | Purpose |
|------|---------|---------|
| **Node.js** | ≥ 20.x (LTS) | Runtime environment |
| **npm** | ≥ 10.x | Package manager (bundled with Node) |
| **Git** | Latest | Version control |
| **VS Code** | Latest | Recommended editor |
| **MongoDB** | ≥ 7.x | For database modules (local or Atlas) |
| **PostgreSQL** | ≥ 15.x | For SQL modules (optional) |

> **Tip:** Use [nvm](https://github.com/nvm-sh/nvm) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows) to manage Node versions.

---

## 📁 Project Structure

```
NodejsLearning/
├── 01-fundamentals/           # Core Node.js concepts
│   ├── 01-global-objects/     # global, process, Buffer, etc.
│   ├── 02-modules/            # CommonJS, ES Modules, module patterns
│   ├── 03-file-system/        # fs/promises, streams, watchers
│   ├── 04-events/             # EventEmitter, custom events
│   └── 05-error-handling/     # Error types, async errors, domains
│
├── 02-asynchronous-js/        # Async patterns deep dive
│   ├── 01-callbacks/          # Callback hell, error-first pattern
│   ├── 02-promises/           # Promise API, chaining, static methods
│   ├── 03-async-await/        # Modern syntax, error stacks
│   ├── 04-concurrency/        # Parallel, sequential, race, pooling
│   └── 05-event-loop/         # Micro/macrotasks, tick, phases
│
├── 03-http-networking/        # Building servers & clients
│   ├── 01-http-module/        # Native http/https, request/response
│   ├── 02-express-basics/     # Routing, middleware, req/res
│   ├── 03-rest-api/           # REST principles, status codes, versioning
│   ├── 04-graphql/            # Apollo Server, schemas, resolvers
│   ├── 05-websockets/         # ws, Socket.IO, real-time patterns
│   └── 06-grpc/               # Protocol Buffers, gRPC services
│
├── 04-data-persistence/       # Databases & ORMs
│   ├── 01-mongodb/            # Native driver, indexes, aggregation
│   ├── 02-mongoose/           # Schemas, models, middleware, validation
│   ├── 03-postgresql/         # pg, connection pooling, transactions
│   ├── 04-prisma/             # Type-safe ORM, migrations, seeds
│   ├── 05-redis/              # Caching, sessions, pub/sub, streams
│   └── 06-transactions/       # Distributed transactions, saga pattern
│
├── 05-authentication-security/ # Auth & security essentials
│   ├── 01-jwt/                # Access/refresh tokens, rotation
│   ├── 02-oauth2-oidc/        # Google, GitHub, PKCE, providers
│   ├── 03-session-cookies/    # express-session, secure cookies
│   ├── 04-password-hashing/   # bcrypt, argon2, timing attacks
│   ├── 05-rate-limiting/      # express-rate-limit, Redis-backed
│   ├── 06-helmet-cors/        # Security headers, CORS configuration
│   └── 07-input-validation/   # Zod, Joi, sanitization
│
├── 06-testing/                # Quality assurance
│   ├── 01-unit-testing/       # Vitest/Jest, mocking, coverage
│   ├── 02-integration-testing/# Testcontainers, database testing
│   ├── 03-e2e-testing/        # Playwright, Supertest
│   ├── 04-contract-testing/   # Pact, consumer-driven contracts
│   └── 05-load-testing/       # k6, Artillery, benchmarks
│
├── 07-architecture-patterns/  # Scalable code organization
│   ├── 01-layered/            # Controllers, services, repositories
│   ├── 02-modular-monolith/   # Feature modules, shared kernel
│   ├── 03-clean-architecture/ # Entities, use cases, interfaces
│   ├── 04-microservices/      # Service discovery, API gateway
│   ├── 05-event-driven/       # Event sourcing, CQRS, outbox
│   └── 06-dependency-injection/# Inversify, manual DI patterns
│
├── 08-observability/          # Production readiness
│   ├── 01-logging/            # Pino, Winston, structured logs
│   ├── 02-metrics/            # Prometheus, OpenTelemetry, custom
│   ├── 03-tracing/            # Distributed tracing, Jaeger, Zipkin
│   ├── 04-health-checks/      # Liveness, readiness, startup probes
│   └── 05-alerting/           # Alert rules, on-call practices
│
├── 09-deployment-devops/      # Shipping to production
│   ├── 01-docker/             # Multi-stage, distroless, security
│   ├── 02-kubernetes/         # Deployments, services, ingress, HPA
│   ├── 03-ci-cd/              # GitHub Actions, GitLab CI, pipelines
│   ├── 04-environment-config/ # dotenv, config validation, secrets
│   └── 05-zero-downtime/      # Blue-green, canary, rolling updates
│
├── 10-performance/            # Optimization techniques
│   ├── 01-profiling/          # Clinic.js, 0x, --inspect
│   ├── 02-caching-strategies/ # Multi-level, cache-aside, write-through
│   ├── 03-memory-management/  # Leaks, GC tuning, heap snapshots
│   ├── 04-clustering/         # cluster module, PM2, worker_threads
│   └── 05-database-optimization/# Query tuning, connection pooling
│
├── 11-advanced-topics/        # Deep internals & niche topics
│   ├── 01-worker-threads/     # CPU-intensive tasks, SharedArrayBuffer
│   ├── 02-child-process/      # spawn, exec, fork, IPC
│   ├── 03-streams-advanced/   # Transform, pipeline, backpressure
│   ├── 04-native-addons/      # NAPI, node-gyp, Rust/WASM
│   ├── 05-diagnostics/        # AsyncLocalStorage, perf_hooks
│   └── 06-module-internals/   # Resolution, cache, loaders
│
├── 12-real-world-projects/    # Complete applications
│   ├── 01-blog-api/           # REST API with auth, pagination
│   ├── 02-ecommerce-backend/  # Orders, payments, inventory
│   ├── 03-realtime-chat/      # WebSocket, rooms, presence
│   ├── 04-file-upload-service/# Multer, S3, processing pipelines
│   └── 05-microservice-demo/  # Order, Payment, Notification services
│
├── assets/                    # Diagrams, images, schemas
├── scripts/                   # Utility scripts (setup, seed, migrate)
├── .github/                   # Workflows, issue templates, dependabot
├── .vscode/                   # Settings, extensions, launch configs
├── .editorconfig
├── .eslintrc.json
├── .prettierrc
├── package.json
└── tsconfig.json
```

---

## 🛤️ Learning Path

Follow this sequence for optimal learning:

### Phase 1: Foundations (Weeks 1–2)
```
01-fundamentals → 02-asynchronous-js
```
Master the runtime, module system, file I/O, and async patterns.

### Phase 2: Server-Side Development (Weeks 3–4)
```
03-http-networking → 04-data-persistence
```
Build APIs, connect databases, understand ORMs.

### Phase 3: Security & Quality (Weeks 5–6)
```
05-authentication-security → 06-testing
```
Implement auth, secure your apps, write meaningful tests.

### Phase 4: Architecture & Scale (Weeks 7–8)
```
07-architecture-patterns → 08-observability → 09-deployment-devops
```
Structure for growth, monitor, deploy confidently.

### Phase 5: Mastery (Ongoing)
```
10-performance → 11-advanced-topics → 12-real-world-projects
```
Optimize, understand internals, build portfolio projects.

---

## 📖 Topics Covered

| Category | Key Topics |
|----------|------------|
| **Core Runtime** | Event loop, V8 internals, globals, buffers, process |
| **Module System** | CJS vs ESM, dynamic import, resolution, package.json exports |
| **Async Control Flow** | Promises, async/await, concurrency primitives, cancellation |
| **Streams & Buffers** | Readable/Writable/Transform, pipeline, backpressure, zero-copy |
| **HTTP & Networking** | Native http, Express, Fastify, WebSockets, gRPC, HTTP/2 |
| **Databases** | MongoDB/Mongoose, PostgreSQL/Prisma, Redis, transactions |
| **Authentication** | JWT, OAuth2/OIDC, sessions, MFA, password security |
| **Security** | Helmet, CORS, rate limiting, input validation, CSP |
| **Testing** | Unit, integration, E2E, contract, load, mutation testing |
| **Architecture** | Layered, modular monolith, clean, microservices, event-driven |
| **Observability** | Structured logging, metrics, tracing, health checks |
| **DevOps** | Docker, Kubernetes, CI/CD, secrets, zero-downtime deployments |
| **Performance** | Profiling, caching, clustering, memory, DB optimization |
| **Advanced** | Worker threads, child processes, native addons, diagnostics |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/NodejsLearning.git
cd NodejsLearning
```

### 2. Install Dependencies

```bash
# Install root dependencies (tooling, shared config)
npm ci

# Install dependencies for a specific module
cd 01-fundamentals/01-global-objects
npm ci
```

### 3. Configure Environment

```bash
# Copy example environment file
cp .env.example .env

# Edit with your values (database URLs, secrets, etc.)
code .env
```

### 4. Start Learning

```bash
# Run a specific example
node 01-fundamentals/01-global-objects/index.js

# Or use the provided scripts
npm run learn:fundamentals
```

---

## ▶️ Running Examples

Each module is self-contained with its own `package.json` and scripts:

```bash
# Navigate to any topic directory
cd 03-http-networking/02-express-basics

# Install dependencies (first time only)
npm ci

# Run the example
npm start

# Run with hot reload (development)
npm run dev

# Run tests
npm test

# Lint & format
npm run lint
npm run format
```

### Global Commands (from root)

```bash
# Run all tests across the repo
npm run test:all

# Lint all packages
npm run lint:all

# Format all code
npm run format:all

# Generate documentation
npm run docs:generate

# Start all project databases (Docker Compose)
npm run db:up

# Stop databases
npm run db:down
```

---

## 💡 Best Practices

This repository enforces and demonstrates:

### Code Quality
- **TypeScript** for type safety (strict mode enabled)
- **ESLint** with Airbnb/TypeScript rules
- **Prettier** for consistent formatting
- **Husky** + **lint-staged** for pre-commit hooks
- **Conventional Commits** for semantic versioning

### Project Structure
- Feature-based organization over layer-based
- Barrel exports (`index.ts`) for clean imports
- Shared kernel for cross-cutting concerns
- Clear separation of domain, application, infrastructure

### Error Handling
- Custom error classes with codes
- Centralized error middleware
- Structured error responses (RFC 7807)
- Never leak stack traces to clients

### Security
- Helmet.js for security headers
- Strict CORS policies
- Rate limiting on all public endpoints
- Input validation at boundaries (Zod schemas)
- Secrets via environment variables (never committed)

### Testing
- Test pyramid: unit → integration → E2E
- Testcontainers for real database tests
- Contract testing for API stability
- Coverage thresholds enforced in CI

### Observability
- Structured JSON logging (Pino)
- OpenTelemetry for traces/metrics
- Health endpoints for orchestration
- Correlation IDs across requests

---

## 📚 Resources

### Official Documentation
- [Node.js Docs](https://nodejs.org/en/docs/)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)
- [Express.js Guide](https://expressjs.com/en/guide/routing.html)
- [Fastify Docs](https://www.fastify.io/docs/latest/)

### Database & ORM
- [MongoDB Manual](https://www.mongodb.com/docs/manual/)
- [Mongoose Guide](https://mongoosejs.com/docs/guide.html)
- [Prisma Docs](https://www.prisma.io/docs/)
- [PostgreSQL Docs](https://www.postgresql.org/docs/)

### Security
- [OWASP Node.js](https://cheatsheetseries.owasp.org/cheatsheets/Nodejs_Security_Cheat_Sheet.html)
- [JWT Best Practices](https://auth0.com/blog/a-look-at-the-latest-draft-for-jwt-bcp/)
- [Helmet.js](https://helmetjs.github.io/)

### Testing
- [Vitest Guide](https://vitest.dev/guide/)
- [Testing Library](https://testing-library.com/docs/)
- [Playwright](https://playwright.dev/docs/intro)
- [Testcontainers](https://testcontainers.com/modules/nodejs/)

### Architecture & Patterns
- [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- [Modular Monolith](https://www.kamilgrzybek.com/design/modular-monolith-primer/)
- [Event-Driven Architecture](https://martinfowler.com/articles/201701-event-driven.html)

### DevOps & Observability
- [Docker Node.js Guide](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)
- [Kubernetes Patterns](https://kubernetes.io/docs/concepts/)
- [OpenTelemetry JS](https://opentelemetry.io/docs/instrumentation/js/)
- [Prometheus Node Client](https://github.com/siimon/prom-client)

### Performance
- [Node.js Performance](https://nodejs.org/en/docs/guides/simple-profiling/)
- [Clinic.js](https://clinicjs.org/)
- [V8 Perf Tips](https://v8.dev/blog/fast-javascript)

---

## 🤝 Contributing

We welcome contributions! Please read our [Contributing Guide](CONTRIBUTING.md) first.

### Quick Contribution Checklist

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feat/amazing-feature`
3. **Follow** the existing code style (run `npm run lint` and `npm run format`)
4. **Write** tests for new functionality
5. **Update** documentation if needed
6. **Commit** with conventional messages: `feat: add amazing feature`
7. **Push** and open a Pull Request

### Types of Contributions Welcome

- 🐛 Bug fixes
- ✨ New learning modules
- 📝 Documentation improvements
- 🎨 Code examples & exercises
- 🌐 Translations
- ♿ Accessibility improvements

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Node.js core team for the incredible runtime
- [Goldbergyoni](https://github.com/goldbergyoni) for the Node.js Best Practices repo
- All open-source maintainers whose tools make this possible
- The developer community for continuous inspiration

---

## 📞 Support & Community

- 💬 **Discussions**: [GitHub Discussions](https://github.com/your-username/NodejsLearning/discussions)
- 🐛 **Issues**: [GitHub Issues](https://github.com/your-username/NodejsLearning/issues)
- 📧 **Email**: your-email@example.com
- 🐦 **Twitter**: [@yourhandle](https://twitter.com/yourhandle)

---

<div align="center">

**Built with ❤️ for developers who never stop learning.**

*If this repository helped you, please consider giving it a ⭐ — it helps others discover it!*

</div>

---

<details>
<summary><strong>📌 Quick Reference: Common Commands</strong></summary>

```bash
# Development
npm run dev              # Start with hot reload
npm run build            # Compile TypeScript
npm run start            # Run compiled output

# Code Quality
npm run lint             # Check for issues
npm run lint:fix         # Auto-fix issues
npm run format           # Format with Prettier
npm run typecheck        # TypeScript type checking

# Testing
npm run test             # Run tests once
npm run test:watch       # Watch mode
npm run test:coverage    # With coverage report
npm run test:ui          # Visual test UI (Vitest)

# Database
npm run db:migrate       # Run migrations
npm run db:seed          # Seed test data
npm run db:studio        # Open Prisma Studio / Mongo Express

# Docker
npm run docker:build     # Build image
npm run docker:run       # Run container
npm run docker:compose   # Start full stack

# Utilities
npm run clean            # Remove build artifacts
npm run reset            # Clean + reinstall deps
npm run docs             # Generate API docs
```
</details>