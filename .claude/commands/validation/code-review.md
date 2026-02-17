---
description: Technical code review for quality and bugs (pre-commit)
---

# Code Review

Perform technical code review on recently changed files.

## Review Philosophy

- Simplicity is the ultimate sophistication - every line should justify its existence
- Code is read far more often than it's written - optimize for readability
- The best code is often the code you don't write

## Process

### 1. Gather Context

Understand project standards:
- Read `CLAUDE.md`
- Read `README.md`
- Review key files in core modules
- Check documented standards in `/docs`

### 2. Identify Changes

```bash
git status
git diff HEAD
git diff --stat HEAD
```

Check new files:
```bash
git ls-files --others --exclude-standard
```

### 3. Review Each File

Read each changed/new file **in its entirety** (not just the diff) to understand full context.

### 4. Analysis Categories

For each file, analyze for:

#### Logic Errors
- Off-by-one errors
- Incorrect conditionals
- Missing error handling
- Race conditions
- Null/undefined access

#### Security Issues
- SQL injection vulnerabilities
- XSS vulnerabilities
- Insecure data handling
- Exposed secrets or API keys
- Missing input validation

#### Performance Problems
- N+1 queries
- Inefficient algorithms
- Memory leaks
- Unnecessary computations
- Missing caching opportunities

#### Code Quality
- DRY violations (repeated code)
- Overly complex functions
- Poor naming
- Missing type hints/annotations
- Dead code

#### Standards Compliance
- Project conventions adherence
- Linting/formatting standards
- Logging standards
- Testing standards
- Documentation requirements

### 5. Verify Issues

Before reporting:
- Run specific tests for issues found
- Confirm type errors are legitimate
- Validate security concerns with context

## Output Format

Save to: `.agents/code-reviews/[date-or-feature].md`

```markdown
# Code Review: [Feature/Date]

## Stats

- Files Modified: X
- Files Added: X
- Files Deleted: X
- Lines Added: +X
- Lines Removed: -X

## Issues Found

### [CRITICAL] Issue Title
- **File**: `path/to/file.ts`
- **Line**: 42
- **Issue**: [One-line description]
- **Detail**: [Why this is a problem]
- **Suggestion**: [How to fix]

### [HIGH] Issue Title
...

### [MEDIUM] Issue Title
...

### [LOW] Issue Title
...

## Summary

[X] issues found: [breakdown by severity]

### Recommendations
1. [Priority fix 1]
2. [Priority fix 2]
```

If no issues: "Code review passed. No technical issues detected."

## Severity Levels

| Level | Description |
|-------|-------------|
| CRITICAL | Security vulnerabilities, data loss risk |
| HIGH | Bugs that will cause failures in production |
| MEDIUM | Code quality issues, potential bugs |
| LOW | Style issues, minor improvements |

## Guidelines

- Be specific (line numbers, not vague complaints)
- Focus on real bugs, not style preferences
- Suggest fixes, don't just complain
- Flag security issues as CRITICAL
- Consider the context and constraints