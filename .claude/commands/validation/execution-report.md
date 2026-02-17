---
description: Document completed feature implementation
argument-hint: [feature-name]
---

# Execution Report: $ARGUMENTS

Document the completed implementation for review and process improvement.

## Report Template

Save to: `.agents/execution-reports/$ARGUMENTS.md`

```markdown
# Execution Report: [Feature Name]

## Meta

| Field | Value |
|-------|-------|
| Feature | [Name] |
| Plan File | `.agents/plans/[name].md` |
| Date | [YYYY-MM-DD] |
| Duration | [Actual time spent] |

## Files Changed

### Added
| File | Lines | Purpose |
|------|-------|---------|
| `path/to/new.ts` | +150 | [purpose] |

### Modified
| File | Changes | Purpose |
|------|---------|---------|
| `path/to/existing.ts` | +30 -10 | [purpose] |

### Deleted
| File | Reason |
|------|--------|
| `path/to/old.ts` | [reason] |

**Total**: +X -Y lines across Z files

## Validation Results

| Check | Status | Notes |
|-------|--------|-------|
| Syntax/Lint | PASS/FAIL | [details] |
| Type Check | PASS/FAIL | [details] |
| Unit Tests | X/Y passed | [details] |
| Integration | PASS/FAIL | [details] |
| Build | PASS/FAIL | [details] |

## Implementation Reflection

### What Went Well
- [Success 1]
- [Success 2]
- [Success 3]

### Obstacles Encountered
- [Obstacle 1] - [How resolved]
- [Obstacle 2] - [How resolved]

### Deviations from Plan

#### Deviation 1: [Title]
- **Planned**: [What the plan said]
- **Actual**: [What was done instead]
- **Type**: Better approach / Incorrect assumption / Performance issue / Security concern / Other
- **Justification**: [Why the deviation was necessary]

#### Deviation 2: [Title]
...

## Incomplete Items

| Planned Item | Status | Reason |
|--------------|--------|--------|
| [Item 1] | Deferred | [Why] |
| [Item 2] | Blocked | [By what] |

## Testing Summary

### Tests Created
| Test File | Cases | Coverage |
|-----------|-------|----------|
| `tests/feature.test.ts` | 5 | [areas covered] |

### Test Results
```
[Test output summary]
```

## Acceptance Criteria

| Criterion | Met | Notes |
|-----------|-----|-------|
| [Criterion 1] | Yes/No | [details] |
| [Criterion 2] | Yes/No | [details] |

## Recommendations

### For Future Planning
- [Insight that would improve future plans]
- [Missing context that should be included]

### For Documentation
- [Updates needed to CLAUDE.md]
- [Updates needed to other docs]

### For Process
- [Process improvement suggestion]
- [Tool/automation suggestion]

## Next Steps

1. [Immediate follow-up 1]
2. [Immediate follow-up 2]
3. [Future enhancement to consider]
```

## Purpose

This report:
- Documents what was actually implemented
- Captures learnings and obstacles
- Enables system review for process improvement
- Creates audit trail for future reference
- Identifies follow-up work needed

## Guidelines

- Be honest about deviations and obstacles
- Focus on learnings, not excuses
- Be specific about what worked and what didn't
- Include actionable recommendations
- Link to relevant commits/PRs if applicable