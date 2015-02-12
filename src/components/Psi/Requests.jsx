/** @jsx React.DOM */

var React = require('react')

module.exports = React.createClass({

  render: function() {
    return (
      <div class="requestsDescription">
        There were {this.props.numberResources || 0} resource requests from {this.props.numberHosts || 0} different hosts.
      </div>
    )
  }
})
