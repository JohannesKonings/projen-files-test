import { JsonFile, Project } from "projen";

const project = new Project({
  name: "my-project",
});

 
project.defaultTask?.exec('npx tsx .projenrc.ts');

const foo = {
  bar: 123,
  baz: "hello",
};

new JsonFile(project, "foo1.json", {
  readonly: true,
  marker: true,
  obj: foo,
});
new JsonFile(project, "foo2.json", {
  readonly: true,
  marker: false,
  obj: foo,
});
new JsonFile(project, "foo3.json", {
  readonly: false,
  marker: false,
  obj: foo,
});

project.synth();
