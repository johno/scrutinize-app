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
      <form className="urlForm" onSubmit={this.handleSubmit}>
        <input type='text' placeholder='Enter a url...' ref='url'/>
        <input type='submit' value='Scrutinize Url' />
      </form>
    )
  }
});
