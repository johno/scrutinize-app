/** @jsx React.DOM */

var React = require('react')
var ResultsList = require('./ResultsList.jsx')

module.exports = React.createClass({

  render: function() {
    return (
      <div className="psiSummary">
        <h4>Steps to optimizing this site</h4>
        <ResultsList results={this.props.results} />
      </div>
    )
  }
})
