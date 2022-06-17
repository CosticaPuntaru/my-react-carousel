import React from "react";
interface Options {
  infinite: boolean;
  slidesToShow: number;
  mode: "flex" | "fixed";
}
declare function useSlides(
  children: React.ReactNode,
  { infinite, slidesToShow, mode }: Options
): {
  slides: React.ReactElement<any, string | React.JSXElementConstructor<any>>[];
  slideCount: number;
  preSlidesCount: number;
};
export default useSlides;
