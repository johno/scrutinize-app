/** @jsx React.DOM */

var React = require('react')

var isUrl = require('is-url')
var normalizeUrl = require('normalize-url')

var UrlForm = require('./Urls/UrlForm.jsx')
var TopStats = require('./Stats/TopStats.jsx')
var SizeStats = require('./Stats/SizeStats.jsx')
var DomTags = require('./Dom/Tags.jsx')
var PsiRequests = require('./Psi/Requests.jsx')
var PsiSummary = require('./Psi/Summary.jsx')
var MostSpecificSelectors = require('./Css/MostSpecificSelectors.jsx')

module.exports = React.createClass({
  getInitialState: function() {
    return { data: { title: this.props.url, a11y: { failures: [] }, psi: { ruleResults: [] }, css: { stats: {} }, domStats: {} } }
  },

  getUrlData: function(url) {
    this.setState({ url: url });

    $.ajax({
      url: 'http://scrutinize.herokuapp.com/?url=' + this.state.url,
      dataType: 'json',
      success: function(data) {
        this.setState({ data: data })
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString())
      }.bind(this)
    })
  },

  componentDidMount: function() {
    var url = window.location.href.split('/?url=')[1]

    if (url && isUrl(normalizeUrl(url))) {
      this.getUrlData(url)
    }
  },

  render: function() {
    var selectors = this.state.data.css.stats.selectors || []

    return (
      <div>
        <UrlForm {...this.props} />
        <h1>{this.state.url}</h1>
        <PsiRequests {...this.state.data.psi} />
        <TopStats {...this.state.data} />
        <SizeStats {...this.state.data} />
        <MostSpecificSelectors selectors={selectors} />
        <DomTags {...this.state.data.domStats} />
        <PsiSummary results={this.state.data.psi.ruleResults} />
      </div>
    )
  }
})
