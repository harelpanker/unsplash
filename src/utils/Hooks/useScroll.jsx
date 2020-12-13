import { useState, useEffect } from 'react';

const useScroll = () => {
  const [scrollPosition, setScrollPosition] = useState(null);

  const handleScroll = () => setScrollPosition(window.scrollY);

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollPosition;
};

export default useScroll;
