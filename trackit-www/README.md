## Running
* yarn serve:dev - for webpack dev server
* yarn serve:prod - for production build (uses live-server)
* yarn build:dev - for dev build test
* yarn build:prod - production build
* yarn start - to start express server

## Folder Structure
* public - for web app
  * dist - build target folder
  * images - images
  * index.html - entry file
* server - server side code
* src - source code

## Submodules [help](http://www.vogella.com/tutorials/GitSubmodules/article.html)
* ```git submodule status``` lists existing submodules
* ```git submodule add -b master [URL to GIT repo] [LOCAL PATH]```
* ```git submodule init``` register for observing changes
* ```git submodule deinit [-f] [--all] [LocalPath]```
* ```git submodule update --remote``` fetch updates from remote


## Packages Used
* yarn add babel-core babel-loader babel-preset-react babel-preset-env babel-preset-stage-2
* yarn add react react-dom react-router-dom react-modal react-redux react-addons-shallow-compare react-datetime
* yarn add redux redux-thunk
* yarn add webpack css-loader sass-loader style-loader node-sass extract-text-webpack-plugin
* yarn add numeral moment history
* yarn add bootstrap@4.0.0-beta.2 popper jquery react-bootstrap
* yarn add reactstrap 
* yarn add font-awesome simple-line-icons
* yarn add express firebase
* yarn add -D webpack-dev-server dotenv

