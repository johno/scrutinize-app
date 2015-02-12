/** @jsx React.DOM */

var React = require('react')
var Result = require('./Result.jsx')

module.exports = React.createClass({

  render: function() {
    var resultsNodes = this.props.results.map(function(result) {
      return (
        <div>
          <h6>{result.name}</h6>
          <Result result={result} />
        </div>
      )
    })

    return (
      <div className="ResultsList">
        {resultsNodes}
      </div>
    )
  }
})
