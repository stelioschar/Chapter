import { chain, Rule } from "@angular-devkit/schematics";
import { addDepsToPackageJson, updateJsonInTree } from "@nrwl/workspace";

interface SchematicOptions {
  name: string;
}

export default function (_schema: SchematicOptions): Rule {
  const dependencies: unknown[] = [];
  const devDependencies = [{ cosway: "*" }];
  const shouldTriggerInstallTask = true;

  return chain([
    addDepsToPackageJson(dependencies, devDependencies, shouldTriggerInstallTask),
    updateJsonInTree("package.json", (json) => {
      json.scripts.info = "cosway";
      return json;
    }),
  ]);
}
