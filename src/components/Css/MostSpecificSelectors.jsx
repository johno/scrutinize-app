/** @jsx React.DOM */

var React = require('react')
var _sortBy = require('lodash').sortBy
var _takeRight = require('lodash').takeRight

module.exports = React.createClass({

  render: function() {
    var sortedSelectors = _sortBy(this.props.selectors || [], 'specificity_10')
    var mostSpecificSelectors = _takeRight(sortedSelectors, 10)

    var selectorNodes = mostSpecificSelectors.map(function(selector) {
      return (
        <div>
          {selector.selector}
        </div>
      )
    })

    return (
      <div className="MostSpecificSelectorsList">
        <h3 className="h2">Most Specific Selectors</h3>
        {selectorNodes}
      </div>
    )
  }
})
