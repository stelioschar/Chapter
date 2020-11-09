const CommitlintConfig = {
  rules: {
    "type-case": () => Promise.resolve([2, "always", "lower-case"]),
    "type-enum": () =>
      Promise.resolve([2, "always", ["feat", "fix", "refactor", "revert", "chore"]]),
    "scope-case": () => Promise.resolve([2, "always", "upper-case"]),
    "scope-enum": () =>
      Promise.resolve([2, "always", ["PACKAGES", "LIBRARIES", "BUILD", "DOCS", "CI"]]),
    "subject-case": () => Promise.resolve([2, "always", ["upper-case"]]),
  },
  extends: ["@commitlint/config-conventional"],
  parserPreset: {
    headerCorrespondence: ["type", "scope", "ticket", "subject"],
  },
};

module.exports = CommitlintConfig;
