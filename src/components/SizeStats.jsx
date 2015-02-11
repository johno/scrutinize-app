/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({

  render: function() {
    return (
      <div className="g" id="size-stats">
        <div className="g-r">
          <div className="g-r-c-3-12">
            <h4 className="h1">{this.props.totalPageSizePretty}</h4>
            <p className="h4">Total</p>
          </div>
          <div className="g-r-c-3-12">
            <h4 className="h1">{this.props.cssSizePretty}</h4>
            <p className="h4">CSS</p>
          </div>
          <div className="g-r-c-3-12">
            <h4 className="h1">{this.props.jsSizePretty}</h4>
            <p className="h4">JS</p>
          </div>
          <div className="g-r-c-3-12">
            <h4 className="h1">{this.props.imageSizePretty}</h4>
            <p className="h4">Images</p>
          </div>
        </div>
      </div>
    );
  }
});
