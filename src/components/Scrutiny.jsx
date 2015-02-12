/** @jsx React.DOM */

var React = require('react')
var TopStats = require('./Stats/TopStats.jsx')
var SizeStats = require('./Stats/SizeStats.jsx')
var MostSpecificSelectors = require('./Css/MostSpecificSelectors.jsx')
var UrlForm = require('./Urls/UrlForm.jsx')

module.exports = React.createClass({
  getInitialState: function() {
    return { data: { title: this.props.url, a11y: { failures: [] }, psi: {}, css: { stats: {} }, domStats: {} } }
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
    var selectors = this.state.data.css.stats.selectors || []

    return (
      <div>
        <UrlForm {...this.props} onUrlSubmit={this.handleUrlSubmit} />
        <h1>{this.state.url}</h1>
        <SizeStats {...this.state.data} />
        <TopStats {...this.state.data} />
        <MostSpecificSelectors selectors={selectors} />
      </div>
    )
  }
})
