const url = ({ url }) => {
  return `cy.visit('${url}');`;
};

const type = ({
  element, last, first, contains,
  text,
}) => {
  return [
    `cy`,
    `.get('${element}')`,
    contains ? `.contains('${contains}')` : '',
    first ? '.first()' : '',
    last ? '.last()': '',
    `.type('${text.replace(/\n/g, "\\n")}');`,
  ].join('');
};

const click = ({
  element, last, first, contains,
}) => {
  return [
    `cy`,
    `.get('${element}')`,
    contains ? `.contains('${contains}')` : '',
    first ? '.first()' : '',
    last ? '.last()': '',
    `.click();`,
  ].join('');
};

const wait = ({
  element, contains,
  timeout,
}) => {
  return [
    `cy`,
    element ? `.wait('${element}')` : '',
    timeout ? `.wait(${timeout})` : '',
    contains ? `.contains('${contains}')` : '',
    `;`,
  ].join('');
};

const steps = {
  url,
  type,
  click,
  wait,
};

export default steps;