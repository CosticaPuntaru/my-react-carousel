import { default as React } from "react";

const overflowClass = "my-react-carousel-prevent-overflow";
const styling = `
  body.${overflowClass} {
    overflow: hidden;
  }
`;

const preventDefault = (e: TouchEvent) => e.preventDefault();

function useTouch(callback: (offset: number) => void) {
  React.useEffect(() => {
    const style = document.createElement("style");
    style.type = "text/css";
    style.appendChild(document.createTextNode(styling));

    document.body.appendChild(style);
    return () => {
      document.body.classList.remove(overflowClass);
      document.body.removeChild(style);
    };
  }, []);

  const [touchStartX, setTouchStartX] = React.useState(null);
  const [touchOffset, setTouchOffset] = React.useState(0);

  const onTouchStart = React.useCallback(
    (event: React.TouchEvent | React.MouseEvent) => {
      const x = (event as React.TouchEvent).changedTouches
        ? (event as React.TouchEvent).changedTouches[0].clientX
        : (event as React.MouseEvent).clientX;

      if (
        (event as React.TouchEvent).touches &&
        (event as React.TouchEvent).touches.length > 1
      ) {
        // Multiple touch points indicates an attempt to pinch-to-zoom
        return null;
      }

      event.stopPropagation();

      setTouchStartX(x);
      document.body.classList.add(overflowClass);
      document.addEventListener("touchmove", preventDefault);
    },
    []
  );

  const onTouchMove = React.useCallback(
    (event: React.TouchEvent | React.MouseEvent) => {
      if (touchStartX !== null) {
        const x = (event as React.TouchEvent).changedTouches
          ? (event as React.TouchEvent).changedTouches[0].clientX
          : (event as React.MouseEvent).clientX;

        setTouchOffset(x - touchStartX);
      }
    },
    [touchStartX]
  );

  const onTouchEnd = React.useCallback(() => {
    callback(touchOffset);
    setTouchStartX(null);
    setTimeout(() => setTouchOffset(0), 0);
    document.body.classList.remove(overflowClass);
    document.removeEventListener("touchmove", preventDefault);
  }, [touchOffset, callback]);

  const onClick = React.useCallback(
    event => {
      if (touchOffset !== 0) {
        event.preventDefault();
        event.stopPropagation();
      }
    },
    [touchOffset]
  );

  return {
    isTouching: touchStartX !== null,
    touchOffset,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    onClick
  };
}

export default useTouch;
