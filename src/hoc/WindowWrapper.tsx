import React, { useRef } from 'react';
import gsap from 'gsap';
import { Draggable } from 'gsap/all';
import useWindowStore from '../store/window';
import type { WindowKey } from '../store/window';

gsap.registerPlugin(Draggable);

const WindowWrapper = <P extends object,>(
  Component: React.ComponentType<P>,
  windowKey: WindowKey
) => {
  const Wrapped = (props: P) => {
    const { windows } = useWindowStore();
    const { zIndex } = windows[windowKey];
    const ref = useRef<HTMLElement | null>(null);

    return (
      <section id={windowKey} ref={ref} style={{ zIndex }} className="absolute">
        <Component {...props} />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || 'Component'})`;

  return Wrapped;
};

export default WindowWrapper

