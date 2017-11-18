

## packages
* mongodb mongoose
* dotenv
* express body-parser
* graphql graphql-tools apollo-server-express
* babel-cli babel babel-env babel-preset-stage-2

## babel for node .babelrc
```json
"babel": {
  "presets": [
    [
      "env",
      {
        "targets": {
          "node": "current"
        }
      }
    ]
  ]
}
```