/** @jsx React.DOM */

var React = require('react')
var isUrl = require('is-url')
var normalizeUrl = require('normalize-url')

module.exports = React.createClass({

  handleSubmit: function(e) {
    var url = this.refs.url.getDOMNode().value.trim()

    if (!isUrl(normalizeUrl(url))) {
      // ... TODO: Provide error message.
      return;
    }
  },

  render: function() {
    return (
      <form className="urlForm" onSubmit={this.handleSubmit}>
        <input type="text" name="url" ref="url" placeholder="Enter a url" className="field-light" />
        <button type="submit" className="button-blue ml1">
          Scrutinize
        </button>
      </form>
    )
  }
})
