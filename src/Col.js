const React = require('react');

const Col = React.createClass({
  propTypes: {
    xs: React.PropTypes.number,
    sm: React.PropTypes.number,
    md: React.PropTypes.number,
    lg: React.PropTypes.number,
    xl: React.PropTypes.number,
    xsOffset: React.PropTypes.number,
    smOffset: React.PropTypes.number,
    mdOffset: React.PropTypes.number,
    lgOffset: React.PropTypes.number,
    xlOffset: React.PropTypes.number,
    reverse: React.PropTypes.bool,
    first: React.PropTypes.string,
    last: React.PropTypes.string,
    hiddenUp: React.PropTypes.string,
    hiddenDown: React.PropTypes.string
  },
  _classMap: {
    xs: 'col-xs-',
    sm: 'col-sm-',
    md: 'col-md-',
    lg: 'col-lg-',
    xl: 'col-xl-',
    xsOffset: 'col-xs-offset-',
    smOffset: 'col-sm-offset-',
    mdOffset: 'col-md-offset-',
    lgOffset: 'col-lg-offset-',
    xlOffset: 'col-xl-offset-',
    first: 'first-',
    last: 'last-',
    hiddenUp: 'hidden-',
    hiddenDown: 'hidden-'
  },
  render() {
    const { reverse, className, ...other} = this.props;
    let classes = [];

    if (className) {
      classes.push(className);
    }

    if (reverse) {
      classes.push('reverse');
    }

    let passingProps = {};
    for (let key in other) {
      if (this._classMap[key]) {
        const value = other[key];
        if (key === 'hiddenUp') {
          classes.push(`hidden-${value}-up`);
        } else if (key === 'hiddenDown') {
          classes.push(`hidden-${value}-down`);
        } else if (value === 0 && (key === 'xs' || key === 'sm' || key === 'md' || key === 'lg' || key === 'xl')) {
          classes.push(`col-${value}`);
        } else if (value) {
          classes.push(`${this._classMap[key]}${value}`);
        }
      } else {
        passingProps[key] = other[key];
      }
    }

    return React.createElement('div', Object.assign({}, passingProps, {
      className: classes.join(' ')
    }), this.props.children);
  }
});

module.exports = Col;
