---
description: Generate structured CLAUDE.md with reference docs in .claude/reference/
---

# Create CLAUDE.md

Analyze the project and generate a lean CLAUDE.md with detailed reference documentation in `.claude/reference/`.

## Output Structure

```
project/
├── CLAUDE.md                           # Overview + reference table (~200 lines)
└── .claude/
    ├── PRD.md                          # Product requirements (if needed)
    └── reference/
        ├── architecture.md             # System architecture
        ├── backend-best-practices.md   # Backend patterns
        ├── frontend-best-practices.md  # Frontend patterns
        ├── database.md                 # Database patterns
        ├── testing.md                  # Testing strategy
        ├── api.md                      # API design
        └── deployment.md               # Deployment guide
```

## Process

### 1. Analyze Project

```bash
git ls-files | head -100
ls package.json pyproject.toml go.mod Cargo.toml 2>/dev/null
ls -la .claude/ docs/ 2>/dev/null
```

### 2. Identify What Exists

- Check for existing CLAUDE.md
- Check for existing .claude/reference/ docs
- Review README.md for project info

### 3. Generate Files

Create the lean CLAUDE.md and relevant reference docs based on project type.

---

## CLAUDE.md Template (Lean)

```markdown
# [Project Name]

[One-line description]

## Tech Stack

- **Backend**: [Framework] [version], [Language] [version]
- **Frontend**: [Framework] [version]
- **Database**: [Type]
- **Testing**: [Framework]

## Project Structure

```
[brief structure - max 10 lines]
```

## Commands

```bash
# Install
[command]

# Dev
[command]

# Test
[command]

# Build
[command]
```

## Reference Documentation

Read these documents when working on specific areas:

| Document | When to Read |
|----------|--------------|
| `.claude/PRD.md` | Understanding requirements, features, scope |
| `.claude/reference/architecture.md` | System design, component relationships |
| `.claude/reference/backend-best-practices.md` | API endpoints, services, data layer |
| `.claude/reference/frontend-best-practices.md` | Components, state, styling |
| `.claude/reference/database.md` | Schema, queries, migrations |
| `.claude/reference/testing.md` | Test patterns, coverage, mocking |
| `.claude/reference/api.md` | Endpoints, request/response formats |
| `.claude/reference/deployment.md` | Build, deploy, environment config |

## Code Conventions

### Naming
- Files: [convention]
- Functions: [convention]
- Components: [convention]

### Patterns
- [Key pattern 1]
- [Key pattern 2]

## Environment Variables

See `.env.example` for required variables.
```

---

## Reference Doc Templates

### .claude/reference/architecture.md

```markdown
# Architecture Overview

## System Diagram

```
[ASCII diagram or description]
```

## Components

### [Component 1]
- **Purpose**: [description]
- **Location**: `src/[path]/`
- **Dependencies**: [list]

### [Component 2]
...

## Data Flow

1. [Step 1]
2. [Step 2]
3. [Step 3]

## Key Decisions

| Decision | Rationale |
|----------|-----------|
| [Decision 1] | [Why] |
| [Decision 2] | [Why] |
```

### .claude/reference/backend-best-practices.md

```markdown
# Backend Best Practices

## API Endpoints

### Structure
- RESTful under `/api/`
- Return 201 for POST, 204 for DELETE
- Use proper HTTP status codes

### Request/Response
```[language]
// Example patterns
```

## Services

### Pattern
```[language]
// Service pattern used
```

## Error Handling

```[language]
// Error handling pattern
```

## Validation

```[language]
// Validation approach
```

## Logging

- Library: [structlog/winston/etc.]
- Format: [JSON/pretty]

```[language]
// Logging example
```
```

### .claude/reference/frontend-best-practices.md

