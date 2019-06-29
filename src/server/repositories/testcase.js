import fs from 'fs'
import path from 'path';
import Helper from '../../helpers';

const get = ({ sourcePath = '/' }) => {
  const { input_folder: inputFolder } = Helper.config.content;
  const subFiles = fs.readdirSync(path.join(inputFolder, sourcePath));

  const result = [];
  for (let i = 0; i < subFiles.length; i ++) {
    const subFile = subFiles[i];
    const subFilePath = path.join(sourcePath, subFile);
    if (fs.lstatSync(path.join(inputFolder, subFilePath)).isDirectory()) {
      result.push({
        name: subFile,
        path: subFile,
        subFiles: get({ sourcePath: subFilePath }),
      });
    } else {
      const fileContent = getByPath({ sourcePath: subFilePath });
      result.push({
        name: fileContent.title,
        path: subFile,
        numSteps: fileContent.steps && fileContent.steps.length,
      });
    }
  }

  return result;
};

const getByPath = ({ sourcePath }) => {
  const { input_folder: inputFolder } = Helper.config.content;
  const searchPath = path.join(inputFolder, sourcePath);
  const sourceString = fs.readFileSync(searchPath, 'utf-8');
  return JSON.parse(sourceString);
};

const TestCaseRepository = {
  get,
  getByPath,
};

export default TestCaseRepository;