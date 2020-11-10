# Chpater

Chapter is an example repo, that demonstrates the effects and capabilities of Nx. We will use Nx, to create:

| Types                | Number | Status |
| -------------------- | ------ | ------ |
| React Application    | 2      | ✅     |
| React Libraries      | 1      | ✅     |
| Typescript Libraries | 1      | ✅     |
| NextJS Website       | 2      | ✅     |
| NestJS Backend       | 1      | ✅     |
| Express Backend      | 1      | ✅     |
| Golang Backend       | 1      | ✅     |
| Python Backend       | 1      | ✅     |
| Kotlin Backend       | 1      | ⚠️     |

On top of that we will create some custom schematics, which will allow us to create Applications and Libraries exactly
the way we want to.

## Git Workflow

On each Git Commit, we do the following. Meaning, that following a normal git workflow, of `git add .` and `git commit -m ""`",
the following actions will be triggered:

- Lint the affected branches in parallel.
- Format the affected branches in parallel
- Test the affected branches with a max parallelization of 5.

Keep in mind that we are using `commitlint`, with some custom `Rules` and `Plugins`. That restrics our Commit Messages.
Here you can find a few examples, of GOOD vs BAD Commits:

| Commit Messages                         | Status |
| --------------------------------------- | ------ |
| feat(PACKAGES): CHAPTER-1/ FIX AN ISSUE | ✅     |
| fix(BUILD): CHAPTER-1/ FIX AN ISSUE     | ✅     |
| feat(packages): Chapter-1: Fix an issue | ⛔     |
| fix(build): CHAPTER-1/ Fix an issue     | ⛔     |

## Workspace Layout

The Top Level Workspace structure, is defined in `nx.json` file, under the `workspaceLayout` property.

```json
"workspaceLayout": {
    "appsDir": "Packages",
    "libsDir": "Libraries"
}
```

## Workflow Tips & Tricks

Nx, provides commands that makes our Development lifecycle, easier. Commands that `Create App, Libs, Components`,
and commands for running projects faster, without the need for documenations.

> 👨🏻‍💻 Remember, that your single source of truth in an Nx Monorepo is the `workspace.json`. And it should always be in sync with `nx.json`.

| Commit Messages                                                                                                          | Description                   |
| ------------------------------------------------------------------------------------------------------------------------ | ----------------------------- |
| `yarn nx generate @nrwl/react:application --name=AppName --directory=DirName --pascalCaseFiles=true --routing=true`      | Generates a React Application |
| `yarn nx generate @nrwl/react:library --name=LibName --directory=DirName --pascalCaseFiles=true --routing=false`         | Generates a React Library     |
| `yarn nx generate @nrwl/react:component --name=ComponentName --project=ProjectName --pascalCaseFiles=true routing=false` | Generates a React Component   |

> 👨🏻‍💻 Remember, that every command comes with 2 standard flags. To invode CLI Help just append `--help` and to see the output without making any changes append `--dry-run`.

## Feature Driven Development(FDD)

The Applications and Libraries Folders were designed to follow the 5 STEP Rule, that FDD promotes. That means, that 20%-30% of our dode will live
in Packages, and around 70%-80% of our code will be placed under Libraries.

That has a lot of advantages. From our CI processes running quicker and effectively to our Dev processes. You can read more about FDD in this [link](https://www.productplan.com/glossary/feature-driven-development/)
