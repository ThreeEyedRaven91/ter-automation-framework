const url = ({ url }) => {
  return `cy.visit('${url}');`;
};

const type = ({ element, text }) => {
  return `cy.get('${element}').type('${text}');`;
};

const click = ({ element }) => {
  return `cy.get('${element}').click();`;
};

const steps = {
  url,
  type,
  click,
};

export default steps;