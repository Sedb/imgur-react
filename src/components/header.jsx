var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
  render: function() {
    return <nav className="navbar navbar-inverse navbar-fixed-top header">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Imgur React
        </Link>
        <ul className="nav navbar-nav navbar-right">
        </ul>
      </div>
    </nav>
  }
});