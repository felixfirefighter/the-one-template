# The One Template

## Workstation

### VSC

#### Extensions

##### Better Comments

Description: Improve your code commenting by annotating with alert, informational, TODOs, and more!
Publisher: Aaron Bond

##### CSS Modules

Description: Visual Studio Code extension for CSS Modules
Publisher: clinyong

##### ESLint

Description: Integrates ESLint JavaScript into VS Code.
Publisher: Microsoft

##### Prettier - Code formatter

Description: Code formatter using prettier
Publisher: Prettier

##### Prisma

Description: Adds syntax highlighting, formatting, auto-completion, jump-to-definition and linting for .prisma files.
Publisher: Prisma

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
