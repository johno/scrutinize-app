/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var url = this.refs.url.getDOMNode().value.trim();
    if (!url) {
      return;
    }
    this.props.onUrlSubmit({url: url});
    this.refs.url.getDOMNode().value = '';
  },
  render: function() {
    return (
      <form className="urlForm" onSubmit={this.handleSubmit}
        <input type="text" name="url" ref="url" placeholder="Enter a url" className="field-light" />
        <button type="submit" className="button-blue ml1">
          Scrutinize
        </button>
      </form>
    )
  }
});
