/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <footer>
        <p>
          Crafted with &lt;3 by <a href="http://johnotander.com" title="John Otander's website">John Otander</a>
          (<a href="https://twitter.com/4lpine" title="John Otander on Twitter (@4lpine)">@4lpine</a>). <br />
          &lt;/&gt; available on <a href="https://github.com/johnotander/scrutinize-app" title="Scrutinize app source code">Github</a>.
        </p>
      </footer>
    )
  }
});
