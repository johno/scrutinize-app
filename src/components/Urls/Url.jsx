/** @jsx React.DOM */

var React = require('react')

module.exports = React.createClass({

  fullUrl: function() {
    return '?url=' + this.props.url
  },

  render: function() {
    return (
      <div className="urlList-Item">
        <a href={this.fullUrl()}>{this.props.url}</a>
      </div>
    )
  }
})
