import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Alerts } from '../components/Alerts';

function useAlert(serverState) {
  const [alertOpen, setAlertOpen] = useState(false);

  const handleCloseAlert = () => {
    setAlertOpen(false);
  };

  // const Alert = () => <Alerts alertOpen={alertOpen} handleClose={handleCloseAlert} status={serverState.ok} msg={serverState.msg} />;

  function Alert({ status, msg }) {
    return (
      <>
        <Alerts alertOpen={alertOpen} handleClose={handleCloseAlert} status={status} msg={msg} />
      </>
    );
  }

  Alert.defaultProps = {
    status: false,
    msg: 'Error',
  };

  Alert.propTypes = {
    status: PropTypes.bool,
    msg: PropTypes.string,

  };

  return {
    setAlertOpen,
    Alert,
  };
}

export default useAlert;
