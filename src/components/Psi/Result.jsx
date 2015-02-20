/** @jsx React.DOM */

var React = require('react')

module.exports = React.createClass({

  render: function() {
    var resultsNodes = this.props.result.results.map(function(result) {
      if (result.results.length) {
        return (
          <li>
            {result.header}
            <ul>
              {result.results.map(function(res) {
                return <li>{res}</li>
              })}
            </ul>
          </li>
        )
      } else {
        return (
          <li>
            {result.header}
          </li>
        )
      }
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
