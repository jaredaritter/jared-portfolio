import { useState, useEffect } from 'react';

const useViewport = () => {
  // INITIAL STATE THROWING ERROR. HAVE NOT FOUND WORKAROUND AND THIS CAUSES PAGE TO WORK CORRECTLY
  const [width, setWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 800
  );
  console.log(
    'I am aware of error being thrown in mobile console. It is an issue of server vs client side rendering and does not affect page function.'
  );

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);
  return { width };
};

export { useViewport };
