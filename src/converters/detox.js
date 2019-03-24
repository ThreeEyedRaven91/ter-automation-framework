const convertStep = {
  tap: (step) => `await ${convertElement(step)}.tap();`,
  replaceText: (step) => `await ${convertElement(step)}.replaceText('${step.value}');`,
  wait: (step) => `await waitFor(${convertElement(step)}).toBeVisible().withTimeout(${step.timeout || 5000});`,
  scroll: (step) => `await ${convertElement(step)}.scroll(${step.pixel}, '${step.direction || 'down'}');`,
  swipe: (step) => `await ${convertElement(step)}.swipe(${step.direction}, 'fast', 0.8);`,
  scrollUntil: (step) => `await waitFor(${convertElement(step)}).toBeVisible().whileElement(by.id('${step.scroll}')).scroll(200, '${step.direction || 'down'}');`,
  expect: (step) => `await ${convertElement(step)}.toBeVisible();`,
};

const convertElement = (step) => {
  if (step.by_id) {
    return `element(by.id('${step.by_id}'))`;
  }
  if (step.by_text) {
    return `element(by.text('${step.by_text}'))`;
  }
};

const convertCase = (testcase) => {
  const { title, steps } = testcase;
  const stepString = steps.map(step => {
    const { type } = step;
    if (convertStep[type]) {
      const output = convertStep[type](step).replace(/\n/g, '\\n');
      return `    ${output}`
    }
    return false;
  }).filter(i => i).join('\n');

  return `describe('${title}', () => {
  it('${title}', async () => {
${stepString}
  });
});`;
};

const ConverterDetox = {
  convertCase,
};

export default ConverterDetox;
