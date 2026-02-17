---
description: Implement fix from RCA document for GitHub issue
argument-hint: [github-issue-id]
---

# Implement Fix: GitHub Issue #$ARGUMENTS

## Prerequisites

- RCA document exists at `docs/rca/issue-$ARGUMENTS.md`
- Working in a local Git repository with GitHub origin
- GitHub CLI installed and authenticated (optional, for status updates)

## RCA Document Reference

Read: `docs/rca/issue-$ARGUMENTS.md`

**Optional - View GitHub issue for context:**
```bash
gh issue view $ARGUMENTS
```

## Implementation Process

### 1. Read and Understand RCA

- Read the ENTIRE RCA document thoroughly
- Review the GitHub issue details
- Understand the root cause
- Review the proposed fix strategy
- Note all files to modify
- Review testing requirements

### 2. Verify Current State

Before making changes:
- Confirm the issue still exists
- Check current state of affected files
- Review any recent changes to those files

### 3. Implement the Fix

Follow the "Proposed Fix" section of the RCA:

**For each file to modify:**

#### a. Read the existing file
- Understand current implementation
- Locate the specific code mentioned in RCA

#### b. Make the fix
- Implement the change as described in RCA
- Follow the fix strategy exactly
- Maintain code style and conventions
- Add comments if the fix is non-obvious

#### c. Handle related changes
- Update any related code affected by the fix
- Ensure consistency across the codebase
- Update imports if needed

### 4. Add/Update Tests

Following the "Testing Requirements" from RCA:

**Create test cases for:**
1. Verify the fix resolves the issue
2. Test edge cases related to the bug
3. Ensure no regression in related functionality
4. Test any new code paths introduced

**Test implementation:**
```typescript
describe('Issue #$ARGUMENTS fix', () => {
  it('should [expected behavior]', () => {
    // Arrange - set up the scenario that caused the bug
    // Act - execute the code that previously failed
    // Assert - verify it now works correctly
  });
});
```

### 5. Run Validation

Execute validation commands from RCA:

```bash
# Linting
npm run lint

# Type checking
npm run typecheck

# Run tests
npm test

# Build
npm run build
```

**If validation fails:**
- Fix the issues
- Re-run validation
- Don't proceed until all pass

### 6. Verify Fix

**Manual verification:**
- Follow reproduction steps from RCA
- Confirm issue no longer occurs
- Test edge cases
- Check for unintended side effects

### 7. Update Documentation

If needed:
- Update code comments
- Update API documentation
- Update README if user-facing

## Output Report

### Fix Implementation Summary

**GitHub Issue**: #$ARGUMENTS
**Issue URL**: [Link]
**Root Cause**: [One-line summary from RCA]

### Changes Made

**Files Modified:**
1. **`path/to/file.ts`**
   - Change: [What was changed]
   - Lines: [Line numbers]

2. **`path/to/file.ts`**
   - Change: [What was changed]
   - Lines: [Line numbers]

### Tests Added

**Test Files Created/Modified:**
| File | Test Cases |
|------|------------|
| `tests/issue-fix.test.ts` | 3 |

**Coverage:**
- [x] Fix verification test
- [x] Edge case tests
- [x] Regression prevention tests

### Validation Results

```
Lint: PASS
Types: PASS
Tests: X passed, 0 failed
Build: SUCCESS
```

### Manual Verification

- [x] Followed reproduction steps - issue resolved
- [x] Tested edge cases - all pass
- [x] No new issues introduced
- [x] Original functionality preserved

### Ready for Commit

```bash
/commit
```

**Suggested commit message:**
```
fix(scope): resolve issue #$ARGUMENTS - [brief description]

[Summary of what was fixed and how]

Fixes #$ARGUMENTS
```

### Optional: Update GitHub Issue

```bash
# Add comment
gh issue comment $ARGUMENTS --body "Fix implemented. Ready for review."

# Close issue (if not using auto-close)
gh issue close $ARGUMENTS --comment "Fixed and merged."
```

## Notes

- If RCA is missing, run `/github_bug_fix/rca $ARGUMENTS` first
- If RCA analysis was incorrect, update the RCA document
- If additional issues found, create separate GitHub issues
- `Fixes #$ARGUMENTS` in commit message auto-closes the issue when merged