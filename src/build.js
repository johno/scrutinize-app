// Static site build task

var fs = require('fs')
var mkdirp = require('mkdirp')
var path = require('path')
var _ = require('lodash')
var React = require('react')
require('node-jsx').install()

var template = _.template(fs.readFileSync(path.join(__dirname, './layouts/default.html'), 'utf8'))
var App = React.createFactory(require('./components/App.jsx'))

module.exports = function(data) {
  data.app = React.renderToString(App(data))
  var html = template(data)

  mkdirp(path.join(__dirname, '../dist'));
  fs.writeFileSync(path.join(__dirname, '../dist/index.html'), html)
}
