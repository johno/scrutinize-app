/** @jsx React.DOM */

var React = require('react')

module.exports = React.createClass({

  render: function() {
    return (
      <div className="g" id="top-stats">
        <div className="g-r">
          <div className="g-r-c-3-12">
            <h4 className="h1">{this.props.score}</h4>
            <p className="h4">Score</p>
          </div>
          <div className="g-r-c-3-12">
            <h4 className="h1">{this.props.a11y.failures.length}</h4>
            <p className="h4">a11y Failures</p>
          </div>
          <div className="g-r-c-3-12">
            <h4 className="h1">{this.props.domStats.totalTags}</h4>
            <p className="h4">HTML Tags</p>
          </div>
          <div className="g-r-c-3-12">
            <h4 className="h1">{this.props.css.selectorCount}</h4>
            <p className="h4">CSS Selectors</p>
          </div>
        </div>
      </div>
    )
  }
})
