/** @jsx React.DOM */

var React = require('react');
var $ = require('jquery-browserify');

module.exports = React.createClass({
  getInitialState: function() {
    return { data: {} };
  },

  componentDidMount: function() {
    $.ajax({
      url: 'http://scrutinize.herokuapp.com/?url=' + this.props.url,
      dataType: 'json',
      success: function(data) {
        this.setState({ data: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  render: function() {
    return (
      <div>
        <h1>{this.props.url}</h1>
        <pre>
          {this.state.data}
        </pre>
      </div>
    );
  }
});
