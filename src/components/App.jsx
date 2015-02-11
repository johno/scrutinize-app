/** @jsx React.DOM */

var React = require('react');
var GlobalNav = require('./GlobalNav.jsx');
var Footer = require('./Footer.jsx');
var UrlForm = require('./UrlForm.jsx');
var Scrutiny = require('./Scrutiny.jsx');

module.exports = React.createClass({

  render: function() {
    return (
      <div>
        <GlobalNav {...this.props} />
        <UrlForm {...this.props} />
        <Scrutiny url="furtive.co" />
        <Footer {...this.props} />
      </div>
    )
  }
});
