/** @jsx React.DOM */

var React = require('react')
var GlobalNav = require('./GlobalNav.jsx')
var Footer = require('./Footer.jsx')
var Scrutiny = require('./Scrutiny.jsx')
var UrlList = require('./Urls/UrlList.jsx')

module.exports = React.createClass({

  render: function() {
    return (
      <div>
        <GlobalNav {...this.props} />
        <Scrutiny {...this.props} />
        <UrlList />
        <Footer {...this.props} />
        <script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
      </div>
    )
  }
})
