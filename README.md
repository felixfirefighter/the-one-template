# The One Template

## Development

### Prerequisite

1. NodeJS 18 - https://nodejs.org/en
2. PNPM - https://pnpm.io/
3. Turbo CLI - https://turbo.build/repo/docs/reference/command-line-reference
4. Fill up all the environment variables in `.env` file using `.env.template` as the template

### Apps and Packages

#### Apps

`web`: The main website for the template

#### Packages

`@the-one/api`: API routers for apps \
`@the-one/database`: Schema and seed files powered by Prisma \
`@the-one/eslint-config`: Collection of internal eslint configurations \
`@the-one/typescript-config`: Collection of internal Typescript configurations \
`@the-one/ui`: Shared UI components \

### Commit changes

We use `git cz` to help us construct more meaningful commit messages.
Use the following commands whenever you want to commit changes

```
git add .
git cz
```

## Workstation

### Extensions

`Better Comments`: Improve your code commenting by annotating with alert, informational, TODOs, and more! \
`CSS Modules`: Visual Studio Code extension for CSS Modules \
`ESLint`: Integrates ESLint JavaScript into VS Code. \
`Prettier`: Code formatter using prettier \
`Prisma`: Adds syntax highlighting, formatting, auto-completion, jump-to-definition and linting for .prisma files.

### Core Dependencies

[Turborepo](https://turbo.build/): TypeScript monorepo  \
[Prisma](https://www.prisma.io/): TypeScript ORM for accessing DB \
[tRPC](https://trpc.io/): Typesafe API \
[Mantine](https://mantine.dev/): Fully featured React component library