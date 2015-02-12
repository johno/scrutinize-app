/** @jsx React.DOM */

var React = require('react')

module.exports = React.createClass({

  render: function() {
    var resultsNodes = this.props.result.results.map(function(result) {
      return (
        <li>
          {result}
        </li>
      )
    })

    return (
      <div className="ResultForResultsList">
        <h5>{this.props.result.header}</h5>
        <ul>
          {resultsNodes}
        </ul>
      </div>
    )
  }
})
