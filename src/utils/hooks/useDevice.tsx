import { useCallback } from 'react';
import useMediaQuery from './useMediaQuery';

const devices:any = {
  mobile: 576,
  tablet: 768,
  desktop: 992,
  xdesktop: 1200,
};

export type DeviceTypes= keyof typeof devices;

const useDevice = () => {
  const isMobile = useMediaQuery(devices.mobile);
  const isTablet = useMediaQuery(devices.tablet);
  const isDesktop = useMediaQuery(devices.desktop);
  const isHighDisplay = useMediaQuery(devices.xdesktop);

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
