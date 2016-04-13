var React = require('react');

var DefaultLayout = React.createClass({
  render: function() {
    return (
	<html>
        <head>
			<title>{this.props.title}</title>
			<meta charSet='utf-8' />
			<meta httpEquiv="X-UA-Compatible" content='IE=edge' />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<script src='jquery-1.12.3.min.js' />
			<link href='bootstrap.min.css' rel='stylesheet' />
			<script src='bootstrap.min.js' />
			<link href='style.css' rel='stylesheet' />
			<link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />
			<link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
		</head>
        <body>
			<nav className="navbar navbar-inverse navbar-fixed-top">
				<div className="container">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<a className="navbar-brand" href="/">apirabb.it</a>
					</div>
					<div id="navbar" className="collapse navbar-collapse">
						<ul className="nav navbar-nav">
							<li><span className="label label-warning">ALPHA</span></li>
							<li className="active"><a href="/">Home</a></li>
							<li><a href="http://github.com/ckprice">Contact</a></li>
						</ul>
					</div>
				</div>
			</nav>

			<div className="container">
				<div className="main">
					<h1>apirabb.it <img className="logo" src="/images/logo.png" /></h1>
					<p className="lead">Create API endpoints on the fly<br />for testing, public use, and whatever else.</p>
				</div>
			</div>
			<div className="container">
				<div className="main">{this.props.children}</div>
			</div>
        </body>
	</html>
    );
  }
});

module.exports = DefaultLayout;