import React, { useEffect, useRef, useState } from 'react';
// import './MCursor.css'; // Assuming you have a corresponding CSS file

const MCursor = () => {
  const [cursorState, setCursorState] = useState({
    circleExpand: false,
    icon: '',
  });

  const cursorRef = useRef(null);
  const hoveredElementsExpandRef = useRef([]);
  const iconElementsExpandRef = useRef([]);

  useEffect(() => {
    const cursor = cursorRef.current;

    if (cursor) {
      const updateCursor = (event) => {
        cursor.style.left = `${event.clientX-10}px`;
        cursor.style.top = `${event.clientY - 10}px`;
      };

      const moveCursor = () => {
        hoveredElementsExpandRef.current = document.querySelectorAll(
          '[data-cursor-expand]:hover, a:hover, button:hover'
        );
        iconElementsExpandRef.current = document.querySelectorAll(
          '[data-cursor-icon]:hover'
        );

        const circleExpand = hoveredElementsExpandRef.current.length > 0;
        const icon = circleExpand ? iconElementsExpandRef.current[0]?.dataset.cursorIcon : '';

        setCursorState({
          circleExpand,
          icon,
        });
      };

      document.addEventListener('mousemove', updateCursor);
      document.addEventListener('mousemove', moveCursor);
      document.documentElement.addEventListener('mouseleave', () => {
        cursor.classList.add('hidden');
      });

      document.documentElement.addEventListener('mouseenter', () => {
        cursor.classList.remove('hidden');
      });

      return () => {
        document.removeEventListener('mousemove', updateCursor);
        document.removeEventListener('mousemove', moveCursor);
      };
    }
  }, []);

  // console.log(cursorState.icon);
  return (
    <div
      ref={cursorRef}
      id="cursor"
      className={`cursor ${cursorState.circleExpand ? 'expanded' : ''}`}
      style={{
        backgroundImage: cursorState.icon ? `var(--${cursorState.icon})` : '',
      }}
    >
      <div
        id="cursorCircle"
        className={`cursorCircle ${cursorState.circleExpand ? 'expanded' : ''}`}
      ></div>
      {/* <div
        id="cursorIcon"
        className={`cursorIcon ${cursorState.icon ? 'true' : 'false'}`}
      ></div> */}
    </div>
  );
};

export default MCursor;
