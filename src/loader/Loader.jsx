import React from 'react';
import PropTypes from 'prop-types';
import './loader.css';

const propTypes = {
  children: PropTypes.element.isRequired
};

function Loader(props) {
  return (
    <div style={{ marginTop: 150 }}>
      {props.children}
      <div className="spinner">
        <div className="bounce1" />
        <div className="bounce2" />
        <div className="bounce3" />
      </div>
    </div>
  );
}

Loader.propTypes = propTypes;
export default Loader;
