/** @jsx React.DOM */

var React = require('react')
var Url = require('./Url.jsx')

module.exports = React.createClass({
  getInitialState: function() {
    return {
      data: {
        urls: [
          'google.com',
          'basscss.com',
          'twitter.com',
          'tachyons.com',
          'furtive.co',
          'youtube.com',
          'mozilla.com',
          'bootstrap.com',
          'purecss.io',
          'apple.com',
          'stripe.com',
          'github.com'
        ]
      }
    }
  },

  render: function() {
    var urlNodes = this.state.data.urls.map(function(url) {
      return (
        <Url url={url} />
      )
    })

    return (
      <div className="urlList">
        {urlNodes}
      </div>
    )
  }
})
