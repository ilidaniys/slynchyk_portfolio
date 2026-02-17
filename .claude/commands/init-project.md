---
description: Initialize and start the project locally
---

# Initialize Project

Set up and start the application locally.

## Steps

### 1. Identify Project Type

Examine the project structure to determine:
- Language/framework (check package.json, pyproject.toml, go.mod, Cargo.toml, etc.)
- Package manager (npm, pnpm, yarn, uv, pip, cargo, etc.)
- Database requirements
- Environment variables needed

### 2. Install Dependencies

**Node.js projects:**
```bash
npm install
# or: pnpm install / yarn install / bun install
```

**Python projects:**
```bash
uv sync
# or: pip install -r requirements.txt / poetry install
```

**Go projects:**
```bash
go mod download
```

### 3. Environment Setup

Check for `.env.example` or similar:
```bash
cp .env.example .env
```

Review and fill in required values.

### 4. Database Setup

If applicable:
- Run migrations
- Seed initial data
- Verify connection

### 5. Start Services

**Backend:**
```bash
# Python/FastAPI
uv run uvicorn app.main:app --reload --port 8000

# Node.js
npm run dev
```

**Frontend (if separate):**
```bash
cd frontend && npm run dev
```

### 6. Validate Setup

```bash
# Test API health (adjust URL/port as needed)
curl -s http://localhost:8000/health

# Or open in browser
open http://localhost:3000
```

## Access Points

Document the running services:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000
- API Docs: http://localhost:8000/docs (if available)

## Cleanup

To stop services: `Ctrl+C` in respective terminals

## Notes

- Check CLAUDE.md or README.md for project-specific instructions
- Some projects may require additional services (Redis, PostgreSQL, etc.)
