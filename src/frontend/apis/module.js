import axios from 'axios';

const get = () => axios.get('/api/module');
const getByPath = (path) => axios.get(`/api/module/byPath?path=${path}`);

const updateTitle = ({ path, title }) => axios.put(`/api/module/updateTitle?path=${path}`, {
  title,
});

const template = {
  get,
  getByPath,
  updateTitle,
};

export default template;