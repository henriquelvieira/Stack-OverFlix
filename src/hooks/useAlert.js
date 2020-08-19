import React, { useState } from 'react';
import { Alerts } from '../components/Alerts';

function useAlert(serverState) {
  const [alertOpen, setAlertOpen] = useState(false);

  const handleCloseAlert = () => {
    setAlertOpen(false);
  };

  const Alert = () => <Alerts alertOpen={alertOpen} handleClose={handleCloseAlert} status={serverState.ok} msg={serverState.msg} />;

  return {
    setAlertOpen,
    Alert,
  };
}

export default useAlert;
