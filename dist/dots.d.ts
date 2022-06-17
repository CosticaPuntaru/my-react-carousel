import { RenderProps } from "./Carousel";
import { ReactElement } from "react";
export interface Dot {
  index: number;
  onClick: () => void;
  isActive: boolean;
}
export interface RenderPropsWithDots extends RenderProps {
  dots: Dot[];
}
export declare function findClosestPath(
  source: number,
  end: number,
  total: number
): number;
export declare function generateDots(
  render: (props: RenderPropsWithDots) => ReactElement
): (
  props: RenderProps
) => ReactElement<any, string | import("react").JSXElementConstructor<any>>;
