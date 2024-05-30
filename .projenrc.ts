import { JsonFile, Project } from "projen";

const project = new Project({
  name: "my-project",
});

 
project.defaultTask?.exec('npx tsx .projenrc.ts');

const foo = {
  bar: 123,
  baz: "hello",
};

new JsonFile(project, "foo3.json", {
  readonly: false,
  marker: false,
  obj: foo,
});

project.synth();
