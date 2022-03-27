import { useCallback } from 'react';
import useMediaQuery from './useMediaQuery';

const devices = {
  mobile: 576,
  tablet: 768,
  desktop: 992,
  xdesktop: 1200,
};

const createMediaQuery = (n:number) => `(min-width:${n})`;

export type DeviceTypes= keyof typeof devices;

const useDevice = () => {
  const isMobile = useMediaQuery(createMediaQuery(devices.mobile));
  const isTablet = useMediaQuery(createMediaQuery(devices.tablet));
  const isDesktop = useMediaQuery(createMediaQuery(devices.desktop));
  const isHighDisplay = useMediaQuery(createMediaQuery(devices.xdesktop));

  const getDevice = useCallback(() => {
    if (isMobile) {
      return 'mobile';
    }
    if (isTablet) {
      return 'tablet';
    }
    return isDesktop;
  }, [isMobile, isTablet, isDesktop]);

  return { getDevice, isHighDisplay };
};

export default useDevice;
