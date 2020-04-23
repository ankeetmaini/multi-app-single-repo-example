# multiple repos together - like a boss!

> boilerplate taken from https://github.com/rokoroku/react-redux-typescript-boilerplate and trimmed down heavily.

## How to use it?

After cloning the repo and installing dependencies, you can create the build of any particular application inside the `src` folder by:

```
npm run build -- --appName real-1
```

`real-1` is the name of the application. You can replace it with your application name created inside the `src` folder.

## How things are working?

Inside your `webpack.config.js` file at your root directory, we are catching the cli aruments using [yargs](https://www.npmjs.com/package/yargs) package.

```
var webpack = require('webpack');
var path = require('path');
var package = require('./package.json');
const argv = require('yargs').argv;
const appConfig = require('./config.json');

const { appName } = argv;

if (!appName) throw new Error('What are you trying to build?? Plisss send --appName');
```

By using ES6 destructuring method, we storing the name in a variable `appName`.

If you won't give any name in the cli, you'll get the error we are handling that case here:

```
if (!appName) throw new Error('What are you trying to build?? Plisss send --appName');
```

Once we get the name of the application in `appName` variable, we are passing the variable in the file at the root directory `magic-loader.js`.
See the code snippet below inside the `webpack.config.js` file:

```
      {
        test: path.resolve(sourcePath, 'app.js'),
        loader: path.resolve(sourcePath, '..', 'magic-loader.js'),
        options: { appName, appConfig }
      },
```

## Inside App.js file

As you can see, that our root file below contains some comments. These are the comments which we will replace utilizing `appName` coming from the cli.

```
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import-starts
// {{import-placeholder-for-apps}}
// emport-ends

const App = () => <Switch>{/* {routes} */}</Switch>;

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

```

## magic-loader.js file

Inside `magic-loader.js` we are using the appName to create our routes.
We are passing `App.js` file's code as an argument to the function inside `magic-loader.js`, where we are replacing the comments in the `App.js` file with actual routes created by using the `appName` coming from the cli.

```
const utils = require('loader-utils');

module.exports = function(code) {
  console.log('code : ', code);
  const { appName, appConfig } = utils.getOptions(this);
  const { importName, dirName } = appConfig[appName];

  const importStmt = `import ${importName} from "./apps/${dirName}"`;
  const routeStmt = `<Route path="/${dirName}" component={${importName}} />`;
  code = code.replace(/\/\/ {{import-placeholder-for-apps}}/, importStmt);
  code = code.replace('{/* {routes} */}', routeStmt);

  return code;
};
```

##### And That's it. :)
