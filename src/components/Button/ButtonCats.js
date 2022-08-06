import React from 'react';
import PropTypes from 'prop-types';

import '../../assets/scss/buttonStyle/buttonSttle.css';

function ButtonGetCat({ cats: { origin }, onClick }) {
  return (
    <>
      <button onClick={onClick}>{origin}</button>
    </>
  );
}

ButtonGetCat.propTypes = {
  cats: PropTypes.object,
  onClick: PropTypes.func
};

export default ButtonGetCat;
