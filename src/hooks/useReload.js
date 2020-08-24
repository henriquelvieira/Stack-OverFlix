import { useState } from 'react';

function useReload() {
  const [reload, setReload] = useState(false);

  return {
    reload,
    setReload,
  };
}

export default useReload;
