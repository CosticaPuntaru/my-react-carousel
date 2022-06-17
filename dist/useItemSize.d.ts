import React from "react";
interface Options {
  wrapper: React.MutableRefObject<HTMLDivElement>;
  callback: (size: number) => void;
  measure: "width" | "height";
  slidesToShow: number;
  mode: "flex" | "fixed";
}
declare function useItemSize({
  wrapper,
  callback,
  measure,
  slidesToShow,
  mode
}: Options): void;
export default useItemSize;
