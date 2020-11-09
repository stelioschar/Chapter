# Chpater

Chapter is an example repo, that demonstrates the effects and capabilities of Nx. We will use Nx, to create:

| Types                | Number | Status |
| -------------------- | ------ | ------ |
| React Application    | 2      | ⚠️     |
| React Libraries      | 1      | ✅     |
| Typescript Libraries | 1      | ✅     |
| NextJS Website       | 2      | ✅     |
| NestJS Backend       | 1      | ✅     |
| Golang Backend       | 1      | ✅     |
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
