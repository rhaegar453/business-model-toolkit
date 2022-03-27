import { useCallback } from 'react';
import useMediaQuery from './useMediaQuery';

const devices = {
  mobile: 576,
  tablet: 768,
  desktop: 992,
  xdesktop: 1200,
};

export type DeviceTypes= keyof typeof devices;

function useDevice({
  mobileMediaQuery = '(max-width: 599px)',
  tabletMediaQuery = '(max-width: 959px)',
  desktopMediaQuery = '(max-width: 1320px)',
  highResMediaQuery = '(min-width: 1321px)',
} = {}) {
  const isMobile = useMediaQuery(mobileMediaQuery);
  const isTablet = useMediaQuery(tabletMediaQuery);
  const isDesktop = useMediaQuery(desktopMediaQuery); // Use this for edge cases

  const isHighRes = useMediaQuery(highResMediaQuery);
  const getDevice = useCallback(() => {
    if (isMobile) return 'mobile';
    if (isTablet) return 'tablet';
    return 'desktop';
  }, [isMobile, isTablet]);
  return {
    isMobile,
    isTablet,
    isDesktop,
    isHighRes,
    getDevice,
  };
}

export default useDevice;
