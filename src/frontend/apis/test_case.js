import axios from 'axios';

const get = () => axios.get('/api/test_case');
const getByPath = (path) => axios.get(`/api/test_case/byPath?path=${path}`);

const testCase = {
  get,
  getByPath,
};

export default testCase;