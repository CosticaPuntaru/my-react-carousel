import React from "react";
declare function useTouch(
  callback: (offset: number) => void
): {
  isTouching: boolean;
  touchOffset: number;
  onTouchStart: (event: React.TouchEvent | React.MouseEvent) => any;
  onTouchMove: (event: React.TouchEvent | React.MouseEvent) => void;
  onTouchEnd: () => void;
  onClickCapture: (event: any) => void;
};
export default useTouch;
