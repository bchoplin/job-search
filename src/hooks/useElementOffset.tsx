import { useState, useEffect } from 'react';

const useElementOffset = (ref: React.RefObject<HTMLDivElement>): [
  number,
  {
    canScrollLeft: boolean,
    canScrollRight: boolean
  }
] => {
  const [width, setWidth] = useState(0);
  const [scrollStatus, setScrollStatus] = useState({
    canScrollLeft: false,
    canScrollRight: true,
  });

  useEffect(() => {
    const getWidth = () => {
      if (ref.current) {
        return ref.current.offsetWidth;
      } else {
        return 0;
      }
    };

    const handleResize = () => {
      setWidth(getWidth());
    };

    const getScrollStatus = () => {
      if (ref.current) {
        const left = ref.current.scrollLeft;
        const max = ref.current.offsetWidth;
        console.log(`scrolled left for ${left}, the max is ${max}`);
        if (left === 0) {
          return {
            canScrollLeft: false,
            canScrollRight: true,
          };
        } else if (left > 20 && left < (max - 40)) {
          return {
            canScrollLeft: true,
            canScrollRight: true,
          };
        } else if (left > (max - 40)) {
          return {
            canScrollLeft: true,
            canScrollRight: false,
          };
        }
      }

      return scrollStatus;
    }

    const handleScroll = () => {
      setScrollStatus(getScrollStatus());
    }

    if (ref.current) {
      setWidth(getWidth());
      setScrollStatus(getScrollStatus());
      ref.current.addEventListener('scroll', handleScroll);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);

      if (ref.current) {
        ref.current.removeEventListener('scroll', handleScroll);
      }
    }
  }, [ref]);

  return [width, scrollStatus];
};

export default useElementOffset;
