import { JsonFile, Project, ProjectTree } from "projen";
import { ComponentCleanupReadonlyFalse } from "./componentCleanupReadonlyFalse";

const project = new Project({
  name: "my-project",
});

project.defaultTask?.exec("npx tsx .projenrc.ts");

const foo = {
  bar: 123,
  baz: "hello",
};

const jsonFileFoo1 = new JsonFile(project, "foo1.json", {
  readonly: true,
  marker: true,
  obj: foo,
});
// jsonFileFoo1.node.addMetadata("readonly", jsonFileFoo1.readonly);

const jsonFileFoo2 = new JsonFile(project, "foo2.json", {
  readonly: true,
  marker: false,
  obj: foo,
});
// jsonFileFoo2.node.addMetadata("readonly", jsonFileFoo2.readonly);

const jsonFileFoo3 = new JsonFile(project, "foo3.json", {
  readonly: false,
  marker: false,
  obj: foo,
});
// jsonFileFoo3.node.addMetadata("readonly", jsonFileFoo3.readonly);

const jsonFileFoo4 = new JsonFile(project, "foo4.json", {
  readonly: false,
  marker: true,
  obj: foo,
});
// jsonFileFoo4.node.addMetadata("readonly", jsonFileFoo4.readonly);

const jsonFileFoo5 = new JsonFile(project, "folder/foo5.json", {
  readonly: false,
  marker: true,
  obj: foo,
});

new ComponentCleanupReadonlyFalse(project);

// const taskCleanupReadonlyFalse = project.addTask("cleanup-readonly-false", {
//   exec: "./cleanup-non-readonly-files.sh",
// });
// project.defaultTask?.prependSpawn(taskCleanupReadonlyFalse);

new ProjectTree(project);

project.synth();
