import { readdirSync } from "fs";
import { getLogger } from "./util/logger";

const { trace } = getLogger("sayHello");

/**
 * Walks through all files at the given path, i.e recurses into all
 * sub directories and returns the files that exist
 * @param path path string
 */
export const traverseDirectory = (path: string): string[] => {
  let listOfFiles: string[] = [];
  trace(`Was called with ${path}`);

  const entitiesInDirectory = readdirSync(path, { withFileTypes: true });
  trace(`Entities:${path}: entitiesInDirectory`);
  const subDirectories = entitiesInDirectory.filter(entity => entity.isDirectory());

  const subDirectoriesPaths = subDirectories.map(subDir => subDir.name).map(dirName => [path, dirName].join("/"));

  // recursion into subdirectories
  const filesInSubdirectories = subDirectoriesPaths.map(subDirectoryPath => traverseDirectory(subDirectoryPath));
  listOfFiles = listOfFiles.concat(...filesInSubdirectories);

  const files = entitiesInDirectory.filter(entity => entity.isFile());
  trace("Files:", files);

  listOfFiles = listOfFiles.concat(files.map(file => [path, file.name].join("/")));

  trace(`Current list at ${path}: ${listOfFiles}`);
  return listOfFiles;
};

export default traverseDirectory;
