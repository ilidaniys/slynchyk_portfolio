---
description: Execute implementation from a plan file
argument-hint: [path/to/plan.md]
---

# Execute Plan: $ARGUMENTS

Implement changes based on the plan at `$ARGUMENTS`.

## Prerequisites

- Plan file exists at specified path
- Project dependencies installed
- Development environment ready

## Execution Workflow

### 1. Understanding Phase

Read the ENTIRE plan carefully:
- Understand all tasks and their order
- Note dependencies between tasks
- Review validation commands
- Understand testing requirements
- Identify acceptance criteria

### 2. Implementation Phase

For each task in the plan:

#### a. Navigate
- Open the specified file
- Go to the referenced line numbers

#### b. Implement
- Make changes as specified
- Follow the patterns referenced in the plan
- Maintain code style consistency

#### c. Verify
- Check syntax is correct
- Verify imports are complete
- Run task-level validation if specified

### 3. Testing Phase

After implementation tasks:
- Create all specified test files
- Implement test cases per testing strategy
- Cover edge cases identified in plan

### 4. Validation Phase

Run all validation commands in order:

```bash
# Linting
npm run lint  # or project equivalent

# Type checking
npm run typecheck  # or project equivalent

# Unit tests
npm test

# Integration tests (if applicable)
npm run test:integration

# Build
npm run build
```

**Fix any failures before proceeding.**

### 5. Verification Phase

Confirm:
- [ ] All tasks completed
- [ ] All tests created and passing
- [ ] All validation commands pass
- [ ] Code follows project conventions
- [ ] No regressions introduced

## Output Report

### Execution Summary

**Plan**: `$ARGUMENTS`
**Status**: Complete | Partial | Blocked

### Tasks Completed

| Task | File | Status |
|------|------|--------|
| 1.1 | `path/to/file.ts` | Done |
| 1.2 | `path/to/file.ts` | Done |

### Tests Created

| Test File | Test Cases | Status |
|-----------|------------|--------|
| `tests/feature.test.ts` | 5 | Passing |

### Validation Results

```
Lint: PASS
Types: PASS
Tests: 42 passed, 0 failed
Build: SUCCESS
```

### Deviations from Plan

[Document any changes from the original plan and why]

### Issues Encountered

[Document any problems and how they were resolved]

### Ready for Commit

All changes complete and validated.

```bash
/commit
```

## Notes

- Execute commands exactly as specified in plan
- Document any deviations with reasoning
- Don't skip validation steps
- If blocked, document the issue clearly