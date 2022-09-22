// Этот script запускается автоматически каждый раз перед запуском сторибука

const path = require('path');
const fse = require('fs-extra');
const metadata = require('@admiral-ds/icons/metadata.json');

const generateReactExportFile = () => {
  Object.keys(metadata).forEach((category) => {
    const exportFileName = path.resolve('src/icons', `IconComponents-${category}.ts`);

    if (!fse.existsSync(exportFileName)) {
      fse.createFileSync(exportFileName);
    }

    const exportFileContent = metadata[category]
      .map(({ name, path }) => `export { ReactComponent as ${name} } from '@admiral-ds/icons/${path}';`)
      .concat(['']) // add empty lane at the file end
      .join('\n');

    fse.writeFileSync(exportFileName, exportFileContent);
  });
};

generateReactExportFile();
