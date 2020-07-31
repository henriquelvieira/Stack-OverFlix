import React from 'react';
import PropTypes from 'prop-types';

// const ButtonLink = () => <header id="main-header">JSHunt</header>
function ButtonLink({ href, className, children }) {
  return (

    <a href={href} className={className}>{children}</a>

  );
}

ButtonLink.defaultProps = {
  href: '#',
  className: '',
};

ButtonLink.propTypes = {
  href: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any,

};

export default ButtonLink;
