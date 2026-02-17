# Server Components with Suspense & Skeleton Loading - Product Requirements Document

## Executive Summary

Transform the ART trading platform frontend to use React Server Components with a two-tier loading strategy: route-level `loading.tsx` files and component-level Suspense boundaries with consistent skeleton loaders. This improves perceived performance, provides visual consistency, and leverages Next.js 16's streaming capabilities for optimal user experience.

## Mission Statement

Deliver a fast, visually consistent loading experience across all platform pages by implementing server-side rendering with progressive hydration, eliminating loading flashes, and providing users with immediate visual feedback during data fetching.

## Target Users

### Primary User: Platform Trader
- **Needs**: Fast page loads, no jarring loading states, smooth navigation between dashboard sections
- **Pain Points**: Current inconsistent loading experiences, some pages flash blank content, client-side fetching causes delays
- **Goals**: Quick access to robot status, backtest results, and account statistics

### Secondary User: Platform Admin
- **Needs**: Efficient admin panel access with clear loading indicators
- **Pain Points**: Admin pages may feel slow due to client-side data fetching
- **Goals**: Quick overview of platform statistics and user management

## MVP Scope

### In Scope
- [ ] Centralized skeleton component library (`src/components/skeletons/`)
- [ ] Route-level `loading.tsx` files for 7 main routes
- [ ] `HydrateClient` wrapper implementation on all data-fetching pages
- [ ] Component-level Suspense boundaries with granular skeletons
- [ ] Convert `useQuery` to `useSuspenseQuery` in client wrappers
- [ ] Server-side data prefetching with tRPC
- [ ] Consolidate existing skeleton components

### Out of Scope (Future)
- [ ] Error boundary improvements (error.tsx files)
- [ ] Streaming SSR optimizations
- [ ] Skeleton animation customization options
- [ ] Dark/light mode skeleton variants
- [ ] Loading state analytics/metrics collection
- [ ] A/B testing different skeleton designs

## User Stories

1. **As a trader**, I want to see skeleton placeholders immediately when navigating to the dashboard, so that I know the page is loading and not broken.

2. **As a trader**, I want individual sections of the dashboard to load progressively, so that I can start reading available data while other sections are still loading.

3. **As a user**, I want consistent skeleton designs across all pages, so that the loading experience feels polished and professional.

4. **As a user navigating between pages**, I want instant visual feedback, so that I know my click was registered.

5. **As an admin**, I want the admin panel to load with clear loading indicators, so that I understand data is being fetched.

## Architecture Overview

### Two-Tier Loading Strategy

```
┌─────────────────────────────────────────────────────────────┐
│  Tier 1: Route Navigation (loading.tsx)                      │
│  └── Next.js shows loading.tsx immediately on navigation     │
│       └── Full page skeleton component                       │
├─────────────────────────────────────────────────────────────┤
│  Tier 2: Component Rendering (Suspense boundaries)           │
│  └── Server Component with HydrateClient                     │
│       ├── void api.xxx.prefetch() - starts data loading      │
│       ├── <Suspense fallback={<SectionSkeleton />}>         │
│       │    └── <ClientComponent />                           │
│       └── Multiple independent Suspense boundaries           │
├─────────────────────────────────────────────────────────────┤
│  Tier 3: Client Hydration                                    │
│  └── useSuspenseQuery() consumes prefetched data             │
│       └── Instant render if data ready, Suspense if not     │
└─────────────────────────────────────────────────────────────┘
```

### Component Hierarchy

```
src/
├── components/
│   └── skeletons/           # Centralized skeleton library
│       ├── index.ts         # Barrel export
│       ├── PageHeaderSkeleton.tsx
│       ├── CardGridSkeleton.tsx
│       ├── StatCardsRowSkeleton.tsx
│       ├── ProfilePageSkeleton.tsx
│       ├── RobotsListSkeleton.tsx
│       ├── BacktestsListSkeleton.tsx
│       ├── ReferralsPageSkeleton.tsx
│       ├── MarketplacePageSkeleton.tsx
│       ├── AdminPanelSkeleton.tsx
│       ├── SettingsListSkeleton.tsx    # moved
│       └── BacktestPendingSkeleton.tsx # moved
└── app/[locale]/(app)/
    ├── profile/
    │   ├── loading.tsx      # Route-level skeleton
    │   └── page.tsx         # HydrateClient + Suspense
    ├── settings/
    │   ├── loading.tsx
    │   └── page.tsx
    └── ...
```

