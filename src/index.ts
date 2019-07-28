import { readdirSync } from "fs";
import { getLogger } from "./util/logger";

const { info } = getLogger("index");

/**
 * Walks through all files at the given path, i.e recurses into all
 * sub directories and returns the files that exist
 * @param path path string
 */
export const traverseDirectory = (path: string): string[] => {
  info(`Was called with ${path}`);

  const allEntitiesInDirectory = readdirSync(path, { withFileTypes: true });

  const subDirectoriesInThisDirectory = allEntitiesInDirectory
    .filter(entity => entity.isDirectory())
    .map(subDir => `${path}/${subDir.name}`);

  const filesInThisDirectory = allEntitiesInDirectory
    .filter(entity => entity.isFile())
    .map(file => `${path}/${file.name}`);

  // recurse into subdirectories and join results in a flat array
  const filesInSubdirectories = subDirectoriesInThisDirectory.map(traverseDirectory).flat();
  return [...filesInSubdirectories, ...filesInThisDirectory];
};

export default traverseDirectory;
