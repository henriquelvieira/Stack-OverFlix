import React, { useState } from 'react';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

export function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export function Alerts(props) {
  let vDuration;
  if (!props.timeDuration) {
    vDuration = 6000;
  } else {
    vDuration = props.timeDuration;
  }

  return (
    <Snackbar open={props.alertOpen} autoHideDuration={vDuration} onClose={props.handleClose}>
      <Alert onClose={props.handleClose} severity={props.status ? 'success' : 'error'}>
        {props.msg}
      </Alert>
    </Snackbar>
  );
}
