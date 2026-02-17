---
description: Run full project validation (lint, test, build)
---

# Validate Project

Run comprehensive validation checks on the project.

## Validation Steps

### 1. Code Quality (Linting)

**JavaScript/TypeScript:**
```bash
npm run lint
# or: npx eslint . --ext .ts,.tsx,.js,.jsx
```

**Python:**
```bash
ruff check .
# or: flake8 . / pylint **/*.py
```

**Go:**
```bash
go vet ./...
golangci-lint run
```

**Expected**: Clean output, no errors or warnings.

### 2. Type Checking

**TypeScript:**
```bash
npm run typecheck
# or: npx tsc --noEmit
```

**Python (if using mypy):**
```bash
mypy .
```

**Expected**: No type errors.

### 3. Unit Tests

```bash
# JavaScript/TypeScript
npm test
# or: npx vitest run / npx jest

# Python
pytest -v
# or: uv run pytest -v

# Go
go test ./...
```

**Expected**: All tests pass, execution under reasonable time.

### 4. Test Coverage (Optional)

```bash
# JavaScript/TypeScript
npm run test:coverage

# Python
pytest --cov=app --cov-report=term-missing

# Go
go test -cover ./...
```

**Target**: Project-specific threshold (commonly 80%+).

### 5. Build

**Frontend:**
```bash
npm run build
```

**Backend (if applicable):**
```bash
# Go
go build ./...

# Rust
cargo build --release
```

**Expected**: Successful build, output in dist/build directory.

### 6. Integration Tests (Optional)

```bash
npm run test:integration
# or: pytest tests/integration/
```

### 7. E2E Tests (Optional)

```bash
npx playwright test
# or: npm run test:e2e
```

## Validation Report

### Summary

| Check | Status | Notes |
|-------|--------|-------|
| Lint | PASS/FAIL | [details] |
| Types | PASS/FAIL | [details] |
| Unit Tests | X/Y passed | [time] |
| Coverage | XX% | [threshold: YY%] |
| Build | PASS/FAIL | [details] |
| Integration | PASS/FAIL/SKIPPED | [details] |
| E2E | PASS/FAIL/SKIPPED | [details] |

### Issues Found

[List any issues with file:line references]

### Overall Health

**Status**: PASS / FAIL

[Summary of project health and any recommendations]

## Notes

- Adjust commands based on project's package.json/pyproject.toml scripts
- Check CLAUDE.md for project-specific validation requirements
- Some projects may have additional validation steps
