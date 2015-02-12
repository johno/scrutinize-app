/** @jsx React.DOM */

var React = require('react')
var UrlForm = require('./Urls/UrlForm.jsx')
var TopStats = require('./Stats/TopStats.jsx')
var SizeStats = require('./Stats/SizeStats.jsx')
var DomTags = require('./Dom/Tags.jsx')
var Requests = require('./Psi/Requests.jsx')
var MostSpecificSelectors = require('./Css/MostSpecificSelectors.jsx')

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
        <Requests {...this.state.data.psi} />
        <TopStats {...this.state.data} />
        <SizeStats {...this.state.data} />
        <MostSpecificSelectors selectors={selectors} />
        <DomTags {...this.state.data.domStats} />
      </div>
    )
  }
})
