/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <form>
        <input name="url" placeholder="Enter a url..." />
        <input type="submit" value="Scrutinize Url" />
      </form>
    )
  }
});
