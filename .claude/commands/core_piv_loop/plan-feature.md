---
description: Create detailed implementation plan for a feature (no code writing)
argument-hint: [feature-description]
---

# Plan Feature: $ARGUMENTS

Transform feature request into a comprehensive implementation plan. **Do not write code** - create a plan that enables first-attempt implementation success.

## Core Principle

> "Context is King. The plan must contain ALL information needed for implementation."

## Planning Phases

### Phase 1: Feature Understanding

- **Core Problem**: What user problem does this solve?
- **Business Value**: Why is this important?
- **Feature Type**: New feature, enhancement, fix, refactor?
- **Complexity**: Small (hours), Medium (day), Large (days)?
- **User Story**: As a [user], I want [action], so that [benefit]

### Phase 2: Codebase Intelligence

Analyze the existing codebase:

```bash
# Project structure
git ls-files | grep -E '\.(ts|js|py|go)$' | head -50

# Find related code
grep -r "relevant_keyword" --include="*.ts" -l
```

Document:
- **Relevant files**: List files to modify/reference with line numbers
- **Existing patterns**: How similar features are implemented
- **Naming conventions**: Variable, function, file naming
- **Error handling**: How errors are managed
- **Testing patterns**: How similar features are tested

### Phase 3: External Research

If needed, research:
- Library documentation (with specific section links)
- Best practices for the approach
- Security considerations
- Performance implications

### Phase 4: Strategic Thinking

Consider:
- **Architecture fit**: Does this align with existing patterns?
- **Dependencies**: What does this feature depend on?
- **Edge cases**: What could go wrong?
- **Failure scenarios**: How should errors be handled?
- **Future extensibility**: Will this scale?

### Phase 5: Plan Structure

## Output Format

Save to: `.agents/plans/{feature-name}.md`

```markdown
# Feature: [Name]

## Summary
[2-3 sentence description]

## User Story
As a [user], I want [action], so that [benefit].

## Files to Reference
- `path/to/file.ts:42-85` - [why to reference]
- `path/to/other.ts:10-30` - [why to reference]

## Files to Create
- `path/to/new-file.ts` - [purpose]

## Files to Modify
- `path/to/existing.ts` - [what changes]

## Patterns to Follow
Reference: `path/to/example.ts:50-75`
```typescript
// Example of pattern to follow
```

## Implementation Plan

### Phase 1: [Name]
**Goal**: [What this phase accomplishes]

#### Task 1.1: [Description]
- File: `path/to/file.ts`
- Action: [Specific change]
- Validation: `npm test -- --grep "test name"`

#### Task 1.2: [Description]
...

### Phase 2: [Name]
...

## Testing Strategy

### Unit Tests
- [ ] Test case 1: [description]
- [ ] Test case 2: [description]

### Integration Tests
- [ ] Test case 1: [description]

### Edge Cases
- [ ] Edge case 1: [description]

## Validation Commands
```bash
# After each task
npm run lint
npm run typecheck

# After implementation
npm test
npm run build
```

## Acceptance Criteria
- [ ] Criterion 1
- [ ] Criterion 2
- [ ] All tests pass
- [ ] No lint errors
- [ ] Types check
```

## Quality Checklist

Before finalizing plan:
- [ ] Tasks are atomic and independently testable
- [ ] Each task has a validation command
- [ ] File paths include line numbers where relevant
- [ ] Patterns reference actual codebase examples
- [ ] Edge cases are identified
- [ ] Testing strategy matches project conventions