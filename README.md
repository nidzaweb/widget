# Item Selector Widget

A React widget for selecting up to 3 items from a searchable, filterable list of 12,000 elements. Features a draft/save pattern - changes are only committed when the user explicitly saves.

## Features

- Search items by name
- Filter by element number (`> 100`, `> 2500`, `> 10,000`)
- Select up to 3 items with draft/save/cancel flow
- Remove items directly from the summary view
- Virtualized list — renders only visible rows regardless of total count

## Tech Stack

React 19
TypeScript 6
Vite 8
React Context + `useReducer`
`lucide-react`
`@tanstack/react-virtual`
Plain CSS with custom properties

## Setup

```bash
npm install
npm run dev
```

## Scripts

| Command | Description |
| `npm run dev` | Start dev server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run format` | Format with Prettier |

## File Structure

```
src/
├── components/               # Feature components
│   ├── ItemSelector.tsx      # Root widget panel
│   ├── ItemSelectorFilter.tsx
│   ├── ItemSelectorFooter.tsx
│   ├── ItemSelectorHeader.tsx
│   ├── ItemSelectorList.tsx  # Virtualized item list
│   ├── ItemSelectorRow.tsx   # Single list row
│   ├── ItemSelectorSummary.tsx
│   └── ChipList.tsx
│
├── context/item-selector/    # State management
│   ├── ItemSelectorContext.tsx
│   ├── ItemSelectorReducer.ts
│   ├── ItemSelectorTypes.ts  # Types + constants
│   └── Items.ts
│
├── shared/
│   ├── types/                # Shared TypeScript types
│   └── ui/                   # Reusable UI primitives
│       ├── button/
│       ├── checkbox/
│       ├── chip/
│       ├── dropdown/
│       └── input/
│
└── styles/
    ├── theme.css             # CSS custom properties (colors, typography)
    ├── global.css            # Reset + base styles
    └── widget.css            # Widget-specific styles
```
