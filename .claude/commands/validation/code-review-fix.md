---
description: Fix issues identified in code review
argument-hint: [path/to/code-review.md or issue description]
---

# Fix Code Review Issues: $ARGUMENTS

Address issues identified during code review.

## Input

Review file: `$ARGUMENTS`

If `$ARGUMENTS` is a file path, read the entire file to understand all issues.

## Process

For each issue identified:

### 1. Understand the Problem

- What made the code problematic?
- Why is this a bug/security issue/quality problem?
- What's the impact if left unfixed?

### 2. Implement the Fix

- Navigate to the specified file and line
- Understand the surrounding context
- Make the minimal fix that addresses the issue
- Maintain code style consistency

### 3. Validate the Fix

- Write or update tests to cover the fix
- Run relevant tests to confirm the fix works
- Ensure no regressions introduced

## Fix Each Issue

### Issue: [Title from review]

**Problem:**
[Explain what was wrong]

**Fix:**
```typescript
// Before
[problematic code]

// After
[fixed code]
```

**Validation:**
```bash
npm test -- --grep "relevant test"
```

**Status:** Fixed

---

[Repeat for each issue]

## Completion

After all issues are fixed:

```bash
/validation/validate
```

Ensure all validation passes before committing.

## Output Summary

### Issues Addressed

| Issue | Severity | File | Status |
|-------|----------|------|--------|
| [Title] | CRITICAL | `file.ts:42` | Fixed |
| [Title] | HIGH | `file.ts:88` | Fixed |
| [Title] | MEDIUM | `other.ts:15` | Fixed |

### Tests Added/Updated

- `tests/file.test.ts` - Added test for [issue]
- `tests/other.test.ts` - Updated to cover [edge case]

### Validation

```
Lint: PASS
Types: PASS
Tests: All passing
```

### Ready for Re-Review

All identified issues have been addressed. Ready for:
- Re-review (if needed)
- `/commit`