# Accounting App

Professional accounting application for small businesses.

## Structure

```
packages/
├── desktop/        # Electron + React UI
├── server/         # Express backend
├── shared/         # Shared types & utilities
└── db/            # Database schemas & migrations
```

## Setup

```bash
npm install
npm run dev
```

## Development

- `npm run dev` - Start all apps in development mode
- `npm run build` - Build all packages

## TODO

- [ ] Database setup (SQLite/PostgreSQL)
- [ ] Migrations
- [ ] API endpoints
- [ ] UI pages
