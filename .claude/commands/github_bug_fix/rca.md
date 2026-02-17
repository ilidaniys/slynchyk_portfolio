---
description: Root Cause Analysis for a GitHub issue
argument-hint: [github-issue-id]
---

# Root Cause Analysis: Issue #$ARGUMENTS

Investigate GitHub issue and document findings for implementation.

## Prerequisites

- GitHub CLI installed and authenticated
- Working in a repository with GitHub origin

## Investigation Process

### 1. Fetch Issue Details

```bash
gh issue view $ARGUMENTS
```

Document:
- Issue title and description
- Reporter and date
- Labels and severity
- Reproduction steps (if provided)

### 2. Search Codebase

Find relevant code:

```bash
# Search for error messages mentioned
grep -r "error message" --include="*.ts" -l

# Find related components
grep -r "ComponentName" --include="*.ts" -l

# Check recent changes to affected files
git log --oneline -20 -- path/to/file.ts
```

### 3. Review Recent Changes

```bash
# What changed recently?
git log --oneline -30

# Diff of recent changes
git diff HEAD~10 -- path/to/affected/file.ts
```

### 4. Analyze the Bug

Consider:
- Input validation failures
- Edge cases not handled
- Race conditions or timing issues
- Incorrect assumptions in logic
- Missing error handling
- Integration issues between components
- State management problems

### 5. Assess Impact

- What features are affected?
- What's the severity? (Critical, High, Medium, Low)
- Are there data integrity concerns?
- Are there security implications?
- How many users are impacted?

### 6. Design Fix Strategy

- Which files need modification?
- What's the minimal fix?
- Are there alternative approaches?
- What tests are needed?
- What are the risks of the fix?

## Output Document

Save to: `docs/rca/issue-$ARGUMENTS.md`

```markdown
# RCA: Issue #$ARGUMENTS

## Summary

| Field | Value |
|-------|-------|
| Issue ID | #$ARGUMENTS |
| Issue URL | [Link](https://github.com/org/repo/issues/$ARGUMENTS) |
| Title | [Issue title] |
| Reporter | @username |
| Severity | Critical / High / Medium / Low |
| Status | Investigating / Root Cause Found / Fix Proposed |

## Problem Statement

**Expected Behavior:**
[What should happen]

**Actual Behavior:**
[What actually happens]

**Symptoms:**
- Symptom 1
- Symptom 2

## Reproduction Steps

1. Step 1
2. Step 2
3. Observe: [error/unexpected behavior]

**Verified**: Yes / No

## Root Cause Analysis

### Location
- **File**: `path/to/file.ts`
- **Function**: `functionName()`
- **Line(s)**: 42-50

### Explanation
[Detailed explanation of why the bug occurs]

### Code Reference
```typescript
// The problematic code
```

### Why This Causes the Issue
[Technical explanation]

## Impact Assessment

- **Scope**: [How widespread]
- **Affected Features**: [List]
- **Data Impact**: [Any data corruption risk]
- **Security Impact**: [Any security implications]

## Proposed Fix

### Strategy
[High-level approach to fixing]

### Files to Modify
1. `path/to/file.ts` - [what changes]
2. `path/to/other.ts` - [what changes]

### Implementation Details
```typescript
// Proposed fix code
```

### Alternative Approaches
1. [Alternative 1] - Pros/Cons
2. [Alternative 2] - Pros/Cons

### Risks
- Risk 1 and mitigation
- Risk 2 and mitigation

## Testing Requirements

### Regression Tests
- [ ] Test that the fix resolves the issue
- [ ] Test related functionality still works

### Edge Cases
- [ ] Edge case 1
- [ ] Edge case 2

### Validation Commands
```bash
npm test -- --grep "related tests"
```

## Next Steps

1. Review this RCA
2. Run `/github_bug_fix/implement-fix $ARGUMENTS`
```

## Notes

- Be specific about file locations and line numbers
- Include actual code snippets, not descriptions
- Verify reproduction steps work
- Consider all edge cases
