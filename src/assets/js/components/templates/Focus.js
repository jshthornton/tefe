import React, { PropTypes } from 'react';

const FocusTemplate = props => {
  return (
    <div className="template focus-template">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-4">
            {props.children[0]}
          </div>

          <div className="col-xs-8">
            {props.children[1]}
          </div>
        </div>
      </div>
    </div>
  );
};

FocusTemplate.displayName = 'FocusTemplate';
FocusTemplate.propTypes = {
  children: PropTypes.node.isRequired
};

export default FocusTemplate;