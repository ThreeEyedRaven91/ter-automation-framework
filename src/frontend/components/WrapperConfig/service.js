import axios from 'axios';

let changeListeners = [];
let config = null;

const configKey = 'config';

const saveConfig = () => {
  localStorage.setItem(configKey, JSON.stringify(config));
};

const removeConfig = () => {
  localStorage.removeItem(configKey);
};

const addListener = (object) => {
  if (changeListeners.every(item => item !== object)) {
    changeListeners.push(object);
  }
};

const removeListener = (object) => {
  changeListeners = changeListeners.filter(item => item !== object);
};

const setConfig = (config1) => {
  if (config1 === null) {
    removeConfig();
  }
  config = config1;

  if (config && config.token) {
    axios.defaults.headers.common.Authorization = `Bearer ${config.token}`;
  } else {
    axios.defaults.headers.common.Authorization = null;
  }

  saveConfig();
  changeListeners.forEach(l => l(config));
};

const loadConfig = () => {
  try {
    setConfig(JSON.parse(localStorage.getItem(configKey)));
  } catch (error) {
    console.log(error);
  }
};

const getConfig = () => config;

const ServiceConfig = {
  getConfig,
  setConfig,
  addListener,
  removeListener,
  saveConfig,
  loadConfig,
};

export default ServiceConfig;
