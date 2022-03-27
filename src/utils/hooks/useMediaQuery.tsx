import { useEffect, useState } from 'react';

const useMediaQuery = (query:string) => {
  const getMatches = (q:string) => window.matchMedia(q).matches;
  const [matches, setMatches] = useState<boolean>(false);

  const handleResize = () => {
    setMatches(getMatches(query));
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [query]);

  return matches;
};

export default useMediaQuery;