## Feature Specifications

### F1: Skeleton Component Library

**Purpose**: Provide consistent, reusable skeleton components for all loading states.

**Components**:
| Component | Usage | Props |
|-----------|-------|-------|
| `PageHeaderSkeleton` | Page titles with optional description | `hasDescription`, `hasAction` |
| `CardGridSkeleton` | Grid of card placeholders | `count`, `columns` |
| `StatCardsRowSkeleton` | 4-column stat cards (dashboard) | none |
| `ProfilePageSkeleton` | Full profile/dashboard page | none |
| `RobotsListSkeleton` | Robots list with filters | none |
| `BacktestsListSkeleton` | Backtests grid | none |
| `ReferralsPageSkeleton` | Referrals dashboard | none |
| `MarketplacePageSkeleton` | Marketplace listings | none |
| `AdminPanelSkeleton` | Admin statistics | none |

**Design Requirements**:
- Use existing `Skeleton` component from `@art/components/ui/skeleton`
- Match exact layout dimensions of actual content
- Use `bg-accent` color with `animate-pulse`
- No layout shift when content loads

### F2: Route-Level Loading (loading.tsx)

**Purpose**: Provide immediate visual feedback during route navigation.

**Files to Create**:
```
src/app/[locale]/(app)/profile/loading.tsx
src/app/[locale]/(app)/profile/robots/loading.tsx
src/app/[locale]/(app)/profile/backtest/loading.tsx
src/app/[locale]/(app)/profile/referrals/loading.tsx
src/app/[locale]/(app)/settings/loading.tsx
src/app/[locale]/(app)/marketplace/loading.tsx
src/app/[locale]/(app)/adminpanel/loading.tsx
```

**Behavior**:
- Shows instantly when navigating to route
- Replaced by page content when server render completes
- Uses full-page skeleton from skeleton library

### F3: HydrateClient Integration

**Purpose**: Enable server-side data prefetching with client-side hydration.

**Pattern**:
```typescript
import { HydrateClient, api } from "@art/trpc/server";
import { Suspense } from "react";

export default async function Page() {
    void api.data.prefetch();

    return (
        <HydrateClient>
            <Suspense fallback={<Skeleton />}>
                <ClientComponent />
            </Suspense>
        </HydrateClient>
    );
}
```

**Pages to Update**: 7 pages (profile, robots, referrals, settings, marketplace, adminpanel, robot detail)

### F4: Suspense Query Migration

**Purpose**: Enable Suspense-based data fetching in client components.

**Migration**:
```typescript
// Before
const { data, isLoading } = api.xxx.useQuery();
if (isLoading) return <Skeleton />;

// After
const [data] = api.xxx.useSuspenseQuery();
// No loading check needed - Suspense handles it
```

**Components to Update**: 6 client wrappers (MainBar, RobotListWrapper, SettingsListWrapper, RobotSettingsList, ReferralListWrapper, BacktestListWrapper)

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **React**: React 19 with Suspense
- **Data Fetching**: tRPC 11 with TanStack Query
- **Styling**: Tailwind CSS 4, shadcn/ui
- **Animation**: Tailwind `animate-pulse`

## API Specification

No new API endpoints required. This feature uses existing tRPC procedures with different calling patterns:

| Current | Target |
|---------|--------|
| `api.xxx.useQuery()` | `api.xxx.useSuspenseQuery()` |
| Client-side fetch | `void api.xxx.prefetch()` on server |

## Security Considerations

