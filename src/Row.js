const React = require('react');
const classNames = require('classnames');

const ModificatorType = React.PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']);
const modificatorKeys = ['start', 'center', 'end', 'top', 'middle', 'bottom', 'around', 'between', 'nowrap', 'hiddenUp', 'hiddenDown', 'noWrapUp', 'noWrapDown'];

const Row = React.createClass({
  propTypes: {
    reverse: React.PropTypes.bool,
    start: ModificatorType,
    center: ModificatorType,
    end: ModificatorType,
    top: ModificatorType,
    middle: ModificatorType,
    bottom: ModificatorType,
    around: ModificatorType,
    between: ModificatorType,
    nowrap: ModificatorType,
    hiddenUp: ModificatorType,
    hiddenDown: ModificatorType,
    noWrapUp: ModificatorType,
    noWrapDown: ModificatorType
  },
  render() {
    const { reverse, className, children, ...other} = this.props;

    const modificators = ['row'];
    let passingProps = {};
    for (let key in other) {
      if (modificatorKeys.indexOf(key) > -1) {
        const value = other[key];
        if (key === 'hiddenUp') {
          modificators.push(`hidden-${value}-up`);
        } else if (key === 'hiddenDown') {
          modificators.push(`hidden-${value}-down`);
        } else if (key === 'noWrapUp') {
          modificators.push(`nowrap-${value}-up`);
        } else if (key === 'noWrapDown') {
          modificators.push(`nowrap-${value}-down`);
        } else if (value) {
          modificators.push(`${key}-${value}`);
        }
      } else {
        passingProps[key] = other[key];
      }
    }

    if (reverse) {
      modificators.push('reverse');
    }

    const _className = classNames(className, modificators);

    return (
      <div {...passingProps} className={_className}>
        {children}
      </div>
    );
  }
});

module.exports = Row;
