import fs from 'fs';

const Config = {};
const configPath = ".ter/automation-framework/config.json";

if (fs.existsSync(configPath)) {
  const configContent = fs.readFileSync(configPath, 'utf8');
  const config = JSON.parse(configContent);
  Config.content = config;
}

export default Config;