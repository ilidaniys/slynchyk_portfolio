---
description: Create a git commit with semantic prefix
---

# Commit Changes

Create a new commit with uncommitted changes.

## Steps

### 1. Review Changes

```bash
git status && git diff HEAD && git status --porcelain
```

### 2. Stage Files

Add both untracked and modified files to the staging area.

### 3. Create Commit

Write a focused, atomic commit message that:
- Clearly describes what changed and why
- Uses semantic prefix: `feat:`, `fix:`, `docs:`, `refactor:`, `test:`, `chore:`
- Keeps first line under 72 characters
- Adds body for complex changes

### Semantic Prefixes

| Prefix | Use Case |
|--------|----------|
| `feat:` | New feature |
| `fix:` | Bug fix |
| `docs:` | Documentation only |
| `refactor:` | Code change that neither fixes nor adds |
| `test:` | Adding or updating tests |
| `chore:` | Build, tooling, dependencies |
| `perf:` | Performance improvement |
| `style:` | Formatting, whitespace |

### Example

```bash
git add .
git commit -m "feat(auth): add OAuth2 login flow

Implements Google and GitHub OAuth providers with
token refresh handling and session persistence."
```
