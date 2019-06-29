const type = ({ element, text, contains }) => {

  return [
    `await `,
    element ? `element(by.id('${element}'))` : `element(by.text('${contains}'))`,
    `.replaceText('${text.replace(/\n/g, "\\n")}');`,
  ].join('').replace('\\', "\\\\");
};

const click = ({ element, contains }) => {
  return [
    `await `,
    element ? `element(by.id('${element}'))` : `element(by.text('${contains}'))`,
    `.tap();`,
  ].join('').replace('\\', "\\\\");;
};

const wait = ({ element, contains, timeout }) => {
  return [
    `await `,
    element ? `waitFor(element(by.id('${element}')))` : `waitFor(element(by.text('${contains}')))`,
    `.toBeVisible()`,
    timeout ? `.withTimeout(${timeout})` : '',
    ';'
  ].join('').replace('\\', "\\\\");;
};

const scrollUntil = ({ element, contains, scroll, direction = "down" }) => {
  return [
    `await `,
    element ? `waitFor(element(by.id('${element}')))` : `waitFor(element(by.text('${contains}')))`,
    `.toBeVisible()`,
    `.whileElement(by.id('${scroll}'))`,
    `.scroll(200, '${direction}');`,
  ].join('').replace('\\', "\\\\");;
};

const swipe = ({ element, contains, direction = "down" }) => {
  return [
    `await `,
    element ? `element(by.id('${element}'))` : `element(by.text('${contains}'))`,
    `.swipe('${direction}');`,
  ].join('').replace('\\', "\\\\");;
};

const steps = {
  type,
  click,
  wait,
  scrollUntil,
  swipe,
};

export default steps;