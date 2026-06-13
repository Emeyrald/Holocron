# Holocron — Project Roadmap

> A beautiful, fully-searchable Star Wars encyclopedia for ships — backed by a real database and deployed publicly.

---

## Initiative 1 — Content Expansion

### Epic: Ships *(in progress)*
- [x] Ship detail pages `/ships/[id]`
- [ ] Filter by affiliation / class
- [ ] Sort by name, length, crew size

---

## Initiative 2 — Full-Stack Architecture

### Epic: Switch from static export to dynamic rendering
- [ ] Remove `output: "export"` from `next.config.ts`

### Epic: Database + ORM
- [ ] Create Neon project with `main` (prod) and `dev` branches
- [ ] Add Prisma as the ORM
- [ ] Migrate hardcoded data from `ships.ts` into the database
- [ ] Write seed scripts (data hand-crafted, not from external API)

### Epic: API Routes
- [ ] `GET /api/ships` — list with optional `?search=` and `?affiliation=` query params
- [ ] `GET /api/ships/[id]`

---

## Initiative 3 — User Experience & Design

### Epic: Visual Polish
- [ ] Faction color coding (Rebel gold, Imperial red, Republic blue)
- [ ] Empty state when search returns no results
- [ ] Loading skeletons while data fetches
- [ ] Smooth page transitions

### Epic: Detail Page Quality
- [ ] Consistent detail page layout across all cards
- [ ] Related section (e.g. "Characters who flew this ship")

---

## Initiative 4 — Technical Quality

### Epic: Testing
- [ ] Unit tests for utility functions with Vitest
- [ ] Component tests with React Testing Library
- [ ] At least one integration test hitting an API route

### Epic: CI/CD
- [ ] GitHub Actions workflow: `tsc --noEmit`, lint, and tests on every push
- [ ] Passing CI badge in README

### Epic: Code Quality
- [ ] Prettier for consistent formatting
- [ ] Husky pre-commit hook to run lint before commits

---

## Initiative 5 — Deployment & Visibility

### Epic: Deploy *(mostly done)*
- [x] Deploy to Vercel (GitHub auto-deploy on push already configured)
- [ ] Provision PostgreSQL via Neon — create `main` (prod) + `dev` branches; connect to Vercel via marketplace integration
- [ ] Add local `.env` with `DATABASE_URL` pointing to Neon dev branch

### Epic: README
- [ ] Project description and screenshot/GIF of the UI
- [ ] Tech stack badges
- [ ] Link to live site
- [ ] Brief explanation of architecture decisions
- [ ] "Running locally" instructions

---

## Future Considerations *(out of scope for now)*
- Favorites / bookmarks (localStorage or auth + DB)
- Additional categories: planets, characters, vehicles, creatures, weapons, etc.
- Ship / character comparison feature
- User accounts (NextAuth)
