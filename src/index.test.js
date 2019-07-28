import { traverseDirectory } from ".";

const TEST_FIXTURE_PATH = "./test/fixtures";
const fixtureAllFiles = [
  "./test/fixtures/somedir/somemodule/somefile.js",
  "./test/fixtures/somedir/somemodule/someotherfile.js",
  "./test/fixtures/somedir2/anotherdir/yet_another_dir/index.js",
  "./test/fixtures/somedir2/anotherdir/index.js",
  "./test/fixtures/somedir2/index.js",
  "./test/fixtures/somedir3/another_file.js"
];
test("traverseDirectory", () => {
  expect(traverseDirectory(TEST_FIXTURE_PATH, TEST_FIXTURE_PATH)).toStrictEqual(fixtureAllFiles);
});
