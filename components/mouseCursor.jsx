import { useEffect, useRef, useState } from 'react';

const MCursor = () => {
  const [cursorState, setCursorState] = useState({
    dataset: {
      circleExpand: 'false',
      icon: 'none',
    },
    style: {
      transform: 'translate(-100px, -100px)',
      backgroundImage: 'none',
    },
  });
  const [hoveredElementsExpand, setHoveredElementsExpand] = useState([]);
  const [iconElementsExpand, setIconElementsExpand] = useState([]);

  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    if (cursor) {
      const cursorSizeOffset = 0.3 * cursor.clientWidth;

      const updateCursor = (event) => {
        setCursorState((prevCursorState) => ({
          dataset: {
            circleExpand: hoveredElementsExpand.length > 0 ? 'true' : 'false',
            icon:
              iconElementsExpand.length > 0
                ? iconElementsExpand[0].dataset.cursorIcon
                : '',
          },
          style: {
            transform: `translate(${event.clientX - cursorSizeOffset - 15}px, ${event.clientY - cursorSizeOffset - 20
              }px)`,
            backgroundImage: `var(--${prevCursorState.dataset.icon})`,
          },
        }));
      };

      const moveCursor = () => {
        setHoveredElementsExpand(
          document.querySelectorAll(
            '[data-cursor-expand]:hover, a:hover, button:hover'
          )
        );
        setIconElementsExpand(
          document.querySelectorAll('[data-cursor-icon]:hover')
        );

        requestAnimationFrame(moveCursor);
      };

      document.addEventListener('mousemove', updateCursor);
      document.documentElement.addEventListener('mouseleave', () => {
        cursor.classList.add('hidden');
      });

      document.documentElement.addEventListener('mouseenter', () => {
        cursor.classList.remove('hidden');
      });

      requestAnimationFrame(moveCursor);

      return () => {
        document.removeEventListener('mousemove', updateCursor);
      };
    }
  }, [hoveredElementsExpand, iconElementsExpand]);

  const cursorCircleStyles = {
    transform: cursorState.style.transform,
  };

  const cursorIconStyles = {
    backgroundImage: cursorState.style.backgroundImage || '',
  };

  return (
    <div
      ref={cursorRef}
      id="cursor"
      className={`cursor`}
      data-circle-expand={
        cursorState.dataset.circleExpand === 'true' && 'true'
      }
      data-icon={cursorState.dataset.icon}
      style={cursorCircleStyles}
    >
      <div
        id="cursorCircle"
        className={`cursorCircle ${cursorState.dataset.circleExpand === 'true' && 'expanded'
          }`}

      ></div>
      <div
        id="cursorIcon"
        className={`cursorIcon ${cursorState.dataset.icon ? 'true' : 'false'
          }`}
        style={cursorIconStyles}
      ></div>
    </div>
  );
};

export default MCursor;
