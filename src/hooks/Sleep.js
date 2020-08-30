import PropTypes from 'prop-types';

function Sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

Sleep.propTypes = {
  ms: PropTypes.number.isRequired,

};

export default Sleep;
