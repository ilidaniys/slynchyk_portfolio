---
description: Generate a Product Requirements Document from conversation
argument-hint: [filename.md]
---

# Create PRD: $ARGUMENTS

Generate a comprehensive Product Requirements Document by synthesizing our conversation.

## Process

### 1. Extract Requirements

Review the conversation history for:
- Explicit requirements and features
- Implicit needs and constraints
- Technical preferences and decisions
- Target users and use cases
- Success criteria mentioned

### 2. Synthesize

Organize extracted information with reasonable assumptions for gaps. Flag assumptions clearly.

### 3. Write PRD

Generate markdown with these sections:

```markdown
# [Product Name] - Product Requirements Document

## Executive Summary
[2-3 sentences: what, why, for whom]

## Mission Statement
[Core purpose and value proposition]

## Target Users
[User personas with needs and pain points]

## MVP Scope

### In Scope
- [ ] Feature 1
- [ ] Feature 2

### Out of Scope (Future)
- [ ] Deferred feature 1
- [ ] Deferred feature 2

## User Stories
As a [user], I want to [action], so that [benefit].

## Architecture Overview
[High-level system design, key components]

## Feature Specifications
[Detailed feature breakdowns]

## Tech Stack
- Frontend: [framework, version]
- Backend: [framework, version]
- Database: [type, version]
- Infrastructure: [hosting, services]

## API Specification
[Endpoints, request/response formats if applicable]

## Security Considerations
[Auth approach, data protection, vulnerabilities to address]

## Success Metrics
[Measurable KPIs and acceptance criteria]

## Implementation Phases
### Phase 1: [name]
- Deliverables
- Validation criteria

### Phase 2: [name]
...

## Risks & Mitigations
[Known risks and how to address them]

## Open Questions
[Unresolved decisions needing input]
```

### 4. Validate

- All sections present and complete
- Success criteria are measurable
- Technical choices are consistent
- Scope is realistic for MVP

## Output

Save to: `.claude/$ARGUMENTS` (default: `PRD.md`)

Confirm:
- File location
- Summary of key decisions
- Assumptions made
- Suggested next steps
