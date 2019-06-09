import fs from 'fs';
import path from 'path';

const convert = ({ inputPath, outputPath, modulePath, converter }) => {
  const cwd = process.cwd();
  const inputFilePath = path.join(cwd, inputPath);
  const outputFilePath = path.join(cwd, outputPath);

  const isDir = fs.lstatSync(inputPath).isDirectory();
  if (isDir) {
    const children = fs.readdirSync(inputPath);
    if (!fs.existsSync(outputFilePath)) {
      fs.mkdir(outputFilePath);
    }

    children.map(child => {
      if (child.indexOf('.test.json') !== false) {
        const childInputPath = path.join(inputPath, child);
        const childOutputPath = path.join(outputPath, child).replace('.json', '.js');

        convert({
          inputPath: childInputPath,
          outputPath: childOutputPath,
          modulePath,
          converter,
        });
      }
    });
  }
  else {
    const inputString = fs.readFileSync(inputFilePath).toString();
    const input = JSON.parse(inputString);

    const output = converter.convertCase({
      input,
      modulePath,
    });

    fs.writeFileSync(outputFilePath, output);
  }
};

const Convert = {
  convert,
};

export default Convert;