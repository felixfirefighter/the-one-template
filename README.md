# The One Template

## TODO

### Template

- Add API package
- Add auth using `next-auth`
- Add Redis using Upstash (optional)
- Add session to context
- Add adminProcedure, protectedProcedure
- Add The One UI for web

## Development

### Project structure

### Apps / Packages

#### Generate new app / package

Make sure you have `turbo` installed (https://turbo.build/repo/docs/installing)

```
turbo gen workspace
```

#### Add package to a workspace

```
pnpm add <package> --filter <workspace>
```

### Commit changes

We use `git cz` to help us construct more meaningful commit messages.
Use the following commands whenever you want to commit changes

```
git add .
git cz
```

### Make changes to Database Schema

1. Make changes in `schema.prisma`.
2. Create a new branch on PlanetScale (https://app.planetscale.com/)
3. You should get a new `DATABASE_URL` from PlatnetScale. Update the `DATABASE_URL` in `.env` file.
4. Run `pnpm db:generate` then `pnpm db:push` to push schema change to your PlatnetScale branch.
5. Go back to PlatnetScale to create a Deploy Request for your branch
6. Merge it to `main` branch

Note: When you change `DATABASE_URL` to your branch's `DATABASE_URL`, you are essentially getting a new database so that you have a isolated database to play around with. Remember to switch back the original `DATABASE_URL` after merging to `main` branch if you want to play with existing data instead.

## Workstation

### VSC

#### Extensions

##### Better Comments

Improve your code commenting by annotating with alert, informational, TODOs, and more!

##### CSS Modules

Visual Studio Code extension for CSS Modules

##### ESLint

Integrates ESLint JavaScript into VS Code.

##### Prettier - Code formatter

Code formatter using prettier

##### Prisma

Adds syntax highlighting, formatting, auto-completion, jump-to-definition and linting for .prisma files.
