import { useEffect } from 'react';

function isInViewport(element) {
  if (!element) return false;
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    const targetElement = entry.target;
    if (entry.isIntersecting) {
      targetElement.classList.add('showUnderline');
    } else {
      targetElement.classList.remove('showUnderline');
    }
  });
}

export default function IntersectionObserverComponent() {
  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5, rootMargin: "-5%" });

    const underlineContainers = document.querySelectorAll('.underline-container');
    const underlineContainer = document.querySelectorAll('u');

    underlineContainers.forEach((element) => {
      if (isInViewport(element)) {
        element.classList.add('showUnderline');
      }
      observer.observe(element);
    });
    underlineContainer.forEach((element) => {
      if (isInViewport(element)) {
        element.classList.add('showUnderline');
      }
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []); // empty dependency array to run the effect only once

  return null; // This component doesn't render anything in the DOM
}
