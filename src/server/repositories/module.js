import fs from 'fs';
import path from 'path';
import Helper from "../../helpers";

const get = ({ sourcePath = '/' } = {}) => {
  const { module_folder: moduleFolder } = Helper.config.content;
  const subFiles = fs.readdirSync(path.join(moduleFolder, sourcePath));

  let result = [];
  for (let i = 0; i < subFiles.length; i ++) {
    const subFile = subFiles[i];
    const subFilePath = path.join(sourcePath, subFile);
    if (fs.lstatSync(path.join(moduleFolder, subFilePath)).isDirectory()) {
      result = [...result, ... get({ sourcePath: subFilePath })];
    } else {
      const fileContent = getByPath({ sourcePath: subFilePath });
      result.push({
        name: fileContent.title,
        path: subFilePath,
        content: fileContent,
      });
    }
  }

  return result;
};

const getByPath = ({ sourcePath }) => {
  const { module_folder: moduleFolder } = Helper.config.content;
  const searchPath = path.join(moduleFolder, sourcePath);
  const sourceString = fs.readFileSync(searchPath, 'utf-8');
  return JSON.parse(sourceString);
};

const saveByPath = ({ sourcePath, content }) => {
  const { module_folder: moduleFolder } = Helper.config.content;
  const savePath = path.join(moduleFolder, sourcePath);
  fs.writeFileSync(savePath, JSON.stringify(content, null, 2));
};

const updateTitle = ({ sourcePath, title }) => {
  const content = getByPath({ sourcePath });
  content.title = title;
  saveByPath({ sourcePath, content });
}

const ModuleRepository = {
  get,
  getByPath,
  updateTitle,
};

export default ModuleRepository;