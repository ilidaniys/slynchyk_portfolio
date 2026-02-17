---
description: Meta-review comparing plan vs execution for process improvement
argument-hint: [plan-file] [execution-report-file]
---

# System Review

Analyze how well implementation followed the plan. Focus on **process improvements**, not code bugs.

> "System review is NOT code review - it's about process bugs, not code bugs."

## Inputs

- **Plan**: $1 (e.g., `.agents/plans/feature-name.md`)
- **Execution Report**: $2 (e.g., `.agents/execution-reports/feature-name.md`)

Also review:
- `.claude/commands/core_piv_loop/plan-feature.md` - Planning command
- `.claude/commands/core_piv_loop/execute.md` - Execution command

## Analysis Framework

### 1. Understand the Plan

Review the plan for:
- Intended feature and architecture
- Specified tasks and validation
- Testing requirements
- Acceptance criteria

### 2. Understand Actual Execution

Review execution report for:
- What was actually implemented
- Deviations from plan
- Obstacles encountered
- Items not completed

### 3. Classify Divergences

**Good Divergence** (justified):
- Plan assumptions didn't match reality
- Better patterns discovered during implementation
- Necessary optimizations found
- Security issues uncovered

**Bad Divergence** (problematic):
- Ignored constraints without justification
- Created non-standard architecture
- Shortcuts that created tech debt
- Misunderstood requirements

### 4. Trace Root Causes

For each divergence, identify:
- Was the plan unclear?
- Was context missing?
- Was validation inadequate?
- Was communication lacking?

### 5. Generate Improvements

Identify specific, actionable improvements for:
- `CLAUDE.md` updates
- Planning command refinements
- Execution command refinements
- New automation opportunities

## Output Format

Save to: `.agents/system-reviews/[feature-name]-review.md`

```markdown
# System Review: [Feature Name]

## Overview

- **Plan**: [plan file path]
- **Execution Report**: [report file path]
- **Overall Alignment**: X/10

## Divergence Analysis

### Good Divergences

#### [Divergence Title]
- **Planned**: [What was planned]
- **Actual**: [What was done]
- **Reason**: [Why this was better]
- **Learning**: [What to incorporate into process]

### Bad Divergences

#### [Divergence Title]
- **Planned**: [What was planned]
- **Actual**: [What was done]
- **Root Cause**: [Why this happened]
- **Impact**: [What problems this caused]
- **Prevention**: [How to prevent in future]

## Pattern Compliance

| Pattern | Expected | Actual | Status |
|---------|----------|--------|--------|
| [Pattern 1] | [expected] | [actual] | OK/ISSUE |
| [Pattern 2] | [expected] | [actual] | OK/ISSUE |

## Improvement Actions

### CLAUDE.md Updates

```markdown
[Specific text to add/modify]
```

### Planning Command Updates

[Specific improvements to plan-feature.md]

### Execution Command Updates

[Specific improvements to execute.md]

### New Automation

[New commands or skills to create]

## Key Learnings

1. [Learning 1]
2. [Learning 2]
3. [Learning 3]

## Recommendations

1. [Actionable recommendation 1]
2. [Actionable recommendation 2]
```

## Guidelines

- Be specific - name exact issues, not vague critiques
- Identify patterns, not one-off problems
- Provide actionable updates, not just observations
- Focus on process improvement, not blame
- Consider systemic causes, not just symptoms