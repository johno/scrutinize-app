/** @jsx React.DOM */

var React = require('react')

module.exports = React.createClass({

  render: function() {
    return (
      <div className="g" id="top-stats">
        <div className="g-r">
          <div className="g-r-c-3-12">
            <h4 className="h1">{this.props.totalTags}</h4>
            <p className="h4">Tags</p>
          </div>
          <div className="g-r-c-3-12">
            <h4 className="h1">{this.props.totalClasses}</h4>
            <p className="h4">CSS Classes</p>
          </div>
          <div className="g-r-c-3-12">
            <h4 className="h1">{this.props.totalIds}</h4>
            <p className="h4">CSS Ids</p>
          </div>
          <div className="g-r-c-3-12">
            <h4 className="h1">{this.props.duplicateIdsCount}</h4>
            <p className="h4">Duplicate CSS Ids</p>
          </div>
        </div>
      </div>
    )
  }
})
