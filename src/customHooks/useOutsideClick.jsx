import { useEffect, useCallback } from 'react';

const useOutsideClick = (ref, callback, isOpen) => {

  const memoizedCallback = useCallback(callback, [callback]);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        memoizedCallback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, memoizedCallback]); // Заменяем callback на memoizedCallback
};

export default useOutsideClick;
