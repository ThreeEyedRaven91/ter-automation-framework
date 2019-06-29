import fs from 'fs';
import path from 'path';
import dot from 'dot';
import baseStep from './base_step';
import stringTemplate from 'string-template';

const convertStep = (step, modulePath) => {
  if (step.type in baseStep) {
    return [baseStep[step.type](step)];
  } else {
    return convertModule(step, modulePath);
  }

  return '';
};

const convertModule = (module, modulePath) => {
  const moduleFilePath = path.join(modulePath, `${module.type}.json`);
  if (fs.existsSync(moduleFilePath)) {
    const moduleContent = fs.readFileSync(moduleFilePath, 'utf-8');
    const moduleTemplate = JSON.parse(moduleContent);

    const moduleSteps = moduleTemplate.steps;
    return moduleSteps.reduce((result, step) => {
      const newStep = Object.keys(step).reduce((result, key) => {
        result[key] = stringTemplate(step[key], module);
        return result;
      }, {});

      return [...result, ...convertStep(newStep, modulePath)];
    }, []);
  }

  return [];
};

const convertCase = ({ input, modulePath }) => {
  const templatePath = path.join(__dirname, 'template/index.template');
  if (fs.existsSync(templatePath)) {
    const content = fs.readFileSync(templatePath, 'utf-8');
    const template = dot.template(content, {
      ...dot.templateSettings,
      strip: false,
    });
    const convertedSteps = input.steps.reduce((result, step) => {
      return [...result, ...convertStep(step, modulePath)];
    }, []);

    return template({
      ...input,
      convertedSteps,
    });
  }

  return null;
};

const ConverterDetox = {
  convertCase,
};

export default ConverterDetox;
