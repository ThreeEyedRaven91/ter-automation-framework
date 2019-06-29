import axios from 'axios';

const get = () => axios.get('/api/template');

const template = {
  get,
};

export default template;