- **No security impact**: This is a frontend rendering optimization
- **Auth unchanged**: Clerk authentication remains unchanged
- **Data access unchanged**: Same tRPC procedures with same auth checks
- **SSR considerations**: Ensure auth tokens are properly passed in server context (already implemented in `src/trpc/server.ts`)

## Success Metrics

| Metric | Current | Target | Measurement |
|--------|---------|--------|-------------|
| Layout Shift (CLS) | Unknown | < 0.1 | Lighthouse |
| Time to First Content | Varies | Consistent skeletons | Manual testing |
| Loading consistency | Inconsistent | 100% skeleton coverage | Visual audit |
| Build success | N/A | 100% | `pnpm build` |
| Type safety | N/A | 100% | `pnpm check` |

### Acceptance Criteria
- [ ] All pages use `HydrateClient` wrapper
- [ ] All routes have `loading.tsx` files
- [ ] All data components wrapped in Suspense
- [ ] All skeletons match content layout
- [ ] No hydration errors in console
- [ ] `pnpm check` passes
- [ ] `pnpm build` succeeds

## Implementation Phases

### Phase 1: Skeleton Component Library
**Duration**: Foundation work
**Deliverables**:
- 10 skeleton components in `src/components/skeletons/`
- Barrel export file
- Move existing skeletons to centralized location

**Validation**:
- `pnpm check` passes
- Components render correctly in Storybook/isolation

### Phase 2: Route Loading Files
**Duration**: Quick wins
**Deliverables**:
- 7 `loading.tsx` files
- Each imports corresponding skeleton

**Validation**:
- Navigation shows skeleton immediately
- No flash of blank content

### Phase 3: Client Component Migration
**Duration**: Core changes
**Deliverables**:
- 6 client wrappers converted to `useSuspenseQuery`
- Remove manual `isLoading` checks

**Validation**:
- Components work with Suspense boundaries
- No loading state regressions

### Phase 4: Server Component Updates
**Duration**: Integration
**Deliverables**:
- 7 page.tsx files updated with `HydrateClient`
- Prefetch calls added
- Suspense boundaries wrapped around components

**Validation**:
- Data prefetched on server
- Progressive loading works
- No hydration mismatches

### Phase 5: Special Cases & Polish
**Duration**: Edge cases
**Deliverables**:
- Backtest polling page handled
- Backtest list page refactored
- Final testing and fixes

**Validation**:
- All pages work correctly
- Full acceptance criteria met

## Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Hydration mismatches | Medium | High | Test each page thoroughly, use React DevTools |
| Skeleton layout shift | Medium | Medium | Measure exact dimensions from actual content |
| Polling pages break | Low | Medium | Keep `useQuery` for polling, use hybrid approach |
| Build failures | Low | High | Run `pnpm check` after each change |
| Performance regression | Low | Medium | Test with Slow 3G in DevTools |

## Open Questions

1. **Backtest polling**: Should the backtest detail page use hybrid approach (server prefetch + client polling) or remain fully client-side?
   - **Recommendation**: Hybrid - better initial load, polling for updates

2. **Skeleton granularity**: One skeleton per page vs composed from building blocks?
   - **Recommendation**: Building blocks for reusability, composed into page skeletons

3. **MainBar refactoring**: Should MainBar be split into smaller components for more granular loading?
   - **Recommendation**: Yes, split into StatCards and Charts components

## Assumptions Made

1. **tRPC prefetch works**: Assuming `void api.xxx.prefetch()` properly populates the query cache for `HydrateClient`
2. **useSuspenseQuery available**: Assuming tRPC + TanStack Query setup supports `useSuspenseQuery`
3. **No auth changes needed**: Assuming current server-side auth context works with prefetch pattern
4. **Skeleton dimensions stable**: Assuming content layouts are stable and skeleton dimensions won't need frequent updates

## Dependencies

- React 19 Suspense features
- tRPC 11 with TanStack Query integration
- Next.js 16 App Router with `loading.tsx` support
- Existing `HydrateClient` implementation in `src/trpc/server.ts`

---

*Document created: Based on feature planning conversation*
*Related plan: `.agents/plans/server-components-with-suspense.md`*