```markdown
# Frontend Best Practices

## Component Structure

```
src/
├── components/ui/     # Reusable UI components
├── features/          # Feature modules
├── pages/             # Page components
├── hooks/             # Custom hooks
├── lib/               # Utilities
└── api/               # API client
```

## Component Pattern

```[language]
// Standard component template
```

## State Management

- Approach: [Context/Redux/Zustand/TanStack Query]
- Server state: [TanStack Query/SWR]

```[language]
// State pattern example
```

## Styling

- Approach: [Tailwind/CSS Modules/Styled Components]
- Conventions: [describe]

## Forms

- Library: [react-hook-form/formik]
- Validation: [zod/yup]

```[language]
// Form pattern example
```
```

### .claude/reference/database.md

```markdown
# Database Guide

## Overview

- **Type**: [PostgreSQL/MySQL/SQLite/MongoDB]
- **ORM**: [Prisma/SQLAlchemy/TypeORM/Drizzle]

## Schema

### [Table/Collection 1]
| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key |
| ... | ... | ... |

### [Table/Collection 2]
...

## Relationships

- [Table1] → [Table2]: [relationship type]

## Common Queries

```[language]
// Query patterns
```

## Migrations

```bash
# Run migrations
[command]

# Create migration
[command]

# Rollback
[command]
```

## Connection

```[language]
// Connection setup
```
```

### .claude/reference/testing.md

```markdown
# Testing Guide

## Strategy

- **Unit tests**: 70% - Pure functions, business logic
- **Integration tests**: 20% - API endpoints, DB
- **E2E tests**: 10% - Critical user journeys

## Structure

```
tests/
├── unit/           # Fast isolated tests
├── integration/    # API/DB tests
└── e2e/            # Playwright/Cypress
```

## Running Tests

```bash
# All tests
[command]

# Unit only
[command]

# Integration
[command]

# E2E
[command]

# Coverage
[command]
```

## Patterns

### Unit Test
```[language]
// Unit test example
```

### Integration Test
```[language]
// Integration test example
```

### Mocking
```[language]
// Mock pattern
```

## Coverage Requirements

- Minimum: [X]%
- Critical paths: 100%
```

### .claude/reference/api.md

```markdown
# API Reference

## Base URL

- Development: `http://localhost:[port]/api`
- Production: `https://[domain]/api`

## Authentication

[Auth approach - JWT/Session/API Key]

## Endpoints

### [Resource 1]

#### GET /[resource]
- **Description**: [what it does]
- **Response**:
```json
{
  "data": []
}
```

#### POST /[resource]
- **Request**:
```json
{
  "field": "value"
}
```
- **Response**: 201 Created

#### GET /[resource]/:id
...

### [Resource 2]
...

## Error Responses

```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Human readable message"
  }
}
```

## Rate Limiting

[If applicable]
```

### .claude/reference/deployment.md

```markdown
# Deployment Guide

## Environments

| Environment | URL | Branch |
|-------------|-----|--------|
| Development | localhost | - |
| Staging | [url] | develop |
| Production | [url] | main |

## Build

```bash
# Build command
[command]

# Output directory
[path]
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | DB connection | Yes |
| `API_KEY` | External API | Yes |
| ... | ... | ... |

## Docker (if applicable)

```bash
# Build
docker build -t [name] .

# Run
docker run -p [port]:[port] [name]
```

## CI/CD

[Pipeline description]

## Monitoring

[Logging/monitoring setup]

## Rollback

```bash
# How to rollback
[command]
```
```

---

## Instructions

1. **Analyze** the project to understand its type and structure
2. **Create** `.claude/reference/` directory
3. **Generate** CLAUDE.md (lean, with reference table)
4. **Generate** only relevant reference docs based on project type:
   - Backend project → backend-best-practices.md, database.md, api.md, testing.md
   - Frontend project → frontend-best-practices.md, testing.md
   - Full-stack → all relevant docs
5. **Fill in** as much as possible from analyzing the codebase
6. **Mark** sections needing manual completion with `[TODO]`

## Notes

- Only create reference docs that apply to the project
- Pre-fill from actual code patterns found
- Keep CLAUDE.md under 200 lines
- Reference docs can be detailed
- Update these docs as project evolves
