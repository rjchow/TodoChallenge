import { traverseDirectory, fileHasTodo, displayTodos } from "./index";

const E2E_TEST_FIXTURE_PATH = "./test/fixtures/e2e";
const fixtureE2e = [
  "./test/fixtures/e2e/somedir/somemodule/noTodo.js",
  "./test/fixtures/e2e/somedir/somemodule/somefile.js",
  "./test/fixtures/e2e/somedir/somemodule/someotherfile.js",
  "./test/fixtures/e2e/somedir2/anotherdir/yet_another_dir/index.js",
  "./test/fixtures/e2e/somedir2/anotherdir/yet_another_dir/noTodo.js",
  "./test/fixtures/e2e/somedir2/anotherdir/index.js",
  "./test/fixtures/e2e/somedir2/index.js",
  "./test/fixtures/e2e/somedir3/another_file.js"
];
test("traverseDirectory", () => {
  expect(traverseDirectory(E2E_TEST_FIXTURE_PATH)).toStrictEqual(fixtureE2e);
});

const TEST_HAS_TODO_PATH = "./test/fixtures/hasTodo";

test("fileHasTodo", () => {
  expect(fileHasTodo(`${TEST_HAS_TODO_PATH}/hasTodo.js`)).toBe(true);
  expect(fileHasTodo(`${TEST_HAS_TODO_PATH}/hasNoTodo.js`)).toBe(false);
});

test("displayTodo", () => {
  displayTodos(E2E_TEST_FIXTURE_PATH);
});
