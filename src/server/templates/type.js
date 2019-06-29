export default {
  elements: [
    {
      type: 'select',
      options: [
        { label: "click", value: "click" },
        { label: "type", value: "type" },
        { label: "wait", value: "wait" },
      ],
      input_key: 'type',
      title: 'Type',
      id: 'select_type',
      col: 2,
      vertical: true,
    },
    {
      type: 'input',
      input_key: 'element',
      title: 'Element',
      id: 'tf_element',
      col: 2,
      vertical: true,
    },
    {
      type: 'input',
      input_key: 'contains',
      title: 'Contains',
      id: 'tf_contains',
      col: 2,
      vertical: true,
    },
    {
      type: 'input',
      input_key: 'timeout',
      title: 'Timeout',
      id: 'tf_timeout',
      col: 2,
      vertical: true,
    },
  ],
};
