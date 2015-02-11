/** @jsx React.DOM */

var React = require('react')
var TopStats = require('./TopStats.jsx')
var SizeStats = require('./SizeStats.jsx')
var UrlForm = require('./UrlForm.jsx')

module.exports = React.createClass({
  getInitialState: function() {
    return { data: { title: this.props.url, a11y: { failures: [] }, psi: {}, css: {}, domStats: {} } }
  },

  handleUrlSubmit: function(url) {
    this.setState({url: url});
    $.ajax({
      url: 'http://scrutinize.herokuapp.com/?url=' + url.url,
      dataType: 'json',
      success: function(data) {
        this.setState({ data: data })
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString())
      }.bind(this)
    })
  },

  render: function() {
    return (
      <div>
        <UrlForm {...this.props} onUrlSubmit={this.handleUrlSubmit} />
        <h1>{this.state.url}</h1>
        <SizeStats {...this.state.data} />
        <TopStats {...this.state.data} />
      </div>
    )
  }
})
