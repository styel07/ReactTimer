var React = require('react');
var Navigation = require('Navigation');
var Timer = require('Timer');
var Countdown = require('Countdown');

var Main = (props) => {
  return (
    <div>
      <div>
        <Navigation/>
        <p>Main.jsx Rendered</p>
        {props.children}
      </div>
    </div>
  );
}

module.exports = Main;
