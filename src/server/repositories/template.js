import templates from '../templates';
import { ModuleRepository } from './index';

const get = () => {
  const modules = ModuleRepository.get();

  return {
    ...modules.reduce((result, module) => {
      result[module.path.replace('.json', '')] = templateFromModule(module);
      return result;
    }, {}),
    ...templates,
  };
};

const templateFromModule = (module) => {
  const elements = [];

  if (module.content && module.content.input && module.content.input.length) {
    for (let i = 0; i < module.content.input.length; i ++) {
      const input = module.content.input[i];
      elements.push({
        type: 'input',
        input_key: input.key,
        title: input.key,
        id: `tf_${input.key}`,
        col: 2,
        vertical: true,
      });
    }
  }

  return {
    elements,
  }
};

const TemplateRepository = {
  get,
};

export default TemplateRepository;