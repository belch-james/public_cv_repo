const React = require("react");

function MockNextLink(props, ref) {
  const { children, href, ...rest } = props;

  return React.createElement("a", { href, ...rest, ref }, children);
}

module.exports = React.forwardRef(MockNextLink);
