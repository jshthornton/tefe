import React, { PropTypes, createElement } from 'react';

const render = (props) => {
  return createElement(
    `h${props.depth}`,
    props,
    props.children
  );
};
render.displayName = 'Header';
render.propTypes = {
  depth: PropTypes.number.isRequired,
  children: PropTypes.node
};

export default render;