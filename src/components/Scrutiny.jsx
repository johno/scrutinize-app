/** @jsx React.DOM */

var React = require('react');
var UrlForm = require('./UrlForm.jsx');

module.exports = React.createClass({
  loadScrutinyFromServer: function() {
    $.ajax({
      url: 'http://scrutinize.herokuapp.com/?url=' + url.url,
      dataType: 'json',
      success: function(data) {
        this.setState({ data: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return { data: {}, url: 'furtive.io'};
  },

  componentDidMount: function() {
    this.loadScrutinyFromServer();
  },

  handleUrlSubmit: function(url) {
    this.setState({url: url});
    $.ajax({
      url: 'http://scrutinize.herokuapp.com/?url=' + url.url,
      dataType: 'json',
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    return (
      <div>
        <UrlForm {...this.props} onUrlSubmit={this.handleUrlSubmit} />
        <h1>{this.state.url}</h1>
        <pre>
          {this.state.data}
        </pre>
      </div>
    );
  }
});
