import { useState, useEffect, useRef, MouseEvent, useCallback } from 'react';

function useOutsideClick<T extends HTMLElement>(initialIsVisible: boolean) {
  const [visible, setVisible] = useState(initialIsVisible);
  const ref = useRef<T | null>(null);

  const handleClickOutside = useCallback(
    (event: CustomEvent<MouseEvent<T>>) => {
      if (
        ref.current &&
        !ref.current.contains(event.target as HTMLDivElement)
      ) {
        setVisible(false);
      }
    },
    [],
  );

  useEffect(() => {
    document.addEventListener('click', handleClickOutside as EventListener);

    return () => {
      document.removeEventListener(
        'click',
        handleClickOutside as EventListener,
      );
    };
  }, [handleClickOutside, ref]);

  return { ref, visible, setVisible };
}

export default useOutsideClick;
