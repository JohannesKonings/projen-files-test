import { Component, Project, SourceCode } from "projen";
import { rmSync } from "node:fs";
import { join } from "node:path";

export class ComponentCleanupReadonlyFalse extends Component {
  constructor(scope: Project) {
    super(scope);

    this.project.files.forEach((file) => {
      file.node.addMetadata("readonly", file.readonly);
    });

    const taskCleanupReadonlyFalse = this.project.addTask(
      "cleanup-readonly-false",
      {
        exec: "./cleanup-non-readonly-files.sh",
      }
    );
    this.project.defaultTask?.prependSpawn(taskCleanupReadonlyFalse);
  }
}
