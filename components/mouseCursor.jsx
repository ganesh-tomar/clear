import React, { useEffect, useRef, useState } from 'react';

const MCursor = () => {
  const [cursorState, setCursorState] = useState({
    circleExpand: false,
    icon: '',
    rotate: false,
  });

  const [mounted, setMounted] = useState(false); // New state to track if component is mounted
  const cursorRef = useRef(null);
  const currentRotation = useRef(0);

  useEffect(() => {
    setMounted(true); // Set mounted to true after component mounts

    const cursor = cursorRef.current;

    if (cursor) {
      const updateCursor = (event) => {
        cursor.style.left = `${event.clientX - 10}px`;
        cursor.style.top = `${event.clientY - 10}px`;

        const hoveredElementsExpand = document.querySelectorAll(
          '[data-cursor-expand]:hover, a:hover, button:hover'
        );
        const iconElementsExpand = document.querySelectorAll(
          '[data-cursor-icon]:hover'
        );
        const rotateElements = document.querySelectorAll(
          '[data-cursor-rotate]:hover'
        );

        const circleExpand = hoveredElementsExpand.length > 0;
        const icon = circleExpand ? iconElementsExpand[0]?.dataset.cursorIcon : '';
        const rotate = rotateElements.length > 0;

        setCursorState({
          circleExpand,
          icon,
          rotate,
        });
      };

      document.addEventListener('mousemove', updateCursor);
      document.addEventListener('click', updateCursor);
      document.addEventListener('scroll', updateCursor);

      document.documentElement.addEventListener('mouseleave', () => {
        cursor.classList.add('hidden');
      });

      document.documentElement.addEventListener('mouseenter', () => {
        cursor.classList.remove('hidden');
      });

      return () => {
        document.removeEventListener('mousemove', updateCursor);
        document.removeEventListener('click', updateCursor);
        document.removeEventListener('scroll', updateCursor);
      };
    }
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (cursor) {
      if (cursorState.icon && cursorState.rotate) {
        currentRotation.current += 180;
        cursor.style.transform = `rotate(${currentRotation.current}deg)`;
      }
    }
  }, [cursorState.icon, cursorState.rotate]);

  return (
    <div
      ref={cursorRef}
      id="cursor"
      className={`cursor ${cursorState.circleExpand ? 'expanded' : ''} ${cursorState.rotate ? 'rotate-180' : ''}`}
      style={mounted && cursorState.icon ? { backgroundImage: `var(--${cursorState.icon})` } : {}}
      aria-hidden="true"
    >
      <div
        id="cursorCircle"
        className={`cursorCircle ${cursorState.circleExpand ? 'expanded' : ''}`}
      ></div>
    </div>
  );
};

export default MCursor;
