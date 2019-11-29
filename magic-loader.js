const utils = require('loader-utils');

module.exports = function(code) {
  const { appName, appConfig } = utils.getOptions(this);
  const { importName, dirName } = appConfig[appName];

  const importStmt = `import ${importName} from "./apps/${dirName}"`;
  const routeStmt = `<Route path="/${dirName}" component={${importName}} />`;
  code = code.replace(/\/\/ {{import-placeholder-for-apps}}/, importStmt);
  code = code.replace('{/* {routes} */}', routeStmt);

  return code;
};
