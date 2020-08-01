import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Components
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  --padding-top: 50px;
  --padding-left: 5%;
  --padding-right: 5%;
`;

function Layout({ showButtonNewVideo, showFooter,  children }) {
  return (
    <>
      <Menu showButtonNewVideo={showButtonNewVideo} />

      <Main>
        {children}
      </Main>

      {showFooter && <Footer />}
    </>
  );
}

Layout.defaultProps = {
  showButtonNewVideo: false,
  showFooter: false,
};

Layout.propTypes = {
  showButtonNewVideo: PropTypes.bool,
  showFooter: PropTypes.bool,
  children: PropTypes.element.isRequired,

};

export default Layout;
