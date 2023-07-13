import fs from 'fs';

export const getFiles = (entry, extensions = [], excludeExtensions = []) => {
  let fileNames = [];
  const dirs = fs.readdirSync(entry);

  dirs.forEach((dir) => {
    if (excludeExtensions.some((exclude) => dir.includes(exclude))) return;
    const path = `${entry}/${dir}`;

    if (fs.lstatSync(path).isDirectory()) {
      fileNames = [...fileNames, ...getFiles(path, extensions, excludeExtensions)];

      return;
    }

    if (!excludeExtensions.some((exclude) => dir.includes(exclude)) && extensions.some((ext) => dir.endsWith(ext))) {
      fileNames.push(path);
    }
  });

  return fileNames;
};
