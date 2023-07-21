'use client';

import { useEffect, useState } from 'react';

export default function Loading() {
  const [isSSR, setIsSSR] = useState(true);
  useEffect(() => {
    setIsSSR(false);
  }, []);
  return isSSR ? null : <div> Loading</div>;
}
