import { useState } from 'react';

function useServerState() {
  const [serverState, setServerState] = useState();

  return {
    serverState,
    setServerState,
  };
}

export default useServerState;
