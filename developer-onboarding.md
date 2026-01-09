# Cambio Compass: Developer Onboarding

## 1. Understand What This Is
Cambio Compass is a React + TypeScript web app that matches NYC entrepreneurs to business support programs based on a short survey. Users answer questions about their business stage, industry, demographics, and needs. Then, get a ranked list of recommended resources.

## 2. Read These First
| Document | What It Covers |
|----------|----------------|
| [Compass Matchmaking Logic](https://docs.google.com/document/d/1j3qLl2cSXy_kbQMR34KsnFWj5E4ARz1CXOpCRcSuiAM/) | The general matchmaking logic of compass |
| [Compass Resource Pool](https://docs.google.com/spreadsheets/d/1pfs2TlK7rdg22afjs39cnZe5QT41_KysafOhKfWz0I0/) | Spreadsheet of all programs Compass can recommend — eligibility criteria and who the program is seeking are defined here.  |
| `README.md` | Project overview, tech stack, installation steps, project structure, and deployment instructions |
| `matchmaking-logic.md` | How the matching algorithm works — eligibility filtering, scoring, and ranking |

## 3. Set Up Locally
```bash
git clone https://github.com/Cambio-Labs/cambio-compass.git
cd cambio-compass
npm install
npm run dev
```
Open `http://localhost:3000` in a browser.

## 4. Key Files to Review
| File | Purpose |
|------|---------|
| `src/constants.tsx` | Survey questions and program data. This is a hardcoded version of the Resource Pool Spreadsheet |
| `src/types.ts` | TypeScript type definitions |
| `src/services/matchingEngine.ts` | The core matching algorithm |
| `src/components/Wizard.tsx` | The survey UI |
| `src/components/Results.tsx` | The results display |

## 5. Understand the Matching Logic
1. **Eligibility Check** — Programs are filtered out if the user doesn't meet hard requirements (e.g., NYCHA residency, business registration)
2. **Scoring** — Remaining programs are scored based on preference matches (stage, industry, resource type)
3. **Ranking** — Programs are sorted by score; highest becomes "Top Recommendation"

See `matchmaking-logic.md` for full details and a link to the program requirements spreadsheet.

## 6. Deploy Changes
```bash
npm run deploy
```
This builds the app and pushes to the `gh-pages` branch.
