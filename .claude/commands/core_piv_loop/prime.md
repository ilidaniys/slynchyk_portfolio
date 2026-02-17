---
description: Load and understand project context before starting work
---

# Prime: Load Project Context

Build comprehensive understanding of the codebase before making changes.

## Process

### 1. Project Structure Analysis

```bash
# List all tracked files
git ls-files | head -100

# Directory structure (depth 3)
find . -type d -not -path '*/\.*' | head -50

# Recent activity
git log --oneline -20
```

### 2. Documentation Review

Read in order of priority:
1. `CLAUDE.md` - AI-specific instructions
2. `README.md` - Project overview
3. `.claude/PRD.md` - Requirements (if exists)
4. `docs/` - Additional documentation

### 3. Key File Identification

Based on project type, locate and review:

**Configuration:**
- `package.json`, `pyproject.toml`, `go.mod`, `Cargo.toml`
- `.env.example`, config files
- `tsconfig.json`, `vite.config.*`, `webpack.config.*`

**Entry Points:**
- `src/main.*`, `app/main.py`, `index.*`
- `src/App.*` (frontend)

**Core Modules:**
- Database models/schemas
- API routes/controllers
- Core business logic

**Testing:**
- Test configuration
- Example test files
- Testing patterns used

### 4. Current State Assessment

```bash
# Current branch and status
git status
git branch -v

# Recent changes
git log --oneline -10
git diff --stat HEAD~5
```

## Output Summary

Provide a concise report:

### Project Overview
- **Purpose**: [What the app does]
- **Type**: [Web app, CLI, library, etc.]
- **Status**: [Active development, maintenance, etc.]

### Architecture
- **Structure**: [Monorepo, frontend/backend split, etc.]
- **Key directories**: [Purpose of each]

### Tech Stack
- **Language(s)**: [with versions]
- **Framework(s)**: [with versions]
- **Database**: [type]
- **Testing**: [framework]

### Core Patterns
- **Code style**: [conventions observed]
- **State management**: [approach used]
- **API design**: [REST, GraphQL, etc.]

### Current State
- **Branch**: [current branch]
- **Recent focus**: [what's being worked on]
- **Open items**: [WIP, TODOs observed]

## Notes

- Use bullet points for scannability
- Be specific about versions and patterns
- Flag any inconsistencies or concerns observed